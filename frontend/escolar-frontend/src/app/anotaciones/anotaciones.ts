import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-anotaciones',
  standalone: false,
  templateUrl: './anotaciones.html',
  styleUrl: './anotaciones.css',
})
export class AnotacionesComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);
  private readonly snackBar = inject(MatSnackBar);

  estudiantes = signal<any[]>([]);
  anotaciones = signal<any[]>([]);
  isLoading = signal(true);
  isSubmitting = signal(false);
  editingItem = signal<any>(null);

  anotacionForm = this.fb.group({
    estudiante: ['', [Validators.required]],
    tipo: ['positiva', [Validators.required]],
    descripcion: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.cargarEstudiantes();
    this.cargarAnotaciones();
  }

  cargarEstudiantes(): void {
    this.apiService.getEstudiantes().subscribe({
      next: (res) => this.estudiantes.set(res),
    });
  }

  cargarAnotaciones(): void {
    this.apiService.getAnotaciones().subscribe({
      next: (res) => {
        this.anotaciones.set(res);
        this.isLoading.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar anotaciones', 'Cerrar', { duration: 3000 });
        this.isLoading.set(false);
      }
    });
  }

  onSubmit(): void {
    if (this.anotacionForm.valid) {
      this.isSubmitting.set(true);
      const editing = this.editingItem();

      if (editing) {
        this.apiService.actualizarAnotacion(editing.id, this.anotacionForm.value).subscribe({
          next: () => {
            this.snackBar.open('Anotación actualizada', 'Cerrar', { duration: 3000 });
            this.resetForm();
            this.cargarAnotaciones();
          },
          error: () => {
            this.snackBar.open('Error al actualizar la anotación', 'Cerrar', { duration: 3000 });
            this.isSubmitting.set(false);
          }
        });
      } else {
        this.apiService.crearAnotacion(this.anotacionForm.value).subscribe({
          next: () => {
            this.snackBar.open('Anotación registrada con éxito', 'Cerrar', { duration: 3000 });
            this.resetForm();
            this.cargarAnotaciones();
          },
          error: () => {
            this.snackBar.open('Error al registrar la anotación', 'Cerrar', { duration: 3000 });
            this.isSubmitting.set(false);
          }
        });
      }
    }
  }

  editar(item: any): void {
    this.editingItem.set(item);
    this.anotacionForm.patchValue({
      estudiante: item.estudiante,
      tipo: item.tipo,
      descripcion: item.descripcion,
    });
  }

  cancelarEdicion(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.anotacionForm.reset({ tipo: 'positiva' });
    this.editingItem.set(null);
    this.isSubmitting.set(false);
  }

  eliminar(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta anotación?')) {
      this.apiService.eliminarAnotacion(id).subscribe({
        next: () => {
          this.snackBar.open('Anotación eliminada', 'Cerrar', { duration: 3000 });
          this.cargarAnotaciones();
        }
      });
    }
  }
}
