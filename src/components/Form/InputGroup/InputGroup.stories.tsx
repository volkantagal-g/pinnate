import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { InputGroup } from './InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/Form/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  args: {
    placeholder: 'Placeholder',
    tooltip: 'Additional info about this field.',
    showInfo: true,
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
      <InputGroup hint='This is a hint text to help user.' {...args} label='Label' />
      <InputGroup hint='This is a hint text to help user.' {...args} required label='Required Label' />
      <InputGroup {...args} error errorMessage="This is an error message." label='Error Label' />
      <InputGroup hint='This is a hint text to help user.' {...args} disabled label='Disabled Label' />
      <InputGroup {...args} showInfo={false} label='No Info Label' />
    </div>
  ),
};

