import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'ds-radio',
  standalone: true,
  imports: [CommonModule, MatRadioModule],
  template: `
    <div [class]="'flex flex-col gap-2'">
      <mat-radio-group
        [class]="'flex flex-col gap-2'"
        [value]="value"
        (change)="onChange($event.value)"
        (blur)="onTouched()"
        [class.ng-invalid]="errors !== null"
      >
        <mat-radio-button
          *ngFor="let option of options"
          [value]="option.value"
          [class]="'text-[#0D47A1]'"
        >
          {{ option.label }}
        </mat-radio-button>
      </mat-radio-group>
      <span *ngIf="errors" [class]="'text-red-500 text-sm'">
        {{ getErrorMessage() }}
      </span>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements ControlValueAccessor {
  @Input() options: { label: string; value: any }[] = [];
  @Input() errors: ValidationErrors | null = null;
  value: any;
  disabled = false;

  protected onChange: any = () => {};
  protected onTouched: any = () => {};

  getErrorMessage(): string {
    if (!this.errors) return '';

    if (this.errors['required']) {
      return 'Please select an option';
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