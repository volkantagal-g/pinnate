import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ maxWidth: 420 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  args: {
    title: 'Label',
    placeholder: 'Select',
    options: Array.from({ length: 8 }).map((_, i) => ({ label: 'Label', value: String(i) })),
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Overview: Story = {
  render: (args) => <Select {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Empty: Story = {
  args: {
    options: [],
    emptyText: 'Nothing here',
  },
};

