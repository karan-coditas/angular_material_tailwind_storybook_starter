import type { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';

const meta: Meta<SelectComponent> = {
  title: 'Design System/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the select field'
    },
    options: {
      control: 'object',
      description: 'Array of options for the select field'
    },
    hint: {
      control: 'text',
      description: 'Hint text shown below the select field'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select field is disabled'
    },
    errors: {
      control: 'object',
      description: 'Validation errors object'
    }
  }
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ],
    hint: 'Choose one option',
    disabled: false,
    errors: null
  }
};

export const Disabled: Story = {
  args: {
    label: 'Select an option',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ],
    hint: 'This field is disabled',
    disabled: true,
    errors: null
  }
};

export const Required: Story = {
  args: {
    label: 'Select an option',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ],
    hint: 'Please select an option',
    disabled: false,
    errors: { required: true }
  }
};
