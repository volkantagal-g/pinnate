import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
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
type Story = StoryObj<typeof Checkbox>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 24 }}>
        <Checkbox />
        <Checkbox checked />
        <Checkbox indeterminate />
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <Checkbox disabled />
        <Checkbox checked disabled />
        <Checkbox indeterminate disabled />
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <Checkbox error />
        <Checkbox checked error />
        <Checkbox indeterminate error checked />
      </div>
    </div>
  ),
};

