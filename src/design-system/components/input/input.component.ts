import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ds-input',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule],
  template: `
    <mat-form-field appearance="outline" [class]="'w-full'">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [type]="type"
        [value]="value"
        (input)="onInputChange($event)"
        (blur)="onTouched()"
        [disabled]="disabled"
        [placeholder]="placeholder"
        [errorStateMatcher]="errorStateMatcher"
      />
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
        .mat-mdc-input-element {
          color: #0D47A1;
        }
        .mat-mdc-form-field-label {
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
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() hint = '';
  @Input() errors: ValidationErrors | null = null;
  value = '';
  disabled = false;

  protected onChange: any = () => {};
  private onTouched: any = () => {};

  errorStateMatcher = {
    isErrorState: () => this.errors !== null
  };

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onChange(input.value);
  }

  getErrorMessage(): string {
    if (!this.errors) return '';

    if (this.errors['required']) {
      return `${this.label} is required`;
    }
    if (this.errors['email']) {
      return 'Please enter a valid email address';
    }
    if (this.errors['minlength']) {
      return `${this.label} must be at least ${this.errors['minlength'].requiredLength} characters`;
    }
    if (this.errors['maxlength']) {
      return `${this.label} must be at most ${this.errors['maxlength'].requiredLength} characters`;
    }
    if (this.errors['pattern']) {
      return `${this.label} has an invalid format`;
    }

    return 'Invalid input';
  }

  writeValue(value: string): void {
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
