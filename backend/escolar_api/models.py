from django.db import models # pyrefly: ignore [missing-import]
from django.contrib.auth.models import AbstractUser # pyrefly: ignore [missing-import]

from django_mongodb_backend.fields import ObjectIdAutoField # pyrefly: ignore [missing-import]

NIVELES_CHOICES = [
    ('1B', '1° Básico'), ('2B', '2° Básico'), ('3B', '3° Básico'), ('4B', '4° Básico'),
    ('5B', '5° Básico'), ('6B', '6° Básico'), ('7B', '7° Básico'), ('8B', '8° Básico'),
    ('1M', '1° Medio'), ('2M', '2° Medio'), ('3M', '3° Medio'), ('4M', '4° Medio'),
]

SECCIONES_CHOICES = [
    ('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D'),
]

class Usuario(AbstractUser):
    id = ObjectIdAutoField(primary_key=True)
    """
    Modelo de Usuario principal que hereda de AbstractUser.
    Sirve centralizadamente para definir autenticaciones y roles en el sistema escolar.
    """
    # Opciones de los roles
    ROLES = [
        ('docente', 'Docente'),
        ('apoderado', 'Apoderado'),
        ('alumno', 'Alumno'),
        ('admin', 'Administrador'),
    ]
    # Campo para establecer si es docente, apoderado, etc.
    rol = models.CharField(max_length=20, choices=ROLES, default='apoderado', verbose_name="Rol")

    def __str__(self):
        return f"{self.username} - {self.get_rol_display()}"


class Estudiante(models.Model):
    """
    Modelo representativo del estudiante que asiste a la institución escolar.
    """
    # Identidad y Acceso
    usuario = models.OneToOneField(Usuario, on_delete=models.SET_NULL, null=True, blank=True, related_name='perfil_estudiante', verbose_name="Usuario de Acceso")
    
    # Nombres Desglosados (Requerimiento Profesional)
    primer_nombre = models.CharField(max_length=50, verbose_name="Primer Nombre", default="")
    segundo_nombre = models.CharField(max_length=50, verbose_name="Segundo Nombre", blank=True, null=True)
    apellido_paterno = models.CharField(max_length=50, verbose_name="Apellido Paterno", default="")
    apellido_materno = models.CharField(max_length=50, verbose_name="Apellido Materno", default="")
    
    # El nombre_completo se mantiene por compatibilidad, pero puede ser una propiedad
    nombre_completo = models.CharField(max_length=200, verbose_name="Nombre Completo (Legacy)", blank=True)
    
    rut = models.CharField(max_length=12, unique=True, verbose_name="RUT", default="")
    fecha_nacimiento = models.DateField(verbose_name="Fecha de Nacimiento", null=True, blank=True)
    genero = models.CharField(max_length=20, choices=[('M', 'Masculino'), ('F', 'Femenino'), ('O', 'Otro')], blank=True, null=True)
    nacionalidad = models.CharField(max_length=100, default="Chilena")
    
    # Contacto e Institucional
    correo_institucional = models.EmailField(max_length=254, unique=True, verbose_name="Correo Institucional", blank=True, null=True)
    telefono = models.CharField(max_length=20, blank=True, null=True)
    direccion = models.TextField(blank=True, null=True)
    foto_perfil = models.ImageField(upload_to='estudiantes/', blank=True, null=True)
    
    # Estado y Academia
    nivel = models.CharField(max_length=2, choices=NIVELES_CHOICES, default='1B', verbose_name="Nivel")
    seccion = models.CharField(max_length=1, choices=SECCIONES_CHOICES, default='A', verbose_name="Sección")
    fecha_ingreso = models.DateField(auto_now_add=True, verbose_name="Fecha de Ingreso")
    activo = models.BooleanField(default=True, verbose_name="Estado Activo")
    
    # Emergencia y Relaciones
    apoderado = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='estudiantes', verbose_name="Apoderado Principal")
    contacto_emergencia = models.CharField(max_length=200, blank=True, null=True, verbose_name="Contacto Emergencia (Nombre y Tel)")
    observaciones_generales = models.TextField(blank=True, null=True)

    def save(self, *args, **kwargs):
        # Sincronizar nombre completo automáticamente
        self.nombre_completo = f"{self.primer_nombre} {self.segundo_nombre or ''} {self.apellido_paterno} {self.apellido_materno}".replace('  ', ' ').strip()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.nombre_completo} ({self.get_nivel_display()} {self.seccion})"

    def __str__(self):
        return f"{self.nombre_completo} ({self.get_nivel_display()} {self.seccion})"

    @property
    def curso_display(self):
        return f"{self.get_nivel_display()} {self.seccion}"


