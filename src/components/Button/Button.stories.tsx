import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PinnateProvider } from '../../theme/PinnateProvider';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Click me',
  },
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ display: 'flex', gap: 16 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Button; varyantlar: primary, secondary, danger, ghost. Boyutlar: sm, md, lg. loading/disabled ve icon destekleri mevcut.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: { control: { type: 'radio' }, options: ['primary', 'secondary', 'danger', 'ghost'] },
    size: { control: { type: 'radio' }, options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const All: Story = {
  name: 'Overview',
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button label="Primary" variant="primary" size="sm" />
        <Button label="Primary" variant="primary" size="md" />
        <Button label="Primary" variant="primary" size="lg" />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button label="Secondary" variant="secondary" size="sm" />
        <Button label="Secondary" variant="secondary" size="md" />
        <Button label="Secondary" variant="secondary" size="lg" />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button label="Danger" variant="danger" size="sm" />
        <Button label="Danger" variant="danger" size="md" />
        <Button label="Danger" variant="danger" size="lg" />
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button label="Ghost" variant="ghost" size="sm" />
        <Button label="Ghost" variant="ghost" size="md" />
        <Button label="Ghost" variant="ghost" size="lg" />
      </div>
    </div>
  ),
};

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Danger: Story = {
  args: { variant: 'danger', label: 'Delete' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', label: 'Ghost' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button {...args} size="sm" label="SM" />
      <Button {...args} size="md" label="MD" />
      <Button {...args} size="lg" label="LG" />
    </div>
  ),
  args: { variant: 'primary' },
};

export const Loading: Story = {
  args: { variant: 'primary', loading: true },
};
