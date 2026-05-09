"""
Comando de Django para poblar la base de datos con datos de prueba.
Uso: python manage.py seed_data
"""
from django.core.management.base import BaseCommand
from escolar_api.models import Usuario, Estudiante


class Command(BaseCommand):
    help = 'Crea usuarios y estudiantes de prueba para desarrollo'

    def handle(self, *args, **options):
        self.stdout.write('Creando datos de prueba...\n')

        # ==========================================
        # Usuarios
        # ==========================================

        # Admin
        admin, created = Usuario.objects.get_or_create(
            username='admin',
            defaults={
                'rol': 'admin',
                'is_staff': True,
                'is_superuser': True,
                'first_name': 'Admin',
                'last_name': 'Sistema',
                'email': 'admin@escolar.cl',
            }
        )
        if created:
            admin.set_password('admin123')
            admin.save()
            self.stdout.write(self.style.SUCCESS('  [OK] Admin creado (admin / admin123)'))
        else:
            self.stdout.write('  -> Admin ya existe, omitido')

        # Docentes
        docentes_data = [
            {'username': 'docente1', 'first_name': 'María', 'last_name': 'González', 'email': 'maria@escolar.cl'},
            {'username': 'docente2', 'first_name': 'Carlos', 'last_name': 'Muñoz', 'email': 'carlos@escolar.cl'},
        ]
        docentes = []
        for d in docentes_data:
            user, created = Usuario.objects.get_or_create(
                username=d['username'],
                defaults={**d, 'rol': 'docente'}
            )
            if created:
                user.set_password('docente123')
                user.save()
                self.stdout.write(self.style.SUCCESS(f"  [OK] Docente creado ({d['username']} / docente123)"))
            else:
                self.stdout.write(f"  -> {d['username']} ya existe, omitido")
            docentes.append(user)

        # Apoderados
        apoderados_data = [
            {'username': 'apoderado1', 'first_name': 'Juan', 'last_name': 'Pérez', 'email': 'juan@mail.cl'},
            {'username': 'apoderado2', 'first_name': 'Ana', 'last_name': 'López', 'email': 'ana@mail.cl'},
            {'username': 'apoderado3', 'first_name': 'Pedro', 'last_name': 'Soto', 'email': 'pedro@mail.cl'},
        ]
        apoderados = []
        for a in apoderados_data:
            user, created = Usuario.objects.get_or_create(
                username=a['username'],
                defaults={**a, 'rol': 'apoderado'}
            )
            if created:
                user.set_password('apoderado123')
                user.save()
                self.stdout.write(self.style.SUCCESS(f"  [OK] Apoderado creado ({a['username']} / apoderado123)"))
            else:
                self.stdout.write(f"  -> {a['username']} ya existe, omitido")

            apoderados.append(user)

        # ==========================================
        # Estudiantes
        # ==========================================
        estudiantes_data = [
            {'nombre_completo': 'Sofía Pérez', 'apoderado': apoderados[0], 'curso': '1° Básico'},
            {'nombre_completo': 'Matías Pérez', 'apoderado': apoderados[0], 'curso': '3° Básico'},
            {'nombre_completo': 'Valentina López', 'apoderado': apoderados[1], 'curso': '1° Básico'},
            {'nombre_completo': 'Tomás López', 'apoderado': apoderados[1], 'curso': '2° Básico'},
            {'nombre_completo': 'Camila Soto', 'apoderado': apoderados[2], 'curso': '2° Básico'},
            {'nombre_completo': 'Diego Soto', 'apoderado': apoderados[2], 'curso': '4° Básico'},
        ]
        for e in estudiantes_data:
            est, created = Estudiante.objects.get_or_create(
                nombre_completo=e['nombre_completo'],
                defaults=e
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"  [OK] Estudiante creado: {e['nombre_completo']} ({e['curso']})"))
            else:
                self.stdout.write(f"  -> {e['nombre_completo']} ya existe, omitido")

        self.stdout.write(self.style.SUCCESS('\n¡Datos de prueba creados exitosamente!'))
        self.stdout.write('\nCredenciales:')
        self.stdout.write('  Admin:     admin / admin123')
        self.stdout.write('  Docentes:  docente1, docente2 / docente123')
        self.stdout.write('  Apoderados: apoderado1, apoderado2, apoderado3 / apoderado123')
