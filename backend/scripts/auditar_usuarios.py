import os
import django

# Configurar entorno de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'escolar_api.settings')
django.setup()

from escolar_api.models import Usuario

def auditar_usuarios():
    print("--- Auditoria de Usuarios ---")
    usuarios = Usuario.objects.filter(rol='alumno')
    
    if not usuarios.exists():
        print("Error: No se encontraron usuarios con el rol 'alumno'.")
        return

    for u in usuarios:
        print(f"Usuario: {u.username} | Email: {u.email} | Rol: {u.rol} | Activo: {u.is_active}")
        # Resetear contraseña de Juan Pérez para prueba absoluta
        if u.username == '614aef94k':
            u.set_password("Prueba123!")
            u.save()
            print(">>> CONTRASEÑA DE JUAN PEREZ RESETEADA A: Prueba123!")

if __name__ == "__main__":
    auditar_usuarios()
