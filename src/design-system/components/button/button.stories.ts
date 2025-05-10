import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Design System/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
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

export const Outline: Story = {
  args: {
    variant: 'outline',
    disabled: false,
    type: 'button'
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled" [type]="type">Outline Button</ds-button>`
  })
};
