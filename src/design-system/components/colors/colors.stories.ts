import type { Meta, StoryObj } from '@storybook/angular';
import { ColorsComponent } from './colors.component';

const meta: Meta<ColorsComponent> = {
  title: 'Design System/Colors',
  component: ColorsComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Colors

The color system provides a consistent set of colors for use throughout the application.

## Usage

\`\`\`typescript
import { ColorsComponent } from './colors.component';

@Component({
  selector: 'app-example',
  template: \`
    <ds-colors></ds-colors>
  \`
})
export class ExampleComponent {}
\`\`\`

## Color Palette

The design system includes the following color categories:

### Primary Colors
- Primary (#0D47A1) - Main brand color, primary actions
- Primary Light (#1976D2) - Hover states, secondary elements
- Primary Lighter (#2196F3) - Accent elements, highlights

### Secondary Colors
- Secondary (#424242) - Secondary actions, supporting elements
- Secondary Light (#616161) - Hover states for secondary elements
- Secondary Lighter (#757575) - Disabled states, subtle elements

### Semantic Colors
- Success (#4CAF50) - Success states, positive feedback
- Error (#F44336) - Error states, negative feedback
- Warning (#FFC107) - Warning states, cautionary feedback
- Info (#2196F3) - Information states, neutral feedback

### Neutral Colors
- White (#FFFFFF) - Background, text on dark surfaces
- Gray 100 (#F5F5F5) - Light backgrounds, borders
- Gray 200 (#EEEEEE) - Dividers, subtle backgrounds
- Gray 300 (#E0E0E0) - Disabled states, borders
- Gray 400 (#BDBDBD) - Placeholder text, icons
- Gray 500 (#9E9E9E) - Secondary text, icons
- Gray 600 (#757575) - Body text, icons
- Gray 700 (#616161) - Headings, emphasis
- Gray 800 (#424242) - Strong emphasis, dark mode text
- Gray 900 (#212121) - Primary text, dark mode headings
- Black (#000000) - Strong emphasis, dark mode elements

## Using Colors in Tailwind

You can use these colors in your components using Tailwind's text color and background color utilities:

\`\`\`html
<!-- Text colors -->
<p class="text-[#0D47A1]">Primary text</p>
<p class="text-[#F44336]">Error text</p>

<!-- Background colors -->
<div class="bg-[#4CAF50]">Success background</div>
<div class="bg-[#FFC107]">Warning background</div>
\`\`\`

## Color Usage Guidelines

1. **Primary Colors**
   - Use for main brand elements
   - Primary actions and buttons
   - Important UI elements

2. **Secondary Colors**
   - Use for secondary actions
   - Supporting UI elements
   - Less prominent features

3. **Semantic Colors**
   - Use consistently for their intended purposes
   - Success: Positive actions and states
   - Error: Negative actions and states
   - Warning: Cautionary messages
   - Info: Neutral information

4. **Neutral Colors**
   - Use for text and backgrounds
   - Create visual hierarchy
   - Maintain readability
   - Support dark mode implementations
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<ColorsComponent>;

export const Default: Story = {
  args: {}
};
