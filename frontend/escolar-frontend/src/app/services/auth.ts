import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly apiUrl = `${environment.apiUrl}token/`;

  // Signals para estado reactivo
  currentUserRol = signal<string | null>(localStorage.getItem('rol'));

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap((res) => {
        if (res.access) {
          localStorage.setItem('token', res.access);
          // Guardar refresh token para el interceptor
          if (res.refresh) {
            localStorage.setItem('refresh_token', res.refresh);
          }
          localStorage.setItem('rol', res.rol);
          localStorage.setItem('username', res.username);
          this.currentUserRol.set(res.rol);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('rol');
    localStorage.removeItem('username');
    this.currentUserRol.set(null);
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getRol(): string | null {
    return localStorage.getItem('rol');
  }
}
