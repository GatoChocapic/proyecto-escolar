import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../services/auth';
import { ApiService } from '../services/api';
import { ThemeService } from '../services/theme.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog.component';

@Component({
  selector: 'app-panel-docente',
  standalone: false,
  templateUrl: './panel-docente.html',
  styleUrl: './panel-docente.css',
})
export class PanelDocenteComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly apiService = inject(ApiService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  public themeService = inject(ThemeService);

  evaluaciones = signal<any[]>([]);
  anotaciones = signal<any[]>([]);
  reuniones = signal<any[]>([]);
  
  isLoading = signal(true);
  isSubmitting = signal(false);

  // Estados de vista
  view = signal<'dashboard' | 'notas'>('dashboard');
  
  // Estados para el módulo de notas
  evaluacionSeleccionada = signal<any>(null);
  alumnosCurso = signal<any[]>([]);
  notasIngresadas = signal<any>({}); // { estudianteId: { valor: number, observacion: string } }
  isLoadingAlumnos = signal(false);

  // --- Nuevas señales Premium ---
  clasesDelDia = signal<any[]>([]);
  alumnosEnRiesgo = signal<any[]>([]);
  pendientes = signal<any[]>([]);
  actividadReciente = signal<any[]>([]);

  ngOnInit(): void {
    this.cargarDashboard();
  }

  cargarDashboard(): void {
    this.isLoading.set(true);
    let loaded = 0;
    const checkDone = () => {
      loaded++;
      if (loaded === 3) this.isLoading.set(false);
    };

    this.apiService.getEvaluaciones().subscribe({
      next: (res) => { this.evaluaciones.set(res); checkDone(); },
      error: () => checkDone()
    });

    this.apiService.getAnotaciones().subscribe({
      next: (res) => { this.anotaciones.set(res); checkDone(); },
      error: () => checkDone()
    });

    this.apiService.getReuniones().subscribe({
      next: (res) => { this.reuniones.set(res); checkDone(); },
      error: () => checkDone()
    });

    this.cargarDatosPremium();
  }

  cargarDatosPremium(): void {
    // 1. Mock: Clases del día
    this.clasesDelDia.set([
      { hora: '08:00', curso: '1° Básico A', asignatura: 'Matemática', activa: false },
      { hora: '09:30', curso: '2° Básico B', asignatura: 'Matemática', activa: true },
      { hora: '11:15', curso: '4° Medio C', asignatura: 'Álgebra', activa: false },
      { hora: '14:00', curso: '3° Medio A', asignatura: 'Geometría', activa: false },
    ]);

    // 2. Mock: Alumnos en riesgo (lógica simulada)
    this.alumnosEnRiesgo.set([
      { nombre: 'Juan Pérez', curso: '1° Básico A', promedio: 3.8, alertas: 2 },
      { nombre: 'María García', curso: '4° Medio C', promedio: 3.5, alertas: 1 },
      { nombre: 'Carlos Soto', curso: '2° Básico B', promedio: 3.9, alertas: 3 },
    ]);

    // 3. Mock: Pendientes
    this.pendientes.set([
      { titulo: 'Subir notas: Prueba de Fracciones', curso: '1° Básico A', urgencia: 'alta' },
      { titulo: 'Revisar asistencia: 4° Medio C', curso: '4° Medio C', urgencia: 'media' },
      { titulo: 'Planificar reunión: Apoderado Carlos', curso: '2° Básico B', urgencia: 'baja' },
    ]);

    // 4. Mock: Actividad Reciente
    this.actividadReciente.set([
      { tipo: 'evaluacion', texto: 'Nueva evaluación creada para 1° Básico A', fecha: 'Hace 2 horas' },
      { tipo: 'anotacion', texto: 'Anotación positiva ingresada a Juan Pérez', fecha: 'Hace 5 horas' },
      { tipo: 'reunion', texto: 'Reunión programada con 4° Medio C', fecha: 'Ayer' },
    ]);
  }

  logout(): void {
    this.authService.logout();
  }

  get username(): string {
    return localStorage.getItem('username') || 'Docente';
  }

  // ==========================================
  // Lógica de Notas
  // ==========================================
  irANotas(): void {
    this.view.set('notas');
    this.evaluacionSeleccionada.set(null);
    this.alumnosCurso.set([]);
    this.notasIngresadas.set({});
  }

  volverAlDashboard(): void {
    this.view.set('dashboard');
    this.cargarDashboard();
  }

  seleccionarEvaluacion(ev: any): void {
    this.evaluacionSeleccionada.set(ev);
    this.cargarAlumnosPorCurso(ev.nivel, ev.seccion, ev.id);
  }

  cargarAlumnosPorCurso(nivel: string, seccion: string, evaluacionId: string): void {
    this.isLoadingAlumnos.set(true);
    this.alumnosCurso.set([]);
    
    // 1. Cargar alumnos del curso (Nivel + Sección)
    this.apiService.getEstudiantesPorNivelYSeccion(nivel, seccion).subscribe({
      next: (alumnos: any[]) => {
        this.alumnosCurso.set(alumnos);
        
        // 2. Cargar notas ya existentes para esta evaluación
        this.apiService.getCalificaciones().subscribe({
          next: (calificaciones) => {
            const notasMap: any = {};
            // Filtrar solo las de esta evaluación
            const filtradas = calificaciones.filter(c => c.evaluacion === evaluacionId);
            
            filtradas.forEach(c => {
              notasMap[c.estudiante] = { valor: c.valor, observacion: c.observacion };
            });
            this.notasIngresadas.set(notasMap);
            this.isLoadingAlumnos.set(false);
          },
          error: () => this.isLoadingAlumnos.set(false)
        });
      },
      error: () => {
        this.snackBar.open('Error al cargar la lista de alumnos', 'Cerrar', { duration: 3000 });
        this.isLoadingAlumnos.set(false);
      }
    });
  }

  actualizarNotaInput(estudianteId: string, valor: string, eventType: 'input' | 'blur', inputElement?: HTMLInputElement): void {
    if (!valor) {
      const notas = { ...this.notasIngresadas() };
      if (notas[estudianteId]) {
        notas[estudianteId].valor = null;
        this.notasIngresadas.set(notas);
      }
      return;
    }

    // 1. Limpiar: solo números
    let raw = valor.replace(/[^0-9]/g, '');
    
    let display = raw;
    let finalNum = 0;

    // 2. Lógica de 2 dígitos (Speed-typing)
    if (raw.length >= 2) {
      // Tomamos los primeros 2 dígitos
      let digits = parseInt(raw.substring(0, 2));
      
      // Validar tope de 70 (7,0)
      if (digits > 70) digits = 70;
      if (digits < 10) digits = 10; // Mínimo 1,0

      display = (digits / 10).toFixed(1).replace('.', ',');
      finalNum = digits / 10;
      
      // Actualizar el valor visual inmediatamente
      if (inputElement) {
        inputElement.value = display;
      }
    } else {
      // Si solo hay un dígito, lo mostramos tal cual
      display = raw;
      finalNum = parseInt(raw) || 0;
    }

    // 3. Guardar en el signal para el backend
    const notas = { ...this.notasIngresadas() };
    if (!notas[estudianteId]) notas[estudianteId] = { valor: null, observacion: '' };
    
    if (raw.length >= 2) {
      notas[estudianteId].valor = finalNum;
    } else if (eventType === 'blur' && raw.length === 1) {
      // Si sale con un solo dígito (ej: "5"), lo convertimos a "5,0"
      let val = parseInt(raw);
      if (val > 7) val = 7;
      if (val < 1) val = 1;
      
      notas[estudianteId].valor = val;
      if (inputElement) {
        inputElement.value = val.toFixed(1).replace('.', ',');
      }
    }
    
    this.notasIngresadas.set(notas);
  }

  // Helper para mostrar la nota en la interfaz de forma amigable
  formatDisplayNota(estudianteId: string): string {
    const nota = this.notasIngresadas()[estudianteId]?.valor;
    if (nota === null || nota === undefined) return '';
    
    // Si es un número entero, lo mostramos tal cual (ej: 5) para no molestar al escribir.
    // El .toFixed(1) se aplicará en el blur para que quede como 5,0 al final.
    return nota.toString().replace('.', ',');
  }

  guardarNotas(): void {
    const ev = this.evaluacionSeleccionada();
    if (!ev) return;

    const payload = Object.keys(this.notasIngresadas()).map(estId => ({
      estudiante: estId,
      evaluacion: ev.id,
      valor: this.notasIngresadas()[estId].valor,
      observacion: this.notasIngresadas()[estId].observacion
    })).filter(n => n.valor !== null && n.valor !== '');

    if (payload.length === 0) {
      this.snackBar.open('No hay notas nuevas para guardar', 'Cerrar', { duration: 3000 });
      return;
    }

    // Abrir diálogo de confirmación centrado
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {
        title: '¿Guardar Calificaciones?',
        message: `Estás a punto de guardar ${payload.length} notas para "${ev.titulo}". ¿Deseas continuar?`,
        confirmText: 'Sí, guardar ahora',
        cancelText: 'No, revisar',
        icon: 'help_outline'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ejecutarGuardado(payload);
      }
    });
  }

  private ejecutarGuardado(payload: any[]): void {
    this.isSubmitting.set(true);
    this.apiService.guardarCalificacionesMasivas(payload).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        // Diálogo de éxito centrado
        this.dialog.open(ConfirmDialogComponent, {
          width: '400px',
          data: {
            type: 'success',
            title: '¡Todo listo!',
            message: 'Las calificaciones se han guardado con éxito en el registro escolar.',
            confirmText: 'Genial',
            icon: 'check_circle'
          }
        });
      },
      error: (err) => {
        console.error(err);
        this.snackBar.open('Error al guardar las calificaciones', 'Cerrar', { duration: 3000 });
        this.isSubmitting.set(false);
      }
    });
  }
}
