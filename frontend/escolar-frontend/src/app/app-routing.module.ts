import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { PanelDocenteComponent } from './panel-docente/panel-docente';
import { PanelApoderadoComponent } from './panel-apoderado/panel-apoderado';
import { PanelAdminComponent } from './panel-admin/panel-admin';
import { AsistenciaComponent } from './asistencia/asistencia';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones';
import { AnotacionesComponent } from './anotaciones/anotaciones';
import { ReunionesComponent } from './reuniones/reuniones';
import { PanelAlumnoComponent } from './panel-alumno/panel-alumno';
import { roleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'docente', 
    component: PanelDocenteComponent,
    canActivate: [roleGuard],
    data: { rol: ['docente', 'admin'] }
  },
  { 
    path: 'asistencia', 
    component: AsistenciaComponent,
    canActivate: [roleGuard],
    data: { rol: ['docente', 'admin'] }
  },
  { 
    path: 'evaluaciones', 
    component: EvaluacionesComponent,
    canActivate: [roleGuard],
    data: { rol: ['docente', 'admin'] }
  },
  { 
    path: 'anotaciones', 
    component: AnotacionesComponent,
    canActivate: [roleGuard],
    data: { rol: ['docente', 'admin'] }
  },
  { 
    path: 'reuniones', 
    component: ReunionesComponent,
    canActivate: [roleGuard],
    data: { rol: ['docente', 'admin'] }
  },
  { 
    path: 'apoderado', 
    component: PanelApoderadoComponent,
    canActivate: [roleGuard],
    data: { rol: ['apoderado', 'admin'] }
  },
  {
    path: 'admin',
    component: PanelAdminComponent,
    canActivate: [roleGuard],
    data: { rol: 'admin' }
  },
  { 
    path: 'alumno', 
    component: PanelAlumnoComponent,
    canActivate: [roleGuard],
    data: { rol: ['alumno', 'admin'] }
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
