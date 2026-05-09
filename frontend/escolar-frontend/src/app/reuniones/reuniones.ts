import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reuniones',
  standalone: false,
  templateUrl: './reuniones.html',
  styleUrl: './reuniones.css',
})
export class ReunionesComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly apiService = inject(ApiService);
  private readonly snackBar = inject(MatSnackBar);

  reuniones = signal<any[]>([]);
  isLoading = signal(true);
  isSubmitting = signal(false);
  editingItem = signal<any>(null);

  reunionForm = this.fb.group({
    titulo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    fecha_hora: ['', [Validators.required]],
    curso: ['', [Validators.required]],
    link_virtual: [''],
  });

  ngOnInit(): void {
    this.cargarReuniones();
  }

  cargarReuniones(): void {
    this.apiService.getReuniones().subscribe({
      next: (res) => {
        this.reuniones.set(res);
        this.isLoading.set(false);
      },
      error: () => {
        this.snackBar.open('Error al cargar reuniones', 'Cerrar', { duration: 3000 });
        this.isLoading.set(false);
      }
    });
  }

  onSubmit(): void {
    if (this.reunionForm.valid) {
      this.isSubmitting.set(true);
      const editing = this.editingItem();

      if (editing) {
        this.apiService.actualizarReunion(editing.id, this.reunionForm.value).subscribe({
          next: () => {
            this.snackBar.open('Reunión actualizada', 'Cerrar', { duration: 3000 });
            this.resetForm();
            this.cargarReuniones();
          },
          error: () => {
            this.snackBar.open('Error al actualizar la reunión', 'Cerrar', { duration: 3000 });
            this.isSubmitting.set(false);
          }
        });
      } else {
        this.apiService.crearReunion(this.reunionForm.value).subscribe({
          next: () => {
            this.snackBar.open('Reunión citada con éxito', 'Cerrar', { duration: 3000 });
            this.resetForm();
            this.cargarReuniones();
          },
          error: () => {
            this.snackBar.open('Error al citar la reunión', 'Cerrar', { duration: 3000 });
            this.isSubmitting.set(false);
          }
        });
      }
    }
  }

  editar(item: any): void {
    this.editingItem.set(item);
    // Formatear fecha para input datetime-local
    const fecha = new Date(item.fecha_hora);
    const fechaLocal = fecha.toISOString().slice(0, 16);
    this.reunionForm.patchValue({
      titulo: item.titulo,
      descripcion: item.descripcion,
      fecha_hora: fechaLocal,
      curso: item.curso,
      link_virtual: item.link_virtual || '',
    });
  }

  cancelarEdicion(): void {
    this.resetForm();
  }

  resetForm(): void {
    this.reunionForm.reset();
    this.editingItem.set(null);
    this.isSubmitting.set(false);
  }

  eliminar(id: string): void {
    if (confirm('¿Estás seguro de eliminar esta citación?')) {
      this.apiService.eliminarReunion(id).subscribe({
        next: () => {
          this.snackBar.open('Reunión eliminada', 'Cerrar', { duration: 3000 });
          this.cargarReuniones();
        }
      });
    }
  }
}
