import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { ApiService } from '../services/api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface EstudianteAsistencia {
  id: string;
  nombre_completo: string;
  nivel: string;
  nivel_display: string;
  seccion: string;
  curso: string; // "1° Básico A"
  presente: boolean;
}

@Component({
  selector: 'app-asistencia',
  standalone: false,
  templateUrl: './asistencia.html',
  styleUrl: './asistencia.css',
})
export class AsistenciaComponent implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);

  todosEstudiantes = signal<EstudianteAsistencia[]>([]);
  cursoSeleccionado = signal<string>('');
  isLoading = signal(true);
  isSaving = signal(false);
  displayedColumns: string[] = ['nombre', 'curso', 'acciones'];
  today = new Date();

  // Lista de cursos únicos extraída de los estudiantes
  cursosDisponibles = computed(() => {
    const cursos = [...new Set(this.todosEstudiantes().map(e => e.curso))];
    return cursos.sort();
  });

  // Estudiantes filtrados por el curso seleccionado
  estudiantesFiltrados = computed(() => {
    const curso = this.cursoSeleccionado();
    if (!curso) return []; // No mostrar nada si no hay selección
    return this.todosEstudiantes().filter(e => e.curso === curso);
  });

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {
    this.apiService.getEstudiantes().subscribe({
      next: (res) => {
        this.todosEstudiantes.set(res.map(e => ({ ...e, presente: false })));
        this.isLoading.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar estudiantes', 'Cerrar', { duration: 3000 });
        this.isLoading.set(false);
      }
    });
  }

  guardarAsistencia(): void {
    const estudiantesAGuardar = this.estudiantesFiltrados();
    if (estudiantesAGuardar.length === 0) {
      this.snackBar.open('Selecciona un curso primero', 'Cerrar', { duration: 3000 });
      return;
    }

    this.isSaving.set(true);
    const payload = estudiantesAGuardar.map(e => ({
      estudiante: e.id,
      presente: e.presente
    }));

    this.apiService.registrarAsistenciaMasiva(payload).subscribe({
      next: () => {
        this.snackBar.open('Asistencia guardada con éxito', 'Cerrar', { duration: 3000 });
        this.isSaving.set(false);
        this.router.navigate(['/docente']);
      },
      error: () => {
        this.snackBar.open('Error al registrar la asistencia', 'Cerrar', { duration: 3000 });
        this.isSaving.set(false);
      }
    });
  }

  toggleAsistencia(estudiante: EstudianteAsistencia): void {
    estudiante.presente = !estudiante.presente;
  }

  marcarTodos(presente: boolean): void {
    this.estudiantesFiltrados().forEach(e => e.presente = presente);
  }
}
