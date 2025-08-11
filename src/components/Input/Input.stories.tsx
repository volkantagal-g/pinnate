import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '../../theme/PinnateProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ padding: 40, background: '#fff', maxWidth: 800 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  args: {
    placeholder: 'Placeholder',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Overview: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 24 }}>
      <Input {...args} />
    </div>
  ),
};

