import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { SelectGroup } from './SelectGroup';

const meta: Meta<typeof SelectGroup> = {
  title: 'Components/Form/SelectGroup',
  component: SelectGroup,
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
    label: 'Label',
    required: true,
    tooltip: 'Helper info',
    showInfo: true,
    placeholder: 'Select',
    options: Array.from({ length: 5 }).map((_, i) => ({ label: `Option ${i+1}`, value: String(i+1) })),
    id: 'sg1'
  },
};

export default meta;
type Story = StoryObj<typeof SelectGroup>;

export const Overview: Story = {
  render: (args) => <SelectGroup {...args} />,
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Error: Story = {
  args: { error: true, errorMessage: 'This field is required' },
};

