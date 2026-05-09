import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'escolar_api.settings')
django.setup()

from escolar_api.models import Usuario, Estudiante

def restaurar_y_auditar():
    print("=== RESTAURACION Y AUDITORIA DE BASE DE DATOS ===")
    
    # 1. Restaurar contrasenas conocidas
    cuentas_criticas = {
        'docente1': 'docente123',
        'apoderado1': 'apoderado123',
    }
    
    print("\n--- Restaurando contrasenas de cuentas criticas ---")
    for username, password in cuentas_criticas.items():
        try:
            user = Usuario.objects.get(username=username)
            user.set_password(password)
            user.save()
            print(f"OK: {username} ({user.rol}) - contrasena restaurada")
        except Usuario.DoesNotExist:
            print(f"AVISO: El usuario '{username}' no existe en la BD")
    
    # 2. Listar TODOS los usuarios
    print("\n--- Todos los usuarios del sistema ---")
    print(f"{'Usuario':<20} {'Rol':<12} {'Email':<35} {'Activo'}")
    print("-" * 80)
    for u in Usuario.objects.all().order_by('rol', 'username'):
        print(f"{u.username:<20} {u.rol:<12} {u.email:<35} {u.is_active}")
    
    # 3. Verificar relaciones Estudiante -> Usuario
    print("\n--- Relacion Estudiantes <-> Usuarios ---")
    estudiantes = Estudiante.objects.all()
    print(f"Total estudiantes: {estudiantes.count()}")
    print(f"Con usuario vinculado: {estudiantes.filter(usuario__isnull=False).count()}")
    print(f"Sin usuario vinculado: {estudiantes.filter(usuario__isnull=True).count()}")
    
    # 4. Test de autenticacion
    print("\n--- Test de autenticacion ---")
    from django.contrib.auth import authenticate
    tests = [
        ('docente1', 'docente123'),
        ('apoderado1', 'apoderado123'),
    ]
    for uname, pwd in tests:
        result = authenticate(request=None, username=uname, password=pwd)
        status = "PASS" if result else "FAIL"
        print(f"{status}: {uname}")
    
    print("\n=== FIN DE AUDITORIA ===")

if __name__ == "__main__":
    restaurar_y_auditar()
