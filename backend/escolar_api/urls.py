from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (
    MyTokenObtainPairView, 
    UsuarioViewSet,
    EstudianteViewSet, 
    AsistenciaViewSet, 
    EvaluacionViewSet, 
    AnotacionViewSet, 
    EvaluacionViewSet, 
    AnotacionViewSet, 
    ReunionViewSet,
    CalificacionViewSet
)

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet, basename='usuario')
router.register(r'estudiantes', EstudianteViewSet, basename='estudiante')
router.register(r'asistencias', AsistenciaViewSet, basename='asistencia')
router.register(r'evaluaciones', EvaluacionViewSet, basename='evaluacion')
router.register(r'anotaciones', AnotacionViewSet, basename='anotacion')
router.register(r'reuniones', ReunionViewSet, basename='reunion')
router.register(r'calificaciones', CalificacionViewSet, basename='calificacion')

urlpatterns = [
    path('admin/', admin.site.urls),
    # JWT Auth endpoints
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # API endpoints
    path('api/', include(router.urls)),
]
