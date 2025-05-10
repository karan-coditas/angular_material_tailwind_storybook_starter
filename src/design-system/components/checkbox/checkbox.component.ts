import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ds-checkbox',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  template: `
    <div [class]="'flex flex-col gap-1'">
      <mat-checkbox
        [checked]="value"
        (change)="onChange($event.checked)"
        (blur)="onTouched()"
        [disabled]="disabled"
        [class]="'text-[#0D47A1]'"
        [class.ng-invalid]="errors !== null"
      >
        {{ label }}
      </mat-checkbox>
      <span *ngIf="errors" [class]="'text-red-500 text-sm'">
        {{ getErrorMessage() }}
      </span>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() errors: ValidationErrors | null = null;
  value = false;
  disabled = false;

  protected onChange: any = () => {};
  protected onTouched: any = () => {};

  getErrorMessage(): string {
    if (!this.errors) return '';

    if (this.errors['required']) {
      return `${this.label} must be checked`;
    }

    return 'Invalid selection';
  }

  writeValue(value: boolean): void {
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
