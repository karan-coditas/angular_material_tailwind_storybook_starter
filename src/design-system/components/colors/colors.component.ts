import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ColorSwatch {
  name: string;
  hex: string;
  usage: string;
}

@Component({
  selector: 'ds-colors',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <!-- Primary Colors -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-[#0D47A1]">Primary Colors</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div *ngFor="let color of primaryColors" class="p-4 rounded-lg border border-gray-200">
            <div class="h-24 rounded-md mb-2" [style.background-color]="color.hex"></div>
            <h3 class="font-medium text-[#0D47A1]">{{ color.name }}</h3>
            <p class="text-sm text-gray-600">{{ color.hex }}</p>
            <p class="text-sm text-gray-600">{{ color.usage }}</p>
          </div>
        </div>
      </div>

      <!-- Secondary Colors -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-[#0D47A1]">Secondary Colors</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div *ngFor="let color of secondaryColors" class="p-4 rounded-lg border border-gray-200">
            <div class="h-24 rounded-md mb-2" [style.background-color]="color.hex"></div>
            <h3 class="font-medium text-[#0D47A1]">{{ color.name }}</h3>
            <p class="text-sm text-gray-600">{{ color.hex }}</p>
            <p class="text-sm text-gray-600">{{ color.usage }}</p>
          </div>
        </div>
      </div>

      <!-- Semantic Colors -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-[#0D47A1]">Semantic Colors</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div *ngFor="let color of semanticColors" class="p-4 rounded-lg border border-gray-200">
            <div class="h-24 rounded-md mb-2" [style.background-color]="color.hex"></div>
            <h3 class="font-medium text-[#0D47A1]">{{ color.name }}</h3>
            <p class="text-sm text-gray-600">{{ color.hex }}</p>
            <p class="text-sm text-gray-600">{{ color.usage }}</p>
          </div>
        </div>
      </div>

      <!-- Neutral Colors -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-[#0D47A1]">Neutral Colors</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div *ngFor="let color of neutralColors" class="p-4 rounded-lg border border-gray-200">
            <div class="h-24 rounded-md mb-2" [style.background-color]="color.hex"></div>
            <h3 class="font-medium text-[#0D47A1]">{{ color.name }}</h3>
            <p class="text-sm text-gray-600">{{ color.hex }}</p>
            <p class="text-sm text-gray-600">{{ color.usage }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ColorsComponent {
  primaryColors: ColorSwatch[] = [
    {
      name: 'Primary',
      hex: '#0D47A1',
      usage: 'Main brand color, primary actions'
    },
    {
      name: 'Primary Light',
      hex: '#1976D2',
      usage: 'Hover states, secondary elements'
    },
    {
      name: 'Primary Lighter',
      hex: '#2196F3',
      usage: 'Accent elements, highlights'
    }
  ];

  secondaryColors: ColorSwatch[] = [
    {
      name: 'Secondary',
      hex: '#424242',
      usage: 'Secondary actions, supporting elements'
    },
    {
      name: 'Secondary Light',
      hex: '#616161',
      usage: 'Hover states for secondary elements'
    },
    {
      name: 'Secondary Lighter',
      hex: '#757575',
      usage: 'Disabled states, subtle elements'
    }
  ];

  semanticColors: ColorSwatch[] = [
    {
      name: 'Success',
      hex: '#4CAF50',
      usage: 'Success states, positive feedback'
    },
    {
      name: 'Error',
      hex: '#F44336',
      usage: 'Error states, negative feedback'
    },
    {
      name: 'Warning',
      hex: '#FFC107',
      usage: 'Warning states, cautionary feedback'
    },
    {
      name: 'Info',
      hex: '#2196F3',
      usage: 'Information states, neutral feedback'
    }
  ];

  neutralColors: ColorSwatch[] = [
    {
      name: 'White',
      hex: '#FFFFFF',
      usage: 'Background, text on dark surfaces'
    },
    {
      name: 'Gray 100',
      hex: '#F5F5F5',
      usage: 'Light backgrounds, borders'
    },
    {
      name: 'Gray 200',
      hex: '#EEEEEE',
      usage: 'Dividers, subtle backgrounds'
    },
    {
      name: 'Gray 300',
      hex: '#E0E0E0',
      usage: 'Disabled states, borders'
    },
    {
      name: 'Gray 400',
      hex: '#BDBDBD',
      usage: 'Placeholder text, icons'
    },
    {
      name: 'Gray 500',
      hex: '#9E9E9E',
      usage: 'Secondary text, icons'
    },
    {
      name: 'Gray 600',
      hex: '#757575',
      usage: 'Body text, icons'
    },
    {
      name: 'Gray 700',
      hex: '#616161',
      usage: 'Headings, emphasis'
    },
    {
      name: 'Gray 800',
      hex: '#424242',
      usage: 'Strong emphasis, dark mode text'
    },
    {
      name: 'Gray 900',
      hex: '#212121',
      usage: 'Primary text, dark mode headings'
    },
    {
      name: 'Black',
      hex: '#000000',
      usage: 'Strong emphasis, dark mode elements'
    }
  ];
}
