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
    <>
      <div style={{ display: 'grid' }}>
        <b style={{ fontSize: 14, fontWeight: 600, color: '#000',marginBottom: 8 }}>Default</b>
        <Input {...args} />
      </div>
      <div style={{ display: 'grid', marginTop: 24 }}>
        <b style={{ fontSize: 14, fontWeight: 600, color: '#000',marginBottom: 8 }}>Disabled</b>
        <Input {...args} disabled />
      </div>
      <div style={{ display: 'grid', marginTop: 24 }}>
        <b style={{ fontSize: 14, fontWeight: 600, color: '#000',marginBottom: 8 }}>Error</b>
        <Input {...args} error />
      </div>
    </>
  ),
};

