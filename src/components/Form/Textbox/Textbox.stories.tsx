import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { Textbox } from './Textbox';

const meta: Meta<typeof Textbox> = {
  title: 'Components/Form/Textbox',
  component: Textbox,
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
  args: { placeholder: 'Placeholder' },
};

export default meta;
type Story = StoryObj<typeof Textbox>;

export const Overview: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 24 }}>
      <Textbox {...args} title="Label" />
      <Textbox {...args} title="Label" maxLength={200} />
      <Textbox {...args} title="Label" disabled />
      <Textbox {...args} title="Label" error />
    </div>
  ),
};

