import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-typography',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8">
      <!-- Headings -->
      <div class="space-y-4">
        <h1 class="text-4xl font-bold text-[#0D47A1]">Heading 1 (text-4xl)</h1>
        <h2 class="text-3xl font-semibold text-[#0D47A1]">Heading 2 (text-3xl)</h2>
        <h3 class="text-2xl font-semibold text-[#0D47A1]">Heading 3 (text-2xl)</h3>
        <h4 class="text-xl font-medium text-[#0D47A1]">Heading 4 (text-xl)</h4>
        <h5 class="text-lg font-medium text-[#0D47A1]">Heading 5 (text-lg)</h5>
        <h6 class="text-base font-medium text-[#0D47A1]">Heading 6 (text-base)</h6>
      </div>

      <!-- Body Text -->
      <div class="space-y-4">
        <p class="text-base text-[#0D47A1]">Body Text (text-base)</p>
        <p class="text-sm text-[#0D47A1]">Small Text (text-sm)</p>
        <p class="text-xs text-[#0D47A1]">Extra Small Text (text-xs)</p>
      </div>

      <!-- Text Styles -->
      <div class="space-y-4">
        <p class="text-base font-bold text-[#0D47A1]">Bold Text</p>
        <p class="text-base font-semibold text-[#0D47A1]">Semibold Text</p>
        <p class="text-base font-medium text-[#0D47A1]">Medium Text</p>
        <p class="text-base font-normal text-[#0D47A1]">Normal Text</p>
        <p class="text-base font-light text-[#0D47A1]">Light Text</p>
      </div>

      <!-- Text Colors -->
      <div class="space-y-4">
        <p class="text-base text-[#0D47A1]">Primary Text Color</p>
        <p class="text-base text-[#1976D2]">Secondary Text Color</p>
        <p class="text-base text-[#2196F3]">Accent Text Color</p>
        <p class="text-base text-[#F44336]">Error Text Color</p>
        <p class="text-base text-[#4CAF50]">Success Text Color</p>
        <p class="text-base text-[#FFC107]">Warning Text Color</p>
      </div>

      <!-- Text Alignment -->
      <div class="space-y-4">
        <p class="text-base text-left text-[#0D47A1]">Left Aligned Text</p>
        <p class="text-base text-center text-[#0D47A1]">Center Aligned Text</p>
        <p class="text-base text-right text-[#0D47A1]">Right Aligned Text</p>
      </div>

      <!-- Text Decoration -->
      <div class="space-y-4">
        <p class="text-base underline text-[#0D47A1]">Underlined Text</p>
        <p class="text-base line-through text-[#0D47A1]">Strikethrough Text</p>
        <p class="text-base italic text-[#0D47A1]">Italic Text</p>
      </div>
    </div>
  `
})
export class TypographyComponent {}