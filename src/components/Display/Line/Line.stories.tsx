import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { Line } from './Line';

const meta: Meta<typeof Line> = {
  title: 'Components/Display/Line',
  component: Line,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ padding: '20px', maxWidth: '400px' }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Line component for creating horizontal dividers with various styles and colors.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'dashed', 'dotted'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'muted', 'brand', 'error', 'success', 'warning', 'info'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Line>;

export const Default: Story = {
  args: {
    variant: 'solid',
    color: 'default',
    size: 'md',
  },
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
    color: 'default',
    size: 'md',
  },
};

export const Dotted: Story = {
  args: {
    variant: 'dotted',
    color: 'default',
    size: 'md',
  },
};

export const Brand: Story = {
  args: {
    variant: 'solid',
    color: 'brand',
    size: 'md',
  },
};

export const Error: Story = {
  args: {
    variant: 'solid',
    color: 'error',
    size: 'md',
  },
};

export const Success: Story = {
  args: {
    variant: 'solid',
    color: 'success',
    size: 'md',
  },
};

export const Warning: Story = {
  args: {
    variant: 'solid',
    color: 'warning',
    size: 'md',
  },
};

export const Info: Story = {
  args: {
    variant: 'solid',
    color: 'info',
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <div>
        <p>Small (1px)</p>
        <Line size="sm" />
      </div>
      <div>
        <p>Medium (2px)</p>
        <Line size="md" />
      </div>
      <div>
        <p>Large (3px)</p>
        <Line size="lg" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <div>
        <p>Solid</p>
        <Line variant="solid" />
      </div>
      <div>
        <p>Dashed</p>
        <Line variant="dashed" />
      </div>
      <div>
        <p>Dotted</p>
        <Line variant="dotted" />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <div>
        <p>Default</p>
        <Line color="default" />
      </div>
      <div>
        <p>Muted</p>
        <Line color="muted" />
      </div>
      <div>
        <p>Brand</p>
        <Line color="brand" />
      </div>
      <div>
        <p>Error</p>
        <Line color="error" />
      </div>
      <div>
        <p>Success</p>
        <Line color="success" />
      </div>
      <div>
        <p>Warning</p>
        <Line color="warning" />
      </div>
      <div>
        <p>Info</p>
        <Line color="info" />
      </div>
    </div>
  ),
};
