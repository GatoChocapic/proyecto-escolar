import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login';
import { PanelDocenteComponent } from './panel-docente/panel-docente';
import { PanelApoderadoComponent } from './panel-apoderado/panel-apoderado';
import { PanelAdminComponent } from './panel-admin/panel-admin';
import { AsistenciaComponent } from './asistencia/asistencia';
import { EvaluacionesComponent } from './evaluaciones/evaluaciones';
import { AnotacionesComponent } from './anotaciones/anotaciones';
import { ReunionesComponent } from './reuniones/reuniones';
import { ConfirmDialogComponent } from './shared/confirm-dialog.component';

// Interceptor para JWT y Diálogos
import { AuthInterceptor } from './services/auth.interceptor';
import { PanelAlumnoComponent } from './panel-alumno/panel-alumno';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelDocenteComponent,
    PanelApoderadoComponent,
    PanelAdminComponent,
    AsistenciaComponent,
    EvaluacionesComponent,
    AnotacionesComponent,
    ReunionesComponent,
    ConfirmDialogComponent,
    PanelAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatChipsModule,
    MatDividerModule,
    MatTooltipModule,
    MatMenuModule,
    MatBadgeModule,
    MatDialogModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    // Registrar interceptor HTTP para JWT automático
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
