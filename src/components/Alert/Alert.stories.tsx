import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { PinnateProvider } from '../../theme/PinnateProvider';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <Story />
      </PinnateProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['purple', 'info', 'error', 'warning', 'success'],
    },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple alerts (single line)
export const SimplePurple: Story = {
  args: {
    variant: 'purple',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [{ label: 'Button', onClick: () => console.log('Button clicked') }],
  },
};

export const SimpleInfo: Story = {
  args: {
    variant: 'info',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [{ label: 'Button', onClick: () => console.log('Button clicked') }],
  },
};

export const SimpleError: Story = {
  args: {
    variant: 'error',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [{ label: 'Button', onClick: () => console.log('Button clicked') }],
  },
};

export const SimpleWarning: Story = {
  args: {
    variant: 'warning',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [{ label: 'Button', onClick: () => console.log('Button clicked') }],
  },
};

export const SimpleSuccess: Story = {
  args: {
    variant: 'success',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [{ label: 'Button', onClick: () => console.log('Button clicked') }],
  },
};

// Complex alerts (with title)
export const ComplexPurple: Story = {
  args: {
    variant: 'purple',
    title: 'Lorem ipsum dolor sit amet.',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [
      { label: 'Button', onClick: () => console.log('Button 1 clicked') },
      { label: 'Button', onClick: () => console.log('Button 2 clicked') },
    ],
  },
};

export const ComplexInfo: Story = {
  args: {
    variant: 'info',
    title: 'Lorem ipsum dolor sit amet.',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [
      { label: 'Button', onClick: () => console.log('Button 1 clicked') },
      { label: 'Button', onClick: () => console.log('Button 2 clicked') },
    ],
  },
};

export const ComplexError: Story = {
  args: {
    variant: 'error',
    title: 'Lorem ipsum dolor sit amet.',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [
      { label: 'Button', onClick: () => console.log('Button 1 clicked') },
      { label: 'Button', onClick: () => console.log('Button 2 clicked') },
    ],
  },
};

export const ComplexWarning: Story = {
  args: {
    variant: 'warning',
    title: 'Lorem ipsum dolor sit amet.',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [
      { label: 'Button', onClick: () => console.log('Button 1 clicked') },
      { label: 'Button', onClick: () => console.log('Button 2 clicked') },
    ],
  },
};

export const ComplexSuccess: Story = {
  args: {
    variant: 'success',
    title: 'Lorem ipsum dolor sit amet.',
    children: 'Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
    onClose: () => console.log('Closed'),
    actions: [
      { label: 'Button', onClick: () => console.log('Button 1 clicked') },
      { label: 'Button', onClick: () => console.log('Button 2 clicked') },
    ],
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="purple" onClose={() => console.log('Closed')}>
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>

      <Alert variant="info" onClose={() => console.log('Closed')}>
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>

      <Alert variant="error" onClose={() => console.log('Closed')}>
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>

      <Alert variant="warning" onClose={() => console.log('Closed')}>
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>

      <Alert variant="success" onClose={() => console.log('Closed')}>
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>
    </div>
  ),
};

// All complex variants showcase
export const AllComplexVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert
        variant="purple"
        title="Lorem ipsum dolor sit amet."
        onClose={() => console.log('Closed')}
        actions={[
          { label: 'Button', onClick: () => console.log('Button 1 clicked') },
          { label: 'Button', onClick: () => console.log('Button 2 clicked') },
        ]}
      >
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>

      <Alert
        variant="info"
        title="Lorem ipsum dolor sit amet."
        onClose={() => console.log('Closed')}
        actions={[
          { label: 'Button', onClick: () => console.log('Button 1 clicked') },
          { label: 'Button', onClick: () => console.log('Button 2 clicked') },
        ]}
      >
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>

      <Alert
        variant="error"
        title="Lorem ipsum dolor sit amet."
        onClose={() => console.log('Closed')}
        actions={[
          { label: 'Button', onClick: () => console.log('Button 1 clicked') },
          { label: 'Button', onClick: () => console.log('Button 2 clicked') },
        ]}
      >
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>

      <Alert
        variant="warning"
        title="Lorem ipsum dolor sit amet."
        onClose={() => console.log('Closed')}
        actions={[
          { label: 'Button', onClick: () => console.log('Button 1 clicked') },
          { label: 'Button', onClick: () => console.log('Button 2 clicked') },
        ]}
      >
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>

      <Alert
        variant="success"
        title="Lorem ipsum dolor sit amet."
        onClose={() => console.log('Closed')}
        actions={[
          { label: 'Button', onClick: () => console.log('Button 1 clicked') },
          { label: 'Button', onClick: () => console.log('Button 2 clicked') },
        ]}
      >
        Consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.
      </Alert>
    </div>
  ),
};

// Interactive example
const InteractiveComponent = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) {
    return <button onClick={() => setIsVisible(true)}>Show Alert</button>;
  }

  return (
    <Alert
      variant="info"
      title="Interactive Alert"
      onClose={() => setIsVisible(false)}
      actions={[
        { label: 'Dismiss', onClick: () => setIsVisible(false) },
        { label: 'Action', onClick: () => console.log('Action clicked') },
      ]}
    >
      This is an interactive alert that can be closed. Try clicking the close button or action
      buttons.
    </Alert>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveComponent />,
};
