import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { TextboxGroup } from './TextboxGroup';

const meta: Meta<typeof TextboxGroup> = {
  title: 'Components/Form/TextboxGroup',
  component: TextboxGroup,
  tags: ['autodocs'],
  args: {
    required: false,
    placeholder: 'Placeholder',
    tooltip: 'Hint text.',
    showInfo: true,
  },
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ padding: 40, background: '#fff', maxWidth: 800 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextboxGroup>;

export const Overview: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 24 }}>
      <TextboxGroup {...args} label='Label' />
      <TextboxGroup {...args} maxLength={200} required label='Required Label' />
      <TextboxGroup {...args} disabled label='Disabled Label' />
      <TextboxGroup {...args} error errorMessage="This is an error message." label='Error Label' />
      <TextboxGroup {...args} showInfo={false} label='No Info Label' />
    </div>
  ),
};

