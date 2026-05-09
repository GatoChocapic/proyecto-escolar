import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

/**
 * Guard funcional que verifica el rol del usuario.
 * Se usa pasando el rol esperado vía `data` en la ruta:
 *   { path: 'docente', component: ..., canActivate: [roleGuard], data: { rol: 'docente' } }
 */
export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Primero verifica que esté autenticado
  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['/']);
  }

  // Verifica el rol requerido para esta ruta
  const requiredRol = route.data?.['rol'] as string | string[] | undefined;

  if (!requiredRol) {
    // Si no se especifica rol, permitir acceso (solo requiere autenticación)
    return true;
  }

  const userRol = authService.getRol();

  // Permitir si el rol coincide (soporta un solo rol o array de roles)
  const allowedRoles = Array.isArray(requiredRol) ? requiredRol : [requiredRol];

  if (userRol && allowedRoles.includes(userRol)) {
    return true;
  }

  // Redirigir al panel correspondiente según su rol real
  if (userRol === 'docente') {
    return router.createUrlTree(['/docente']);
  } else if (userRol === 'apoderado') {
    return router.createUrlTree(['/apoderado']);
  }

  // Fallback: redirigir al login
  return router.createUrlTree(['/']);
};
