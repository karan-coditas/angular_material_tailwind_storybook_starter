import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <button
      mat-raised-button
      [class]="getButtonClasses()"
      [disabled]="disabled"
      [type]="type"
    >
      <span class="flex items-center justify-center gap-2">
        <ng-content></ng-content>
      </span>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    ::ng-deep .mat-mdc-button {
      min-width: 80px;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'danger' = 'primary';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  getButtonClasses(): string {
    const baseClasses = 'font-medium rounded transition-all duration-200 ease-in-out px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
      primary: 'bg-[#0D47A1] text-white hover:bg-[#1565C0] focus:ring-[#0D47A1]',
      secondary: 'bg-[#E3F2FD] text-[#0D47A1] hover:bg-[#BBDEFB] focus:ring-[#0D47A1]',
      tertiary: 'border-2 border-[#0D47A1] text-[#0D47A1] hover:bg-[#E3F2FD] focus:ring-[#0D47A1]',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };

    const disabledClasses = this.disabled
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : '';

    return `${baseClasses} ${variantClasses[this.variant]} ${disabledClasses}`;
  }
}
