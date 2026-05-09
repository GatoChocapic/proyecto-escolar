import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../services/auth';
import { ApiService } from '../services/api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-panel-alumno',
  standalone: false,
  templateUrl: './panel-alumno.html',
  styleUrl: './panel-alumno.css',
})
export class PanelAlumnoComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly apiService = inject(ApiService);
  private readonly snackBar = inject(MatSnackBar);
  public themeService = inject(ThemeService);

  // Perfil y Datos
  perfil = signal<any>(null);
  asistencias = signal<any[]>([]);
  evaluaciones = signal<any[]>([]);
  anotaciones = signal<any[]>([]);
  calificaciones = signal<any[]>([]);
  reuniones = signal<any[]>([]);

  // Estados de Carga
  isLoading = signal(true);
  
  get username(): string {
    return localStorage.getItem('username') || 'Alumno';
  }

  ngOnInit(): void {
    this.cargarTodo();
  }

  cargarTodo(): void {
    this.isLoading.set(true);
    
    // 1. Obtener perfil del alumno logueado
    this.apiService.getEstudiantes().subscribe({
      next: (res) => {
        if (res.length > 0) {
          this.perfil.set(res[0]);
          this.cargarDatosRelacionados();
        } else {
          this.isLoading.set(false);
          this.snackBar.open('No se encontró el perfil del estudiante', 'Cerrar', { duration: 3000 });
        }
      },
      error: () => {
        this.isLoading.set(false);
        this.snackBar.open('Error al conectar con el servidor', 'Cerrar', { duration: 3000 });
      }
    });
  }

  cargarDatosRelacionados(): void {
    // Cargar todo en paralelo
    this.apiService.getAsistencias().subscribe(res => this.asistencias.set(res));
    this.apiService.getEvaluaciones().subscribe(res => this.evaluaciones.set(res));
    this.apiService.getAnotaciones().subscribe(res => this.anotaciones.set(res));
    this.apiService.getReuniones().subscribe(res => this.reuniones.set(res));
    this.apiService.getCalificaciones().subscribe({
      next: (res) => {
        this.calificaciones.set(res);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  // --- Computados e Inteligencia ---

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

  get materiasCriticas(): any[] {
    // Agrupar por asignatura y ver si el promedio es < 4.0
    const notas = this.calificaciones();
    const grupos: { [key: string]: number[] } = {};
    
    notas.forEach(n => {
      // Necesitamos el nombre de la asignatura de la evaluación
      // Asumiendo que el serializer de Calificación nos da evaluacion_asignatura o similar
      // Por ahora simularemos con evaluacion_titulo como proxy si no está la asignatura directa
      const key = n.evaluacion_titulo.split(':')[0]; 
      if (!grupos[key]) grupos[key] = [];
      grupos[key].push(parseFloat(n.valor));
    });

    const criticas = [];
    for (const mat in grupos) {
      const avg = grupos[mat].reduce((a, b) => a + b, 0) / grupos[mat].length;
      if (avg < 4.0) criticas.push({ nombre: mat, promedio: avg });
    }
    return criticas;
  }

  get proximasEvaluaciones(): any[] {
    return this.evaluaciones()
      .filter(e => new Date(e.fecha_evaluacion) >= new Date())
      .sort((a, b) => new Date(a.fecha_evaluacion).getTime() - new Date(b.fecha_evaluacion).getTime())
      .slice(0, 3);
  }

  get anotacionesRecientes(): any[] {
    return this.anotaciones().slice(0, 3);
  }

  logout(): void {
    this.authService.logout();
  }
}
