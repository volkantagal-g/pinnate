import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Form/CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  args: { label: 'Label', badge: 'Badge', hint: 'This is a hint text to help user.' },
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Overview: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16 }}>
      <CheckboxGroup {...args} />
      <CheckboxGroup {...args} checked />
      <CheckboxGroup {...args} indeterminate />
      <CheckboxGroup {...args} disabled />
      <CheckboxGroup {...args} error />
    </div>
  ),
};

