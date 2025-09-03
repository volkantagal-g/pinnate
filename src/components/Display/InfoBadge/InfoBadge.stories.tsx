import type { Meta, StoryObj } from '@storybook/react';
import { InfoBadge } from './InfoBadge';

const meta: Meta<typeof InfoBadge> = {
  title: 'Display/InfoBadge',
  component: InfoBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Badge içeriği',
    },
    className: {
      control: 'text',
      description: 'Ek CSS sınıfları',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Info',
  },
};

export const WithText: Story = {
  args: {
    children: 'New Feature',
  },
};

export const WithLongText: Story = {
  args: {
    children: 'Coming Soon',
  },
};
