"""
Tests del Sistema de Gestión Escolar.
Cubre: modelos, permisos por rol, y endpoints de la API.

Ejecutar con: python manage.py test escolar_api
"""
from django.test import TestCase
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from escolar_api.models import Usuario, Estudiante, Asistencia, Evaluacion, Anotacion, Reunion
from datetime import datetime, timedelta
from django.utils import timezone


# ==========================================
# Tests de Modelos
# ==========================================

class UsuarioModelTest(TestCase):
    """Verifica la creación y representación del modelo Usuario."""

    def test_crear_usuario_con_rol(self):
        user = Usuario.objects.create_user(username='test_doc', password='test123', rol='docente')
        self.assertEqual(user.rol, 'docente')
        self.assertTrue(user.check_password('test123'))

    def test_rol_por_defecto_apoderado(self):
        user = Usuario.objects.create_user(username='test_apo', password='test123')
        self.assertEqual(user.rol, 'apoderado')

    def test_str_representation(self):
        user = Usuario.objects.create_user(username='maria', password='test123', rol='docente')
        self.assertEqual(str(user), 'maria - Docente')


class EstudianteModelTest(TestCase):
    """Verifica la creación y relación del modelo Estudiante."""

    def setUp(self):
        self.apoderado = Usuario.objects.create_user(username='papa1', password='test123', rol='apoderado')

    def test_crear_estudiante(self):
        est = Estudiante.objects.create(nombre_completo='Juan Pérez', apoderado=self.apoderado, curso='1° Básico')
        self.assertEqual(est.nombre_completo, 'Juan Pérez')
        self.assertEqual(est.apoderado, self.apoderado)

    def test_str_representation(self):
        est = Estudiante.objects.create(nombre_completo='María López', apoderado=self.apoderado, curso='2° Básico')
        self.assertEqual(str(est), 'María López')

    def test_relacion_apoderado_estudiantes(self):
        Estudiante.objects.create(nombre_completo='Hijo 1', apoderado=self.apoderado, curso='1° Básico')
        Estudiante.objects.create(nombre_completo='Hijo 2', apoderado=self.apoderado, curso='3° Básico')
        self.assertEqual(self.apoderado.estudiantes.count(), 2)


class AnotacionModelTest(TestCase):
    """Verifica el modelo de Anotación."""

    def setUp(self):
        self.docente = Usuario.objects.create_user(username='prof1', password='test123', rol='docente')
        self.apoderado = Usuario.objects.create_user(username='papa1', password='test123', rol='apoderado')
        self.estudiante = Estudiante.objects.create(nombre_completo='Test Alumno', apoderado=self.apoderado, curso='1° Básico')

    def test_crear_anotacion_positiva(self):
        anot = Anotacion.objects.create(
            estudiante=self.estudiante, tipo='positiva',
            descripcion='Excelente comportamiento', docente=self.docente
        )
        self.assertEqual(anot.tipo, 'positiva')
        self.assertIn('Positiva', str(anot))

    def test_crear_anotacion_negativa(self):
        anot = Anotacion.objects.create(
            estudiante=self.estudiante, tipo='negativa',
            descripcion='Llegó tarde', docente=self.docente
        )
        self.assertEqual(anot.tipo, 'negativa')


# ==========================================
# Tests de Autenticación JWT
# ==========================================

