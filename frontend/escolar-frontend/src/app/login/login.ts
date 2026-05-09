import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  public themeService = inject(ThemeService);

  isLoading = signal(false);

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      const { username, password } = this.loginForm.value;

      this.authService.login(username!, password!).subscribe({
        next: (res) => {
          this.isLoading.set(false);
          this.snackBar.open('¡Bienvenido!', 'Cerrar', { duration: 3000 });
          
          // Redirección según rol
          const rol = this.authService.getRol();
          if (rol === 'docente') {
            this.router.navigate(['/docente']);
          } else if (rol === 'apoderado') {
            this.router.navigate(['/apoderado']);
          } else if (rol === 'alumno') {
            this.router.navigate(['/alumno']);
          } else if (rol === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          this.snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', { duration: 3000 });
        },
      });
    }
  }
}
