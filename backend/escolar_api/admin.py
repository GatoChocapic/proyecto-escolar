from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Usuario, Estudiante, Asistencia, Evaluacion, Anotacion, Reunion

@admin.register(Usuario)
class CustomUserAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('rol',)}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('rol',)}),
    )
    list_display = ['username', 'email', 'rol', 'is_staff']

@admin.register(Estudiante)
class EstudianteAdmin(admin.ModelAdmin):
    list_display = ['nombre_completo', 'apoderado', 'nivel', 'seccion']
    list_filter = ['nivel', 'seccion']
    search_fields = ['nombre_completo']

@admin.register(Asistencia)
class AsistenciaAdmin(admin.ModelAdmin):
    list_display = ['estudiante', 'fecha', 'presente', 'docente']
    list_filter = ['fecha', 'presente']

@admin.register(Evaluacion)
class EvaluacionAdmin(admin.ModelAdmin):
    list_display = ['titulo', 'asignatura', 'fecha_evaluacion', 'nivel', 'seccion', 'docente']
    list_filter = ['asignatura', 'nivel', 'seccion']

@admin.register(Anotacion)
class AnotacionAdmin(admin.ModelAdmin):
    list_display = ['estudiante', 'tipo', 'fecha', 'docente']
    list_filter = ['tipo', 'fecha']

@admin.register(Reunion)
class ReunionAdmin(admin.ModelAdmin):
    list_display = ['titulo', 'fecha_hora', 'docente']
    list_filter = ['fecha_hora']