class AuthenticationTest(APITestCase):
    """Verifica el flujo de autenticación JWT."""

    def setUp(self):
        self.user = Usuario.objects.create_user(username='testuser', password='testpass123', rol='docente')
        self.client = APIClient()

    def test_login_exitoso(self):
        response = self.client.post('/api/token/', {'username': 'testuser', 'password': 'testpass123'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
        self.assertEqual(response.data['rol'], 'docente')
        self.assertEqual(response.data['username'], 'testuser')

    def test_login_fallido(self):
        response = self.client.post('/api/token/', {'username': 'testuser', 'password': 'wrongpass'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_acceso_sin_token(self):
        response = self.client.get('/api/estudiantes/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_acceso_con_token(self):
        login = self.client.post('/api/token/', {'username': 'testuser', 'password': 'testpass123'})
        token = login.data['access']
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {token}')
        response = self.client.get('/api/estudiantes/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_refresh_token(self):
        login = self.client.post('/api/token/', {'username': 'testuser', 'password': 'testpass123'})
        refresh = login.data['refresh']
        response = self.client.post('/api/token/refresh/', {'refresh': refresh})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)


# ==========================================
# Tests de Permisos por Rol
# ==========================================

class PermisosRolTest(APITestCase):
    """Verifica que los permisos por rol funcionen correctamente."""

    def setUp(self):
        self.docente = Usuario.objects.create_user(username='docente', password='test123', rol='docente')
        self.apoderado = Usuario.objects.create_user(username='apoderado', password='test123', rol='apoderado')
        self.admin = Usuario.objects.create_user(username='admin', password='test123', rol='admin')
        self.apoderado2 = Usuario.objects.create_user(username='apoderado2', password='test123', rol='apoderado')

        self.estudiante = Estudiante.objects.create(
            nombre_completo='Test Alumno', apoderado=self.apoderado, curso='1° Básico'
        )
        self.client = APIClient()

    def _auth(self, user):
        """Helper para autenticar un usuario."""
        login = self.client.post('/api/token/', {'username': user.username, 'password': 'test123'})
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {login.data["access"]}')

    # --- Evaluaciones ---
    def test_docente_puede_crear_evaluacion(self):
        self._auth(self.docente)
        data = {
            'titulo': 'Prueba Mate',
            'descripcion': 'Sumas y restas',
            'fecha_evaluacion': (timezone.now() + timedelta(days=7)).isoformat(),
            'asignatura': 'Matemáticas',
            'curso': '1° Básico'
        }
        response = self.client.post('/api/evaluaciones/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_apoderado_no_puede_crear_evaluacion(self):
        self._auth(self.apoderado)
        data = {
            'titulo': 'Prueba', 'descripcion': 'Test',
            'fecha_evaluacion': timezone.now().isoformat(),
            'asignatura': 'Lenguaje', 'curso': '1° Básico'
        }
        response = self.client.post('/api/evaluaciones/', data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_apoderado_puede_ver_evaluaciones(self):
        self._auth(self.apoderado)
        response = self.client.get('/api/evaluaciones/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # --- Anotaciones ---
    def test_docente_puede_crear_anotacion(self):
        self._auth(self.docente)
        data = {
            'estudiante': str(self.estudiante.pk),
            'tipo': 'positiva',
            'descripcion': 'Buen trabajo'
        }
        response = self.client.post('/api/anotaciones/', data)
        if response.status_code != 201:
            print("ERROR ANOTACION:", response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_apoderado_no_puede_crear_anotacion(self):
        self._auth(self.apoderado)
        data = {
            'estudiante': str(self.estudiante.pk),
            'tipo': 'positiva',
            'descripcion': 'Intento no permitido'
        }
        response = self.client.post('/api/anotaciones/', data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # --- Asistencia ---
    def test_docente_puede_registrar_asistencia(self):
        self._auth(self.docente)
        data = {'estudiante': str(self.estudiante.pk), 'presente': True}
        response = self.client.post('/api/asistencias/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_apoderado_no_puede_registrar_asistencia(self):
        self._auth(self.apoderado)
        data = {'estudiante': str(self.estudiante.pk), 'presente': True}
        response = self.client.post('/api/asistencias/', data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # --- Reuniones ---
    def test_docente_puede_crear_reunion(self):
        self._auth(self.docente)
        data = {
            'titulo': 'Reunión Apoderados',
            'descripcion': 'Temas generales',
            'fecha_hora': (timezone.now() + timedelta(days=14)).isoformat(),
            'curso': '1° Básico'
        }
        response = self.client.post('/api/reuniones/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_apoderado_no_puede_crear_reunion(self):
        self._auth(self.apoderado)
        data = {
            'titulo': 'Reunión', 'descripcion': 'Test',
            'fecha_hora': timezone.now().isoformat(), 'curso': '1° Básico'
        }
        response = self.client.post('/api/reuniones/', data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # --- Estudiantes (solo admin puede crear) ---
    def test_admin_puede_crear_estudiante(self):
        self._auth(self.admin)
        data = {
            'nombre_completo': 'Nuevo Alumno',
            'apoderado': str(self.apoderado.pk),
            'curso': '2° Básico'
        }
        response = self.client.post('/api/estudiantes/', data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_docente_no_puede_crear_estudiante(self):
        self._auth(self.docente)
        data = {
            'nombre_completo': 'Otro Alumno',
            'apoderado': str(self.apoderado.pk),
            'curso': '2° Básico'
        }
        response = self.client.post('/api/estudiantes/', data)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    # --- Usuarios (solo admin) ---
    def test_admin_puede_ver_usuarios(self):
        self._auth(self.admin)
        response = self.client.get('/api/usuarios/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_docente_no_puede_ver_usuarios(self):
        self._auth(self.docente)
        response = self.client.get('/api/usuarios/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_apoderado_no_puede_ver_usuarios(self):
        self._auth(self.apoderado)
        response = self.client.get('/api/usuarios/')
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


# ==========================================
# Tests de Filtrado por Rol
# ==========================================

class FiltradoRolTest(APITestCase):
    """Verifica que cada rol solo vea los datos que le corresponden."""

    def setUp(self):
        self.docente = Usuario.objects.create_user(username='docente', password='test123', rol='docente')
        self.apoderado1 = Usuario.objects.create_user(username='apo1', password='test123', rol='apoderado')
        self.apoderado2 = Usuario.objects.create_user(username='apo2', password='test123', rol='apoderado')

        self.est1 = Estudiante.objects.create(nombre_completo='Hijo Apo1', apoderado=self.apoderado1, curso='1° Básico')
        self.est2 = Estudiante.objects.create(nombre_completo='Hijo Apo2', apoderado=self.apoderado2, curso='2° Básico')

        self.client = APIClient()

    def _auth(self, user):
        login = self.client.post('/api/token/', {'username': user.username, 'password': 'test123'})
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {login.data["access"]}')

    def test_apoderado_solo_ve_sus_estudiantes(self):
        self._auth(self.apoderado1)
        response = self.client.get('/api/estudiantes/')
        results = response.data.get('results', response.data)
        nombres = [e['nombre_completo'] for e in results]
        self.assertIn('Hijo Apo1', nombres)
        self.assertNotIn('Hijo Apo2', nombres)

    def test_apoderado_solo_ve_asistencias_de_sus_hijos(self):
        # Crear asistencias como docente
        self._auth(self.docente)
        self.client.post('/api/asistencias/', {'estudiante': str(self.est1.pk), 'presente': True})
        self.client.post('/api/asistencias/', {'estudiante': str(self.est2.pk), 'presente': False})

        # Verificar como apoderado1
        self._auth(self.apoderado1)
        response = self.client.get('/api/asistencias/')
        results = response.data.get('results', response.data)
        for asist in results:
            self.assertEqual(asist['estudiante_nombre'], 'Hijo Apo1')

    def test_docente_ve_solo_sus_anotaciones(self):
        # Crear anotación como docente
        self._auth(self.docente)
        self.client.post('/api/anotaciones/', {
            'estudiante': str(self.est1.pk), 'tipo': 'positiva', 'descripcion': 'Bien'
        })

        response = self.client.get('/api/anotaciones/')
        results = response.data.get('results', response.data)
        for anot in results:
            self.assertEqual(anot['docente_nombre'], 'docente')


# ==========================================
# Tests de Asistencia Masiva
# ==========================================

class AsistenciaMasivaTest(APITestCase):
    """Verifica el endpoint de asistencia masiva (bulk_create)."""

    def setUp(self):
        self.docente = Usuario.objects.create_user(username='docente', password='test123', rol='docente')
        self.apoderado = Usuario.objects.create_user(username='apo', password='test123', rol='apoderado')
        self.est1 = Estudiante.objects.create(nombre_completo='Alumno 1', apoderado=self.apoderado, curso='1° Básico')
        self.est2 = Estudiante.objects.create(nombre_completo='Alumno 2', apoderado=self.apoderado, curso='1° Básico')
        self.client = APIClient()

    def _auth(self, user):
        login = self.client.post('/api/token/', {'username': user.username, 'password': 'test123'})
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {login.data["access"]}')

    def test_bulk_create_asistencia(self):
        self._auth(self.docente)
        data = [
            {'estudiante': str(self.est1.pk), 'presente': True},
            {'estudiante': str(self.est2.pk), 'presente': False},
        ]
        response = self.client.post('/api/asistencias/bulk_create/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(len(response.data), 2)

    def test_bulk_create_formato_invalido(self):
        self._auth(self.docente)
        # Enviar objeto en vez de lista
        response = self.client.post('/api/asistencias/bulk_create/', {'estudiante': str(self.est1.pk)}, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
