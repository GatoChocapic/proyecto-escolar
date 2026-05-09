from django.apps import AppConfig

class EscolarApiConfig(AppConfig):
    default_auto_field = 'django_mongodb_backend.fields.ObjectIdAutoField'
    name = 'escolar_api'
    verbose_name = 'Sistema Escolar'
