import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth';
import { ApiService } from '../services/api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-panel-admin',
  standalone: false,
  templateUrl: './panel-admin.html',
  styleUrl: './panel-admin.css',
})
export class PanelAdminComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly apiService = inject(ApiService);
  private readonly snackBar = inject(MatSnackBar);
  public themeService = inject(ThemeService);

  usuarios = signal<any[]>([]);
  estudiantes = signal<any[]>([]);
  apoderados = signal<any[]>([]);
  isLoadingUsers = signal(true);
  isLoadingStudents = signal(true);
  isSubmitting = signal(false);

  editingEstudiante = signal<any>(null);
  displayedColumnsUsers: string[] = ['username', 'email', 'rol', 'estado'];
  displayedColumnsStudents: string[] = ['nombre', 'apoderado', 'curso', 'acciones'];

  estudianteForm = this.fb.group({
    nombre_completo: ['', [Validators.required]],
    apoderado: ['', [Validators.required]],
    curso: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarEstudiantes();
  }

  cargarUsuarios(): void {
    this.apiService.getUsuarios().subscribe({
      next: (res) => {
        this.usuarios.set(res);
        // Filtrar solo apoderados para el selector del formulario
        this.apoderados.set(res.filter((u: any) => u.rol === 'apoderado'));
        this.isLoadingUsers.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar usuarios', 'Cerrar', { duration: 3000 });
        this.isLoadingUsers.set(false);
      },
    });
  }

  cargarEstudiantes(): void {
    this.apiService.getEstudiantes().subscribe({
      next: (res) => {
        this.estudiantes.set(res);
        this.isLoadingStudents.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar estudiantes', 'Cerrar', { duration: 3000 });
        this.isLoadingStudents.set(false);
      },
    });
  }

  onSubmitEstudiante(): void {
    if (this.estudianteForm.valid) {
      this.isSubmitting.set(true);
      const editing = this.editingEstudiante();

      if (editing) {
        // Modo edición
        this.apiService.actualizarEstudiante(editing.id, this.estudianteForm.value).subscribe({
          next: () => {
            this.snackBar.open('Estudiante actualizado', 'Cerrar', { duration: 3000 });
            this.resetForm();
            this.cargarEstudiantes();
          },
          error: () => {
            this.snackBar.open('Error al actualizar estudiante', 'Cerrar', { duration: 3000 });
            this.isSubmitting.set(false);
          },
        });
      } else {
        // Modo creación
        this.apiService.crearEstudiante(this.estudianteForm.value).subscribe({
          next: () => {
            this.snackBar.open('Estudiante creado con éxito', 'Cerrar', { duration: 3000 });
            this.resetForm();
            this.cargarEstudiantes();
          },
          error: () => {
            this.snackBar.open('Error al crear estudiante', 'Cerrar', { duration: 3000 });
            this.isSubmitting.set(false);
          },
        });
      }
    }
  }

  editarEstudiante(est: any): void {
    this.editingEstudiante.set(est);
    this.estudianteForm.patchValue({
      nombre_completo: est.nombre_completo,
      apoderado: est.apoderado,
      curso: est.curso,
    });
  }

  eliminarEstudiante(id: string): void {
    if (confirm('¿Estás seguro de eliminar este estudiante?')) {
      this.apiService.eliminarEstudiante(id).subscribe({
        next: () => {
          this.snackBar.open('Estudiante eliminado', 'Cerrar', { duration: 3000 });
          this.cargarEstudiantes();
        },
      });
    }
  }

  resetForm(): void {
    this.estudianteForm.reset();
    this.editingEstudiante.set(null);
    this.isSubmitting.set(false);
  }

  cancelarEdicion(): void {
    this.resetForm();
  }

  logout(): void {
    this.authService.logout();
  }

  getResumenRoles(): { docentes: number; apoderados: number; admins: number } {
    const users = this.usuarios();
    return {
      docentes: users.filter((u) => u.rol === 'docente').length,
      apoderados: users.filter((u) => u.rol === 'apoderado').length,
      admins: users.filter((u) => u.rol === 'admin').length,
    };
  }
}
