import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Design System/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      description: 'The visual style of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The HTML button type'
    }
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    type: 'button'
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled" [type]="type">Primary Button</ds-button>`
  })
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false,
    type: 'button'
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled" [type]="type">Secondary Button</ds-button>`
  })
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    disabled: false,
    type: 'button'
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled" [type]="type">Tertiary Button</ds-button>`
  })
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    disabled: false,
    type: 'button'
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled" [type]="type">Danger Button</ds-button>`
  })
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    type: 'button'
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="flex flex-wrap gap-4">
        <ds-button [variant]="'primary'" [disabled]="true">Primary</ds-button>
        <ds-button [variant]="'secondary'" [disabled]="true">Secondary</ds-button>
        <ds-button [variant]="'tertiary'" [disabled]="true">Tertiary</ds-button>
        <ds-button [variant]="'danger'" [disabled]="true">Danger</ds-button>
      </div>
    `
  })
};

export const Responsive: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    type: 'button'
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="flex flex-col sm:flex-row gap-4">
        <ds-button [variant]="'primary'">Primary</ds-button>
        <ds-button [variant]="'secondary'">Secondary</ds-button>
        <ds-button [variant]="'tertiary'">Tertiary</ds-button>
        <ds-button [variant]="'danger'">Danger</ds-button>
      </div>
    `
  })
};
