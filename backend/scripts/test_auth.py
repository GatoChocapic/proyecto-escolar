import os
import django
from django.contrib.auth import authenticate

# Configurar entorno de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'escolar_api.settings')
django.setup()

def probar_autenticacion():
    print("--- Probando Motor de Autenticacion ---")
    user = authenticate(username='614aef94k', password='Prueba123!')
    
    if user:
        print(f"SUCCESO: Usuario {user.username} autenticado correctamente.")
    else:
        print("FALLO: El motor de autenticacion no reconoce las credenciales.")
        # Ver si el usuario existe pero la clave falla
        from escolar_api.models import Usuario
        try:
            u = Usuario.objects.get(username='614aef94k')
            print(f"Info: El usuario {u.username} existe. El problema es el Backend de Autenticacion o la Password.")
        except Usuario.DoesNotExist:
            print("Error Critico: El usuario no existe en la DB.")

if __name__ == "__main__":
    probar_autenticacion()
