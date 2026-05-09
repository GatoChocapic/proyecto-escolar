import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'escolar_api.settings')
django.setup()

from escolar_api.models import Estudiante, Usuario

def populate():
    # Obtener un apoderado para asignar estudiantes
    apoderado = Usuario.objects.filter(rol='apoderado').first()
    if not apoderado:
        print("No hay apoderados en la base de datos. Crea uno primero.")
        return

    estudiantes_data = [
        ("Juan Pérez", "1B", "A"),
        ("María González", "1B", "A"),
        ("Diego Soto", "1B", "B"),
        ("Ana Morales", "1B", "B"),
        ("Carlos Ruiz", "2B", "A"),
        ("Sofía Tapia", "2B", "A"),
    ]

    for nombre, nivel, seccion in estudiantes_data:
        Estudiante.objects.get_or_create(
            nombre_completo=nombre,
            nivel=nivel,
            seccion=seccion,
            apoderado=apoderado
        )
    print("Estudiantes creados exitosamente con la nueva estructura.")

if __name__ == '__main__':
    populate()
