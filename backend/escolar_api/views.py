from django.db import models # pyrefly: ignore [missing-import]
from django.db.models import Q # pyrefly: ignore [missing-import]
from rest_framework import viewsets, permissions, status # pyrefly: ignore [missing-import]
from rest_framework.decorators import action # pyrefly: ignore [missing-import]
from rest_framework.response import Response # pyrefly: ignore [missing-import]
from rest_framework_simplejwt.views import TokenObtainPairView # pyrefly: ignore [missing-import]
from .models import Usuario, Estudiante, Asistencia, Evaluacion, Anotacion, Reunion, Calificacion
from .serializers import (
    MyTokenObtainPairSerializer, 
    UsuarioSerializer,
    EstudianteSerializer, 
    AsistenciaSerializer, 
    EvaluacionSerializer, 
    AnotacionSerializer,
    ReunionSerializer,
    CalificacionSerializer
)


# ==========================================
# Permisos personalizados por rol
# ==========================================

class IsDocente(permissions.BasePermission):
    """Solo permite acceso a usuarios con rol 'docente'."""
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.rol == 'docente'


class IsApoderado(permissions.BasePermission):
    """Solo permite acceso a usuarios con rol 'apoderado'."""
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.rol == 'apoderado'


class IsAdmin(permissions.BasePermission):
    """Solo permite acceso a usuarios con rol 'admin'."""
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.rol == 'admin'


class IsAlumno(permissions.BasePermission):
    """Solo permite acceso a usuarios con rol 'alumno'."""
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.rol == 'alumno'


class IsDocenteOrAdmin(permissions.BasePermission):
    """Permite acceso a docentes y administradores."""
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.rol in ('docente', 'admin')


class IsAdminOrReadOnly(permissions.BasePermission):
    """Admins tienen acceso completo; otros solo lectura."""
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return request.user.is_authenticated
        return request.user.is_authenticated and request.user.rol == 'admin'


# ==========================================
# Vistas de autenticación
# ==========================================

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


# ==========================================
# ViewSets del API
# ==========================================

class UsuarioViewSet(viewsets.ReadOnlyModelViewSet):
    """Vista para listar usuarios del sistema (solo admin)."""
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.IsAuthenticated, IsAdmin]


class EstudianteViewSet(viewsets.ModelViewSet):
    """
    CRUD completo de estudiantes.
    - Admin: acceso completo (crear, editar, eliminar)
    - Docente: solo lectura (ver todos)
    - Apoderado: solo lectura (ver los propios)
    """
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Estudiante.objects.all()
        if user.rol == 'apoderado':
            queryset = queryset.filter(apoderado=user)
        elif user.rol == 'alumno':
            queryset = queryset.filter(usuario=user)
        
        # Filtro por curso opcional (Nivel y Sección)
        nivel = self.request.query_params.get('nivel', None)
        seccion = self.request.query_params.get('seccion', None)
        if nivel:
            queryset = queryset.filter(nivel=nivel)
        if seccion:
            queryset = queryset.filter(seccion=seccion)
            
        return queryset

    def get_permissions(self):
        if self.action in ('create', 'update', 'partial_update', 'destroy'):
            return [permissions.IsAuthenticated(), IsAdmin()]
        return [permissions.IsAuthenticated()]


