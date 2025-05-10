import type { Meta, StoryObj } from '@storybook/angular';
import { RadioComponent } from './radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Design System/Radio',
  component: RadioComponent,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options for radio buttons'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio group is disabled'
    },
    errors: {
      control: 'object',
      description: 'Validation errors object'
    }
  }
};

export default meta;
type Story = StoryObj<RadioComponent>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ],
    disabled: false,
    errors: null
  }
};

export const Disabled: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ],
    disabled: true,
    errors: null
  }
};

export const Required: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ],
    disabled: false,
    errors: { required: true }
  }
};
