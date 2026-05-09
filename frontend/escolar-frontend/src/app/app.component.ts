import { Component, signal, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('escolar-frontend');
  private themeService = inject(ThemeService);
}
