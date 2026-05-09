import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

/**
 * Interceptor HTTP que:
 * 1. Adjunta el token JWT a cada petición automáticamente
 * 2. Detecta errores 401 (token expirado)
 * 3. Intenta renovar el token con el endpoint de refresh
 * 4. Si el refresh falla, redirige al login
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);

  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // No interceptar la petición de login ni de refresh
    if (req.url.includes('/token/') || req.url.includes('/token/refresh/')) {
      return next.handle(req);
    }

    // Adjuntar token si existe
    const token = localStorage.getItem('token');
    let authReq = req;
    if (token) {
      authReq = this.addToken(req, token);
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.handle401Error(req, next);
        }
        return throwError(() => error);
      })
    );
  }

  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const refreshToken = localStorage.getItem('refresh_token');

      if (!refreshToken) {
        this.forceLogout();
        return throwError(() => new Error('No refresh token disponible'));
      }

      return this.http
        .post<any>(`${environment.apiUrl}token/refresh/`, { refresh: refreshToken })
        .pipe(
          switchMap((res) => {
            this.isRefreshing = false;
            localStorage.setItem('token', res.access);
            this.refreshTokenSubject.next(res.access);
            return next.handle(this.addToken(req, res.access));
          }),
          catchError((err) => {
            this.isRefreshing = false;
            this.forceLogout();
            return throwError(() => err);
          })
        );
    }

    // Si ya se está refrescando, esperar a que termine y reintentar
    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addToken(req, token!)))
    );
  }

  private forceLogout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('rol');
    this.router.navigate(['/']);
  }
}
