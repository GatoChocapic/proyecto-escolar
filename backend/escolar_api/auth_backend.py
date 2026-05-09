from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from .models import Usuario

class DualAuthenticationBackend(ModelBackend):
    """
    Backend de autenticación que permite loguearse usando el username
    o el email indistintamente. Prioriza siempre el username exacto.
    """
    def authenticate(self, request, username=None, password=None, **kwargs):
        user = None
        
        # Paso 1: Intentar login por username exacto (incluye RUT de alumnos)
        try:
            user = Usuario.objects.get(username__iexact=username)
        except Usuario.DoesNotExist:
            pass
        except Exception:
            pass
        
        # Paso 2: Si no encontró por username, buscar por email
        if user is None:
            try:
                user = Usuario.objects.get(email__iexact=username)
            except Usuario.DoesNotExist:
                return None
            except Exception:
                # Si hay múltiples con ese email, no autenticar
                return None
        
        # Verificar contraseña y que el usuario pueda autenticarse
        if user and user.check_password(password) and self.user_can_authenticate(user):
            return user
        
        return None
