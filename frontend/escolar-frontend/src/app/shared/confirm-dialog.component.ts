import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: false,
  template: `
    <div class="dialog-container">
      <div class="dialog-icon" [class.success]="data.type === 'success'">
        <mat-icon>{{ data.icon || 'help_outline' }}</mat-icon>
      </div>
      <h2 class="dialog-title">{{ data.title }}</h2>
      <p class="dialog-message">{{ data.message }}</p>
      
      <div class="dialog-actions">
        @if (data.type !== 'success') {
          <button mat-stroked-button (click)="onCancel()" class="btn-cancel">
            {{ data.cancelText || 'Cancelar' }}
          </button>
        }
        <button mat-raised-button color="primary" (click)="onConfirm()" class="btn-confirm">
          {{ data.confirmText || 'Aceptar' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-container {
      padding: 32px 24px;
      text-align: center;
      background: var(--bg-card);
      color: var(--text-primary);
      border-radius: var(--radius-lg);
    }
    .dialog-icon {
      width: 64px;
      height: 64px;
      background: rgba(225, 29, 72, 0.1);
      color: #e11d48;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }
    .dialog-icon.success {
      background: rgba(22, 163, 74, 0.1);
      color: #16a34a;
    }
    .dialog-icon mat-icon {
      font-size: 36px;
      width: 36px;
      height: 36px;
    }
    .dialog-title {
      margin: 0 0 12px;
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-primary);
      letter-spacing: -0.5px;
    }
    .dialog-message {
      color: var(--text-secondary);
      margin-bottom: 32px;
      line-height: 1.6;
      font-size: 1.05rem;
    }
    .dialog-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;
    }
    .btn-cancel {
      font-weight: 700;
      color: var(--text-primary) !important;
      border-color: var(--border) !important;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      height: 48px;
      min-width: 130px;
    }
    .btn-cancel:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--brand) !important;
    }
    .btn-confirm {
      padding: 0 28px;
      font-weight: 700;
      border-radius: 12px;
      height: 48px;
      min-width: 140px;
      box-shadow: 0 4px 12px rgba(61, 111, 232, 0.2);
    }
  `]
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
