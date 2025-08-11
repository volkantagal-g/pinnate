import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '../../theme/PinnateProvider';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
  },
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ display: 'grid', gap: 24 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Switch; boyutlar: sm (32x20), md (44x24). Metinler üst hizalı bir konteynerde. Arka plan ve thumb iki yönlü animasyonludur.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    hint: { control: 'text' },
    size: { control: { type: 'radio' }, options: ['sm', 'md'] },
    badge: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const All: Story = {
  name: 'Overview',
  render: (args) => (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 24 }}>
        <Switch {...args} size="sm" />
        <Switch {...args} size="md" />
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <Switch {...args} size="sm" defaultChecked />
        <Switch {...args} size="md" defaultChecked />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Switch {...args} size="sm" />
      <Switch {...args} size="md" />
    </div>
  ),
};

export const Badge: Story = {
  args: { badge: 'Badge' },
};

export const Checked: Story = {
  args: { defaultChecked: true },
};
