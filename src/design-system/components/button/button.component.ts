import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <button
      mat-button
      [class]="variant"
      [disabled]="disabled"
      [type]="type"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    button {
      font-family: var(--font-family-primary);
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-medium);
      padding: var(--spacing-2) var(--spacing-4);
      border-radius: var(--spacing-1);
      transition: all 0.2s ease-in-out;
    }

    .primary {
      background-color: var(--color-primary-500);
      color: white;
    }

    .primary:hover {
      background-color: var(--color-primary-600);
    }

    .secondary {
      background-color: var(--color-neutral-200);
      color: var(--color-neutral-900);
    }

    .secondary:hover {
      background-color: var(--color-neutral-300);
    }

    .outline {
      border: 1px solid var(--color-primary-500);
      color: var(--color-primary-500);
      background-color: transparent;
    }

    .outline:hover {
      background-color: var(--color-primary-50);
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
