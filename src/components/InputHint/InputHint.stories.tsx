import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '../../theme/PinnateProvider';
import { InputHint } from './InputHint';

const meta: Meta<typeof InputHint> = {
  title: 'Components/InputHint',
  component: InputHint,
  tags: ['autodocs'],
  args: { text: 'This is a hint text to help user.' },
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ display: 'grid', gap: 12 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Input altında kullanılan yardımcı metin. Tipler: info, success, warning, error, help.',
      },
    },
  },
  argTypes: {
    type: { control: { type: 'radio' }, options: ['info', 'success', 'warning', 'error', 'help', 'default'] },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof InputHint>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <InputHint text="This is a hint text to help user." type="info" />
      <InputHint text="This is a hint text to help user." type="success" />
      <InputHint text="This is a hint text to help user." type="warning" />
      <InputHint text="This is an error message." type="error" />
      <InputHint text="This is a hint text to help user." type="help" />
    </div>
  ),
};

