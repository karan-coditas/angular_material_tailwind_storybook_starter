import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ds-select',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
  template: `
    <mat-form-field appearance="outline" [class]="'w-full'">
      <mat-label>{{ label }}</mat-label>
      <mat-select
        [value]="value"
        (selectionChange)="onChange($event.value)"
        (blur)="onTouched()"
        [disabled]="disabled"
        [errorStateMatcher]="errorStateMatcher"
      >
        <mat-option *ngFor="let option of options" [value]="option.value">
          {{ option.label }}
        </mat-option>
      </mat-select>
      <mat-hint *ngIf="hint && !errors">{{ hint }}</mat-hint>
      <mat-error *ngIf="errors">
        {{ getErrorMessage() }}
      </mat-error>
    </mat-form-field>
  `,
  styles: [`
    ::ng-deep {
      .mat-mdc-form-field {
        .mat-mdc-form-field-flex {
          background-color: white;
        }
        .mat-mdc-form-field-outline {
          color: #0D47A1;
        }
        .mat-mdc-select-value-text {
          color: #0D47A1;
        }
        .mat-mdc-select-arrow {
          color: #0D47A1;
        }
        &.ng-invalid.ng-touched {
          .mat-mdc-form-field-outline {
            color: #f44336;
          }
        }
      }
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() options: { label: string; value: any }[] = [];
  @Input() hint = '';
  @Input() errors: ValidationErrors | null = null;
  value: any;
  disabled = false;

  protected onChange: any = () => {};
  protected onTouched: any = () => {};

  errorStateMatcher = {
    isErrorState: () => this.errors !== null
  };

  getErrorMessage(): string {
    if (!this.errors) return '';

    if (this.errors['required']) {
      return `${this.label} is required`;
    }

    return 'Invalid selection';
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
