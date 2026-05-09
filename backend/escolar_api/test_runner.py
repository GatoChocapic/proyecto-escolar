"""
Test runner personalizado para MongoDB.
Mantiene desconectada la señal post_migrate de auth.create_permissions
durante toda la ejecución de tests para evitar el bug de ContentType
con django-mongodb-backend.
"""
from django.test.runner import DiscoverRunner
from django.contrib.auth.management import create_permissions
from django.db.models.signals import post_migrate


class MongoDBTestRunner(DiscoverRunner):
    """
    Runner que desactiva la creación automática de permisos durante
    toda la sesión de tests para evitar el bug de ContentType
    unhashable con django-mongodb-backend.
    """

    def setup_test_environment(self, **kwargs):
        # Desconectar la señal ANTES de cualquier operación de BD
        post_migrate.disconnect(
            create_permissions,
            dispatch_uid='django.contrib.auth.management.create_permissions'
        )
        super().setup_test_environment(**kwargs)

    def teardown_test_environment(self, **kwargs):
        super().teardown_test_environment(**kwargs)
        # Reconectar al finalizar todos los tests
        post_migrate.connect(
            create_permissions,
            dispatch_uid='django.contrib.auth.management.create_permissions'
        )
