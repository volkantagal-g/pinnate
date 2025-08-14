import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { PinnateProvider } from '../../theme/PinnateProvider';

interface ModalDemoProps {
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
}

const ModalDemo = ({ ...props }: ModalDemoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const footerActions = (
    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', width: '100%' }}>
      <Button label="Cancel" variant="secondary" onClick={() => setIsOpen(false)} />
      <Button label="Confirm" onClick={() => setIsOpen(false)} />
    </div>
  );

  return (
    <div>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        footerActions={footerActions}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>
            This is a modal with {props.size || 'md'} size and {props.variant || 'default'} variant.
          </p>
          <p>You can put any content here in the slot area!</p>
          <p>The content area has proper padding and spacing as per the design specification.</p>
        </div>
      </Modal>
    </div>
  );
};

const meta: Meta<typeof ModalDemo> = {
  title: 'Components/Modal',
  component: ModalDemo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ padding: '20px' }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A modal component with Header, Slot (content), and Footer sections. Supports different sizes, variants, and footer actions. Follows the design specification with exact dimensions and spacing.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'error'],
    },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ModalDemo>;

export const Default: Story = {
  args: {
    title: 'Default Modal',
    size: 'md',
    variant: 'default',
  },
};

export const Small: Story = {
  args: {
    title: 'Small Modal',
    size: 'sm',
    variant: 'default',
  },
};

export const Large: Story = {
  args: {
    title: 'Large Modal',
    size: 'lg',
    variant: 'default',
  },
};

export const Success: Story = {
  args: {
    title: 'Success Modal',
    size: 'md',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning Modal',
    size: 'md',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    title: 'Error Modal',
    size: 'md',
    variant: 'error',
  },
};

export const NoTitle: Story = {
  args: {
    size: 'md',
    variant: 'default',
  },
};

export const WithFooterActions: Story = {
  args: {
    title: 'Modal with Footer Actions',
    size: 'md',
    variant: 'default',
  },
};
