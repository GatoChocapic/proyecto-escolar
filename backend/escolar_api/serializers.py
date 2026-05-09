from rest_framework import serializers # pyrefly: ignore [missing-import]
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer # pyrefly: ignore [missing-import]
from .models import Estudiante, Asistencia, Usuario, Evaluacion, Anotacion, Reunion, Calificacion

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Añade el campo rol al payload del token
        token['rol'] = user.rol
        token['username'] = user.username
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        # Añade el campo rol y username a la respuesta del login
        data['rol'] = self.user.rol
        data['username'] = self.user.username
        return data


class ObjectIdField(serializers.Field):
    """Campo personalizado para serializar ObjectId de MongoDB como string."""
    def to_representation(self, value):
        return str(value)

    def to_internal_value(self, data):
        from bson import ObjectId # pyrefly: ignore [missing-import]
        if isinstance(data, ObjectId):
            return data
        try:
            return ObjectId(str(data))
        except Exception:
            raise serializers.ValidationError("Invalid ObjectId")


class UsuarioSerializer(serializers.ModelSerializer):
    """Serializer para listar usuarios del sistema (panel admin)."""
    id = ObjectIdField(read_only=True)
    rol_display = serializers.ReadOnlyField(source='get_rol_display')

    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'rol', 'rol_display', 'is_active', 'date_joined']
        read_only_fields = ['id', 'date_joined']


class EstudianteSerializer(serializers.ModelSerializer):
    id = ObjectIdField(read_only=True)
    usuario = serializers.PrimaryKeyRelatedField(queryset=Usuario.objects.all(), pk_field=ObjectIdField(), required=False, allow_null=True)
    apoderado = serializers.PrimaryKeyRelatedField(queryset=Usuario.objects.all(), pk_field=ObjectIdField())
    apoderado_nombre = serializers.ReadOnlyField(source='apoderado.username')
    nivel_display = serializers.ReadOnlyField(source='get_nivel_display')
    curso = serializers.ReadOnlyField(source='curso_display')

    class Meta:
        model = Estudiante
        fields = [
            'id', 'usuario', 'primer_nombre', 'segundo_nombre', 'apellido_paterno', 'apellido_materno',
            'nombre_completo', 'rut', 'fecha_nacimiento', 'genero', 'nacionalidad',
            'correo_institucional', 'telefono', 'direccion', 'foto_perfil',
            'nivel', 'nivel_display', 'seccion', 'curso', 'fecha_ingreso', 'activo',
            'apoderado', 'apoderado_nombre', 'contacto_emergencia', 'observaciones_generales'
        ]

class AsistenciaSerializer(serializers.ModelSerializer):
    id = ObjectIdField(read_only=True)
    estudiante = serializers.PrimaryKeyRelatedField(queryset=Estudiante.objects.all(), pk_field=ObjectIdField())
    docente = serializers.PrimaryKeyRelatedField(read_only=True, pk_field=ObjectIdField())
    estudiante_nombre = serializers.ReadOnlyField(source='estudiante.nombre_completo')
    docente_nombre = serializers.ReadOnlyField(source='docente.username')

    class Meta:
        model = Asistencia
        fields = ['id', 'estudiante', 'estudiante_nombre', 'fecha', 'presente', 'docente', 'docente_nombre']

class EvaluacionSerializer(serializers.ModelSerializer):
    id = ObjectIdField(read_only=True)
    docente = serializers.PrimaryKeyRelatedField(read_only=True, pk_field=ObjectIdField())
    docente_nombre = serializers.ReadOnlyField(source='docente.username')

    nivel_display = serializers.ReadOnlyField(source='get_nivel_display')
    curso = serializers.SerializerMethodField()

    class Meta:
        model = Evaluacion
        fields = ['id', 'titulo', 'descripcion', 'fecha_evaluacion', 'asignatura', 'docente', 'docente_nombre', 'nivel', 'nivel_display', 'seccion', 'curso']

    def get_curso(self, obj):
        return f"{obj.get_nivel_display()} {obj.seccion}"

class AnotacionSerializer(serializers.ModelSerializer):
    id = ObjectIdField(read_only=True)
    estudiante = serializers.PrimaryKeyRelatedField(queryset=Estudiante.objects.all(), pk_field=ObjectIdField())
    docente = serializers.PrimaryKeyRelatedField(read_only=True, pk_field=ObjectIdField())
    estudiante_nombre = serializers.ReadOnlyField(source='estudiante.nombre_completo')
    docente_nombre = serializers.ReadOnlyField(source='docente.username')

    class Meta:
        model = Anotacion
        fields = ['id', 'estudiante', 'estudiante_nombre', 'tipo', 'descripcion', 'fecha', 'docente', 'docente_nombre']

class ReunionSerializer(serializers.ModelSerializer):
    id = ObjectIdField(read_only=True)
    docente = serializers.PrimaryKeyRelatedField(read_only=True, pk_field=ObjectIdField())
    docente_nombre = serializers.ReadOnlyField(source='docente.username')

    nivel_display = serializers.ReadOnlyField(source='get_nivel_display')
    curso = serializers.SerializerMethodField()

    class Meta:
        model = Reunion
        fields = ['id', 'titulo', 'descripcion', 'fecha_hora', 'link_virtual', 'docente', 'docente_nombre', 'nivel', 'nivel_display', 'seccion', 'curso']

    def get_curso(self, obj):
        if obj.nivel:
            return f"{obj.get_nivel_display()} {obj.seccion}"
        return None


class CalificacionSerializer(serializers.ModelSerializer):
    id = ObjectIdField(read_only=True)
    estudiante = serializers.PrimaryKeyRelatedField(queryset=Estudiante.objects.all(), pk_field=ObjectIdField())
    evaluacion = serializers.PrimaryKeyRelatedField(queryset=Evaluacion.objects.all(), pk_field=ObjectIdField())
    estudiante_nombre = serializers.ReadOnlyField(source='estudiante.nombre_completo')
    evaluacion_titulo = serializers.ReadOnlyField(source='evaluacion.titulo')

    class Meta:
        model = Calificacion
        fields = ['id', 'estudiante', 'estudiante_nombre', 'evaluacion', 'evaluacion_titulo', 'valor', 'observacion', 'fecha_registro']
