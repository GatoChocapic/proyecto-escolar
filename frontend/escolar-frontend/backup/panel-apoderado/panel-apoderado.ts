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
  
  isLoading = signal(true);
  isLoadingEval = signal(true);
  isLoadingAnot = signal(true);
  isLoadingReun = signal(true);
  
  displayedColumns: string[] = ['fecha', 'estudiante', 'estado'];

  get username(): string {
    return localStorage.getItem('username') || 'Apoderado';
  }

  ngOnInit(): void {
    this.cargarAsistencias();
    this.cargarEvaluaciones();
    this.cargarAnotaciones();
    this.cargarReuniones();
  }

  cargarAsistencias(): void {
    this.apiService.getAsistencias().subscribe({
      next: (res) => {
        this.asistencias.set(res);
        this.isLoading.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar historial de asistencia', 'Cerrar', { duration: 3000 });
        this.isLoading.set(false);
      }
    });
  }

  cargarEvaluaciones(): void {
    this.apiService.getEvaluaciones().subscribe({
      next: (res) => {
        this.evaluaciones.set(res);
        this.isLoadingEval.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar evaluaciones', 'Cerrar', { duration: 3000 });
        this.isLoadingEval.set(false);
      }
    });
  }

  cargarAnotaciones(): void {
    this.apiService.getAnotaciones().subscribe({
      next: (res) => {
        this.anotaciones.set(res);
        this.isLoadingAnot.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar historial conductual', 'Cerrar', { duration: 3000 });
        this.isLoadingAnot.set(false);
      }
    });
  }

  cargarReuniones(): void {
    this.apiService.getReuniones().subscribe({
      next: (res) => {
        this.reuniones.set(res);
        this.isLoadingReun.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar próximas reuniones', 'Cerrar', { duration: 3000 });
        this.isLoadingReun.set(false);
      }
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

  logout(): void {
    this.authService.logout();
  }
}
