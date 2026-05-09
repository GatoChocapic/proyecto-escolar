import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-evaluaciones',
  standalone: false,
  templateUrl: './evaluaciones.html',
  styleUrl: './evaluaciones.css',
})
export class EvaluacionesComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);
  private readonly snackBar = inject(MatSnackBar);

  evaluaciones = signal<any[]>([]);
  isLoading = signal(true);
  isSubmitting = signal(false);
  editingItem = signal<any>(null);

  evaluacionForm = this.fb.group({
    titulo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    fecha_evaluacion: [new Date(), [Validators.required]],
    asignatura: ['', [Validators.required]],
    curso: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.cargarEvaluaciones();
  }

  cargarEvaluaciones(): void {
    this.apiService.getEvaluaciones().subscribe({
      next: (res) => {
        this.evaluaciones.set(res);
        this.isLoading.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar evaluaciones', 'Cerrar', { duration: 3000 });
        this.isLoading.set(false);
      }
    });
  }

  onSubmit(): void {
    if (this.evaluacionForm.valid) {
      this.isSubmitting.set(true);
      const editing = this.editingItem();

      if (editing) {
        this.apiService.actualizarEvaluacion(editing.id, this.evaluacionForm.value).subscribe({
          next: () => {
            this.snackBar.open('Evaluación actualizada', 'Cerrar', { duration: 3000 });
            this.resetForm();
            this.cargarEvaluaciones();
          },
          error: () => {
            this.snackBar.open('Error al actualizar la evaluación', 'Cerrar', { duration: 3000 });
            this.isSubmitting.set(false);
          }
        });
      } else {
        this.apiService.crearEvaluacion(this.evaluacionForm.value).subscribe({
          next: () => {
            this.snackBar.open('Evaluación creada con éxito', 'Cerrar', { duration: 3000 });
            this.resetForm();
            this.cargarEvaluaciones();
          },
          error: () => {
            this.snackBar.open('Error al crear la evaluación', 'Cerrar', { duration: 3000 });
            this.isSubmitting.set(false);
          }
        });
      }
    }
  }

  editar(item: any): void {
    this.editingItem.set(item);
    this.evaluacionForm.patchValue({
      titulo: item.titulo,
      descripcion: item.descripcion,
      fecha_evaluacion: new Date(item.fecha_evaluacion),
      asignatura: item.asignatura,
      curso: item.curso,
    });
  }

  cancelarEdicion(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.evaluacionForm.reset({ fecha_evaluacion: new Date() });
    this.editingItem.set(null);
    this.isSubmitting.set(false);
  }

  eliminar(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta evaluación?')) {
      this.apiService.eliminarEvaluacion(id).subscribe({
        next: () => {
          this.snackBar.open('Evaluación eliminada', 'Cerrar', { duration: 3000 });
          this.cargarEvaluaciones();
        }
      });
    }
  }
}
