import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../services/auth';
import { ApiService } from '../services/api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-panel-apoderado',
  standalone: false,
  templateUrl: './panel-apoderado.html',
  styleUrl: './panel-apoderado.css',
})
export class PanelApoderadoComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly apiService = inject(ApiService);
  private readonly snackBar = inject(MatSnackBar);
  public themeService = inject(ThemeService);

  asistencias = signal<any[]>([]);
  evaluaciones = signal<any[]>([]);
  anotaciones = signal<any[]>([]);
  reuniones = signal<any[]>([]);
  calificaciones = signal<any[]>([]);
  
  // Gestión de hijos
  hijos = signal<any[]>([]);
  hijoSeleccionado = signal<any>(null);

  isLoading = signal(true);
  isLoadingData = signal(false);
  
  displayedColumns: string[] = ['fecha', 'estudiante', 'estado'];

  get username(): string {
    return localStorage.getItem('username') || 'Apoderado';
  }

  ngOnInit(): void {
    this.cargarHijos();
  }

  cargarHijos(): void {
    this.isLoading.set(true);
    this.apiService.getEstudiantes().subscribe({
      next: (res) => {
        this.hijos.set(res);
        if (res.length > 0) {
          this.seleccionarHijo(res[0]);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar información de hijos', 'Cerrar', { duration: 3000 });
        this.isLoading.set(false);
      }
    });
  }

  seleccionarHijo(hijo: any): void {
    this.hijoSeleccionado.set(hijo);
    this.cargarDatosHijo();
  }

  cargarDatosHijo(): void {
    const hijo = this.hijoSeleccionado();
    if (!hijo) return;

    this.isLoadingData.set(true);
    
    // Cargar todo el historial del hijo seleccionado
    // Nota: El backend ya filtra por apoderado, pero aquí filtramos por hijo específico en el front si es necesario
    this.cargarAsistencias(hijo.id);
    this.cargarEvaluaciones(hijo.nivel, hijo.seccion);
    this.cargarAnotaciones(hijo.id);
    this.cargarReuniones(hijo.nivel, hijo.seccion);
    this.cargarCalificaciones(hijo.id);
  }

  cargarAsistencias(hijoId: string): void {
    this.apiService.getAsistencias().subscribe({
      next: (res) => {
        // Filtrar por el hijo seleccionado
        this.asistencias.set(res.filter(a => a.estudiante === hijoId));
      }
    });
  }

  cargarEvaluaciones(nivel: string, seccion: string): void {
    this.apiService.getEvaluaciones().subscribe({
      next: (res) => {
        // El backend ya filtra por los niveles de los hijos, pero aseguramos el del hijo actual
        this.evaluaciones.set(res.filter(e => e.nivel === nivel && e.seccion === seccion));
      }
    });
  }

  cargarAnotaciones(hijoId: string): void {
    this.apiService.getAnotaciones().subscribe({
      next: (res) => {
        this.anotaciones.set(res.filter(a => a.estudiante === hijoId));
      }
    });
  }

  cargarReuniones(nivel: string, seccion: string): void {
    this.apiService.getReuniones().subscribe({
      next: (res) => {
        this.reuniones.set(res.filter(r => r.nivel === nivel && r.seccion === seccion));
      }
    });
  }

  cargarCalificaciones(hijoId: string): void {
    this.apiService.getCalificaciones().subscribe({
      next: (res) => {
        this.calificaciones.set(res.filter(c => c.estudiante === hijoId));
        this.isLoadingData.set(false);
      },
      error: () => this.isLoadingData.set(false)
    });
  }

  // Contadores para el resumen
  get totalPresentes(): number {
    return this.asistencias().filter(a => a.presente).length;
  }

  get totalAusentes(): number {
    return this.asistencias().filter(a => !a.presente).length;
  }

  get anotacionesPositivas(): number {
    return this.anotaciones().filter(a => a.tipo === 'positiva').length;
  }

  get anotacionesNegativas(): number {
    return this.anotaciones().filter(a => a.tipo === 'negativa').length;
  }

  // --- Indicadores Premium ---
  get promedioGeneral(): number {
    const notas = this.calificaciones();
    if (notas.length === 0) return 0;
    const sum = notas.reduce((acc, n) => acc + parseFloat(n.valor), 0);
    return sum / notas.length;
  }

  get asistenciaPorcentaje(): number {
    const total = this.asistencias().length;
    if (total === 0) return 100;
    const presentes = this.asistencias().filter(a => a.presente).length;
    return (presentes / total) * 100;
  }

  logout(): void {
    this.authService.logout();
  }
}
