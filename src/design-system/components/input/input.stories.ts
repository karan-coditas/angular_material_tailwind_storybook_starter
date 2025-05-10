import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Design System/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the input field'
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Type of input field'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field'
    },
    hint: {
      control: 'text',
      description: 'Hint text shown below the input field'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input field is disabled'
    },
    errors: {
      control: 'object',
      description: 'Validation errors object'
    }
  }
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    label: 'Input Label',
    type: 'text',
    placeholder: 'Enter text here',
    hint: 'This is a hint text',
    disabled: false,
    errors: null
  }
};

export const Email: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
    hint: 'We will never share your email',
    disabled: false,
    errors: null
  }
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    hint: 'Must be at least 8 characters',
    disabled: false,
    errors: null
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    type: 'text',
    placeholder: 'This input is disabled',
    hint: 'This field cannot be edited',
    disabled: true,
    errors: null
  }
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    type: 'text',
    placeholder: 'This field is required',
    hint: 'Please fill in this field',
    disabled: false,
    errors: { required: true }
  }
};

export const InvalidEmail: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
    hint: 'We will never share your email',
    disabled: false,
    errors: { email: true }
  }
};

export const TooShort: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    hint: 'Must be at least 8 characters',
    disabled: false,
    errors: { minlength: { requiredLength: 8, actualLength: 3 } }
  }
};
