import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
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
type Story = StoryObj<typeof Breadcrumb>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Breadcrumb items={[{ label: 'Link 1' }]} />
      <Breadcrumb items={[{ label: 'Link 1', href: '#' }, { label: 'Link 2' }]} />
      <Breadcrumb items={[{ label: 'Link 1', href: '#' }, { label: 'Link 1', href: '#' }, { label: 'Link 3' }]} />
      <Breadcrumb items={[{ label: 'Link 1', href: '#' }, { label: 'Link 2', href: '#' }, { label: 'Link 3', href: '#' }, { label: 'Link 4' }]} />
    </div>
  ),
};

