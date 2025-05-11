import type { Meta, StoryObj } from '@storybook/angular';
import { TypographyComponent } from './typography.component';

const meta: Meta<TypographyComponent> = {
  title: 'Design System/Typography',
  component: TypographyComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Typography

The typography system provides a consistent set of text styles for use throughout the application.

## Usage

\`\`\`typescript
import { TypographyComponent } from './typography.component';

@Component({
  selector: 'app-example',
  template: \`
    <ds-typography></ds-typography>
  \`
})
export class ExampleComponent {}
\`\`\`

## Text Styles

The design system includes the following text styles:

### Headings
- Heading 1 (text-4xl)
- Heading 2 (text-3xl)
- Heading 3 (text-2xl)
- Heading 4 (text-xl)
- Heading 5 (text-lg)
- Heading 6 (text-base)

### Body Text
- Base (text-base)
- Small (text-sm)
- Extra Small (text-xs)

### Font Weights
- Bold (font-bold)
- Semibold (font-semibold)
- Medium (font-medium)
- Normal (font-normal)
- Light (font-light)

### Text Colors
- Primary (#0D47A1)
- Secondary (#1976D2)
- Accent (#2196F3)
- Error (#F44336)
- Success (#4CAF50)
- Warning (#FFC107)

### Text Alignment
- Left (text-left)
- Center (text-center)
- Right (text-right)

### Text Decoration
- Underline (underline)
- Strikethrough (line-through)
- Italic (italic)

## Tailwind Classes

All typography styles are implemented using Tailwind CSS classes. You can use these classes directly in your components:

\`\`\`html
<h1 class="text-4xl font-bold text-[#0D47A1]">Heading 1</h1>
<p class="text-base text-[#0D47A1]">Body Text</p>
<span class="text-sm font-medium text-[#1976D2]">Small Text</span>
\`\`\`
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<TypographyComponent>;

export const Default: Story = {
  args: {}
};
