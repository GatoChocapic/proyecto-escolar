import os
import django

# Configurar entorno de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'escolar_api.settings')
django.setup()

from escolar_api.models import Estudiante, Usuario

def sanear_datos():
    print("--- Iniciando saneamiento de base de datos ---")
    estudiantes = Estudiante.objects.all()
    
    for est in estudiantes:
        print(f"Procesando: {est.nombre_completo}")
        
        # 1. Desglosar nombre si los campos nuevos están vacíos
        if not est.primer_nombre and est.nombre_completo:
            partes = est.nombre_completo.split(' ')
            if len(partes) >= 1: est.primer_nombre = partes[0]
            if len(partes) >= 2: est.apellido_paterno = partes[-2] if len(partes) > 2 else partes[1]
            if len(partes) >= 3: est.apellido_materno = partes[-1]
            if len(partes) > 3: est.segundo_nombre = " ".join(partes[1:-2])
            print(f"   - Nombres desglosados: {est.primer_nombre} / {est.apellido_paterno}")

        # 2. Asegurar RUT (si no tiene, generamos uno temporal basado en su ID)
        if not est.rut or est.rut == "":
            id_str = str(est.id)[-8:] # Tomamos los últimos 8 caracteres del ObjectId
            est.rut = f"{id_str}-K"
            print(f"   - RUT asignado: {est.rut}")

        # 3. Asegurar correo institucional
        if not est.correo_institucional:
            email_base = est.primer_nombre.lower() + "." + est.apellido_paterno.lower()
            est.correo_institucional = f"{email_base}@colegio.cl"
            print(f"   - Correo creado: {est.correo_institucional}")

        # 4. Asegurar campos de estado
        est.activo = True
        if not est.nacionalidad: est.nacionalidad = "Chilena"
        
        try:
            est.save()
            print(f"   - Estudiante '{est.nombre_completo}' actualizado.")
        except Exception as e:
            print(f"   - Error al guardar {est.nombre_completo}: {e}")

    print("--- Saneamiento completado ---")

if __name__ == "__main__":
    sanear_datos()
