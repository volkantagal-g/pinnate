import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '../../theme/PinnateProvider';
import { InputGroup } from './InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    tooltip: 'Additional info about this field.'
  },
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ padding: 40, background: '#fff', maxWidth: 900 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Overview: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 24 }}>
      <InputGroup hint='This is a hint text to help user.' {...args} />
      <InputGroup {...args} error errorMessage="This is an error message." />
      <InputGroup hint='This is a hint text to help user.' {...args} disabled />
    </div>
  ),
};