class AsistenciaViewSet(viewsets.ModelViewSet):
    """
    Gestión de asistencia.
    - Docente: crear y ver todas
    - Apoderado: solo ver las de sus hijos
    """
    queryset = Asistencia.objects.all()
    serializer_class = AsistenciaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.rol == 'apoderado':
            return Asistencia.objects.filter(estudiante__apoderado=user)
        elif user.rol == 'alumno':
            return Asistencia.objects.filter(estudiante__usuario=user)
        return Asistencia.objects.all()

    def get_permissions(self):
        if self.action in ('create', 'update', 'partial_update', 'destroy', 'bulk_create'):
            return [permissions.IsAuthenticated(), IsDocenteOrAdmin()]
        return [permissions.IsAuthenticated()]

    def perform_create(self, serializer):
        serializer.save(docente=self.request.user)

    @action(detail=False, methods=['post'])
    def bulk_create(self, request):
        data = request.data
        if not isinstance(data, list):
            return Response({"error": "Se esperaba una lista de asistencias"}, status=status.HTTP_400_BAD_REQUEST)
        
        created_records = []
        for item in data:
            serializer = self.get_serializer(data=item)
            if serializer.is_valid():
                serializer.save(docente=request.user)
                created_records.append(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(created_records, status=status.HTTP_201_CREATED)


class EvaluacionViewSet(viewsets.ModelViewSet):
    """
    CRUD de evaluaciones.
    - Docente/Admin: CRUD completo
    - Apoderado: solo lectura (filtrado por cursos de sus hijos)
    """
    queryset = Evaluacion.objects.all()
    serializer_class = EvaluacionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.rol == 'apoderado':
            hijos = Estudiante.objects.filter(apoderado=user)
            filtros = Q()
            for hijo in hijos:
                filtros |= Q(nivel=hijo.nivel, seccion=hijo.seccion)
            
            if not hijos.exists():
                return Evaluacion.objects.none()
                
            return Evaluacion.objects.filter(filtros).order_by('fecha_evaluacion')
        elif user.rol == 'alumno':
            try:
                estudiante = Estudiante.objects.get(usuario=user)
                return Evaluacion.objects.filter(nivel=estudiante.nivel, seccion=estudiante.seccion).order_by('fecha_evaluacion')
            except Estudiante.DoesNotExist:
                return Evaluacion.objects.none()
        elif user.rol == 'docente':
            # SEGURIDAD: Docente solo ve las evaluaciones que él creó
            return Evaluacion.objects.filter(docente=user).order_by('fecha_evaluacion')
        return Evaluacion.objects.all().order_by('fecha_evaluacion')

    def get_permissions(self):
        if self.action in ('create', 'update', 'partial_update', 'destroy'):
            return [permissions.IsAuthenticated(), IsDocenteOrAdmin()]
        return [permissions.IsAuthenticated()]

    def perform_create(self, serializer):
        serializer.save(docente=self.request.user)


class AnotacionViewSet(viewsets.ModelViewSet):
    """
    CRUD de anotaciones conductuales.
    - Docente: CRUD completo (ve solo las que emitió)
    - Apoderado: solo lectura (ve las de sus hijos)
    - Admin: ve todas
    """
    queryset = Anotacion.objects.all()
    serializer_class = AnotacionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.rol == 'apoderado':
            return Anotacion.objects.filter(estudiante__apoderado=user).order_by('-fecha')
        elif user.rol == 'alumno':
            return Anotacion.objects.filter(estudiante__usuario=user).order_by('-fecha')
        elif user.rol == 'docente':
            return Anotacion.objects.filter(docente=user).order_by('-fecha')
        return Anotacion.objects.all().order_by('-fecha')

    def get_permissions(self):
        if self.action in ('create', 'update', 'partial_update', 'destroy'):
            return [permissions.IsAuthenticated(), IsDocenteOrAdmin()]
        return [permissions.IsAuthenticated()]

    def perform_create(self, serializer):
        serializer.save(docente=self.request.user)


class ReunionViewSet(viewsets.ModelViewSet):
    """
    CRUD de reuniones y citaciones.
    - Docente: CRUD completo (ve solo las que organizó)
    - Apoderado: solo lectura (ve las de los cursos de sus hijos)
    - Admin: ve todas
    """
    queryset = Reunion.objects.all()
    serializer_class = ReunionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.rol == 'apoderado':
            hijos = Estudiante.objects.filter(apoderado=user)
            filtros = Q()
            for hijo in hijos:
                filtros |= Q(nivel=hijo.nivel, seccion=hijo.seccion)

            if not hijos.exists():
                return Reunion.objects.none()

            return Reunion.objects.filter(filtros).order_by('fecha_hora')
        elif user.rol == 'alumno':
            try:
                estudiante = Estudiante.objects.get(usuario=user)
                return Reunion.objects.filter(nivel=estudiante.nivel, seccion=estudiante.seccion).order_by('fecha_hora')
            except Estudiante.DoesNotExist:
                return Reunion.objects.none()
        elif user.rol == 'docente':
            # Docente ve las que él creó
            return Reunion.objects.filter(docente=user).order_by('fecha_hora')
        return Reunion.objects.all().order_by('fecha_hora')

    def get_permissions(self):
        if self.action in ('create', 'update', 'partial_update', 'destroy'):
            return [permissions.IsAuthenticated(), IsDocenteOrAdmin()]
        return [permissions.IsAuthenticated()]

    def perform_create(self, serializer):
        serializer.save(docente=self.request.user)


class CalificacionViewSet(viewsets.ModelViewSet):
    """
    CRUD de Calificaciones.
    - Docente: puede crear y ver notas de SUS evaluaciones.
    - Apoderado: puede ver las notas de sus hijos.
    - Admin: ve todas.
    """
    queryset = Calificacion.objects.all()
    serializer_class = CalificacionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.rol == 'apoderado':
            return Calificacion.objects.filter(estudiante__apoderado=user).order_by('-fecha_registro')
        elif user.rol == 'alumno':
            return Calificacion.objects.filter(estudiante__usuario=user).order_by('-fecha_registro')
        elif user.rol == 'docente':
            # Solo ve calificaciones de las evaluaciones de las que es dueño
            return Calificacion.objects.filter(evaluacion__docente=user).order_by('-fecha_registro')
        return Calificacion.objects.all().order_by('-fecha_registro')

    def get_permissions(self):
        if self.action in ('create', 'update', 'partial_update', 'destroy', 'bulk_create'):
            return [permissions.IsAuthenticated(), IsDocenteOrAdmin()]
        return [permissions.IsAuthenticated()]

    def perform_create(self, serializer):
        # Validación de seguridad extra: 
        # Asegurar que la evaluación a la que se le pone nota pertenezca al docente actual
        evaluacion = serializer.validated_data.get('evaluacion')
        if self.request.user.rol == 'docente' and evaluacion.docente != self.request.user:
            from rest_framework.exceptions import PermissionDenied # pyrefly: ignore [missing-import]
            raise PermissionDenied("No tienes permiso para calificar una evaluación que no creaste.")
        serializer.save()

    @action(detail=False, methods=['post'])
    def bulk_create(self, request):
        data = request.data
        if not isinstance(data, list):
            return Response({"error": "Se esperaba una lista de calificaciones"}, status=status.HTTP_400_BAD_REQUEST)
        
        created_records = []
        for item in data:
            # Validar propiedad de la evaluación si es docente
            evaluacion_id = item.get('evaluacion')
            if request.user.rol == 'docente':
                try:
                    eval_obj = Evaluacion.objects.get(id=evaluacion_id)
                    if eval_obj.docente != request.user:
                        return Response({"error": f"No tienes permiso para calificar la evaluación {evaluacion_id}"}, status=status.HTTP_403_FORBIDDEN)
                except Evaluacion.DoesNotExist:
                    pass # Se manejará en el serializer
            
            # Buscar si ya existe una nota para este estudiante y evaluación para actualizarla
            try:
                existente = Calificacion.objects.get(estudiante_id=item.get('estudiante'), evaluacion_id=evaluacion_id)
                serializer = self.get_serializer(existente, data=item, partial=True)
            except Calificacion.DoesNotExist:
                serializer = self.get_serializer(data=item)
                
            if serializer.is_valid():
                serializer.save()
                created_records.append(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response(created_records, status=status.HTTP_201_CREATED)
