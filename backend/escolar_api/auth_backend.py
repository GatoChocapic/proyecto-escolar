from django.contrib.auth.backends import ModelBackend
from django.db.models import Q
from .models import Usuario

class DualAuthenticationBackend(ModelBackend):
    """
    Backend de autenticación que permite loguearse usando el username (RUT) 
    o el email indistintamente.
    """
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            # Busca al usuario que coincida con el username O con el email
            user = Usuario.objects.get(Q(username__iexact=username) | Q(email__iexact=username))
            
            # Verifica la contraseña
            if user.check_password(password) and self.user_can_authenticate(user):
                return user
        except Usuario.DoesNotExist:
            return None
        except Exception:
            return None
        return None
