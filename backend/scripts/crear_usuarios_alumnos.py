import os
import django

# Configurar entorno de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'escolar_api.settings')
django.setup()

from escolar_api.models import Estudiante, Usuario

def crear_cuentas_alumnos():
    print("--- Generando Cuentas de Acceso para Alumnos ---")
    estudiantes = Estudiante.objects.filter(usuario__isnull=True)
    
    if not estudiantes.exists():
        print("No hay estudiantes sin cuenta de usuario.")
        return

    for est in estudiantes:
        # Limpiar RUT para el username (quitar puntos y guiones)
        username = est.rut.replace(".", "").replace("-", "").lower()
        
        # Verificar si el usuario ya existe por si acaso
        user, created = Usuario.objects.get_or_create(
            username=username,
            defaults={
                'email': est.correo_institucional,
                'first_name': est.primer_nombre,
                'last_name': est.apellido_paterno,
                'rol': 'alumno'
            }
        )
        
        if created:
            # Establecer contraseña inicial segura
            user.set_password("Estudiante2026")
            user.save()
            
            # Vincular el usuario con la ficha del estudiante
            est.usuario = user
            est.save()
            print(f"Cuenta creada: {username} para {est.nombre_completo}")
        else:
            # Si el usuario ya existía pero no estaba vinculado
            est.usuario = user
            est.save()
            print(f"Cuenta vinculada: {username} para {est.nombre_completo}")

    print("--- Proceso de creación de cuentas finalizado ---")

if __name__ == "__main__":
    crear_cuentas_alumnos()
