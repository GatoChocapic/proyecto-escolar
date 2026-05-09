import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

/**
 * Extrae los resultados de una respuesta paginada de DRF.
 * Si la respuesta es un array directo, lo devuelve tal cual.
 */
function extractResults(res: any): any[] {
  return Array.isArray(res) ? res : res?.results || [];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  // El interceptor se encarga de adjuntar el token JWT automáticamente.
  // Ya no necesitamos getHeaders() manual.

  // ==========================================
  // Usuarios (admin)
  // ==========================================
  getUsuarios(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}usuarios/`).pipe(map(extractResults));
  }

  // ==========================================
  // Estudiantes
  // ==========================================
  getEstudiantes(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}estudiantes/`).pipe(map(extractResults));
  }

  getEstudiantesPorNivelYSeccion(nivel: string, seccion: string): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}estudiantes/?nivel=${nivel}&seccion=${seccion}`).pipe(map(extractResults));
  }

  crearEstudiante(estudiante: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}estudiantes/`, estudiante);
  }

  actualizarEstudiante(id: string, estudiante: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}estudiantes/${id}/`, estudiante);
  }

  eliminarEstudiante(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}estudiantes/${id}/`);
  }

  // ==========================================
  // Asistencias
  // ==========================================
  getAsistencias(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}asistencias/`).pipe(map(extractResults));
  }

  registrarAsistenciaMasiva(asistencias: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}asistencias/bulk_create/`, asistencias);
  }

  // ==========================================
  // Evaluaciones
  // ==========================================
  getEvaluaciones(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}evaluaciones/`).pipe(map(extractResults));
  }

  crearEvaluacion(evaluacion: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}evaluaciones/`, evaluacion);
  }

  actualizarEvaluacion(id: string, evaluacion: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}evaluaciones/${id}/`, evaluacion);
  }

  eliminarEvaluacion(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}evaluaciones/${id}/`);
  }

  // ==========================================
  // Anotaciones
  // ==========================================
  getAnotaciones(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}anotaciones/`).pipe(map(extractResults));
  }

  crearAnotacion(anotacion: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}anotaciones/`, anotacion);
  }

  actualizarAnotacion(id: string, anotacion: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}anotaciones/${id}/`, anotacion);
  }

  eliminarAnotacion(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}anotaciones/${id}/`);
  }

  // ==========================================
  // Reuniones
  // ==========================================
  getReuniones(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}reuniones/`).pipe(map(extractResults));
  }

  crearReunion(reunion: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}reuniones/`, reunion);
  }

  actualizarReunion(id: string, reunion: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}reuniones/${id}/`, reunion);
  }

  eliminarReunion(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}reuniones/${id}/`);
  }

  // ==========================================
  // Calificaciones
  // ==========================================
  getCalificaciones(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}calificaciones/`).pipe(map(extractResults));
  }

  guardarCalificacionesMasivas(calificaciones: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}calificaciones/bulk_create/`, calificaciones);
  }
}