class Asistencia(models.Model):
    """
    Control de seguimiento de inasistencias o presencias al estudiante por día.
    """
    # Estudiante al cual se le registra la asistencia
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, related_name='asistencias', verbose_name="Estudiante")
    # Fecha estática que toma el día evaluado
    fecha = models.DateField(auto_now_add=True, verbose_name="Fecha")
    # Boleano indicando un SI/NO de presencia del alumno
    presente = models.BooleanField(default=False, verbose_name="Presente")
    # Docente que reportó la asistencia
    docente = models.ForeignKey(Usuario, on_delete=models.CASCADE, limit_choices_to={'rol': 'docente'}, related_name='asistencias_registradas', verbose_name="Docente")

    def __str__(self):
        estado = "Presente" if self.presente else "Ausente"
        return f"{self.estudiante.nombre_completo} - {self.fecha} - {estado}"


class Evaluacion(models.Model):
    """
    Eventos de calificación académica en una materia dada por un profesor.
    """
    # Rótulo de la prueba
    titulo = models.CharField(max_length=200, verbose_name="Título")
    # Contenido o formato a tomar
    descripcion = models.TextField(verbose_name="Descripción")
    # Fecha pautada de la evaluación
    fecha_evaluacion = models.DateTimeField(verbose_name="Fecha de Evaluación")
    # Asignatura de la currícula evaluada
    asignatura = models.CharField(max_length=100, verbose_name="Asignatura")
    # Profesor creador responsable del exámen
    docente = models.ForeignKey(Usuario, on_delete=models.CASCADE, limit_choices_to={'rol': 'docente'}, related_name='evaluaciones_creadas', verbose_name="Docente")
    # Curso al que pertenece la evaluación
    nivel = models.CharField(max_length=2, choices=NIVELES_CHOICES, default='1B', verbose_name="Nivel")
    seccion = models.CharField(max_length=1, choices=SECCIONES_CHOICES, default='A', verbose_name="Sección")

    def __str__(self):
        return f"{self.titulo} - {self.asignatura} ({self.get_nivel_display()} {self.seccion})"


class Anotacion(models.Model):
    """
    Observaciones conductuales dictaminadas por los docentes hacia el estudiante.
    """
    TIPOS = [
        ('positiva', 'Positiva'),
        ('negativa', 'Negativa'),
    ]
    # Estudiante al cual se le asigna la anotación
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, related_name='anotaciones', verbose_name="Estudiante")
    # Bandera para clasificar si la anotación fue sanción o elogio
    tipo = models.CharField(max_length=20, choices=TIPOS, verbose_name="Tipo")
    # El porvenir o suceso detonante descrito
    descripcion = models.TextField(verbose_name="Descripción")
    # El día exacto donde ocurrió o se levantó
    fecha = models.DateTimeField(auto_now_add=True, verbose_name="Fecha")
    # El profesor que la dictaminó
    docente = models.ForeignKey(Usuario, on_delete=models.CASCADE, limit_choices_to={'rol': 'docente'}, related_name='anotaciones_emitidas', verbose_name="Docente")

    def __str__(self):
        return f"{self.get_tipo_display()} - {self.estudiante.nombre_completo} ({self.fecha.date()})"


class Reunion(models.Model):
    """
    Citaciones generales y particulares de un profesor.
    """
    # Motivo de la asamblea
    titulo = models.CharField(max_length=200, verbose_name="Título")
    # Fecha exacta cuando sucederá
    fecha_hora = models.DateTimeField(verbose_name="Fecha y Hora")
    # Temas de charla
    descripcion = models.TextField(verbose_name="Descripción")
    # URL de acceso si es híbrida
    link_virtual = models.URLField(blank=True, null=True, verbose_name="Enlace Virtual")
    # Docente anfitrión
    docente = models.ForeignKey(Usuario, on_delete=models.CASCADE, limit_choices_to={'rol': 'docente'}, related_name='reuniones_organizadas', verbose_name="Docente")
    # Curso al que se cita (opcional)
    nivel = models.CharField(max_length=2, choices=NIVELES_CHOICES, blank=True, null=True, verbose_name="Nivel")
    seccion = models.CharField(max_length=1, choices=SECCIONES_CHOICES, blank=True, null=True, verbose_name="Sección")

    def __str__(self):
        curso_txt = f"({self.get_nivel_display()} {self.seccion})" if self.nivel else ""
        return f"Reunión: {self.titulo} {curso_txt} - Docente: {self.docente.username}"


class Calificacion(models.Model):
    """
    Registro de notas o calificaciones obtenidas por un estudiante en una evaluación particular.
    """
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, related_name='calificaciones', verbose_name="Estudiante")
    evaluacion = models.ForeignKey(Evaluacion, on_delete=models.CASCADE, related_name='calificaciones', verbose_name="Evaluación")
    valor = models.DecimalField(max_digits=3, decimal_places=1, verbose_name="Nota")
    observacion = models.TextField(blank=True, null=True, verbose_name="Observación")
    fecha_registro = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Registro")

    class Meta:
        unique_together = ('estudiante', 'evaluacion')
        verbose_name = "Calificación"
        verbose_name_plural = "Calificaciones"

    def __str__(self):
        return f"{self.estudiante.nombre_completo} - {self.evaluacion.titulo}: {self.valor}"
