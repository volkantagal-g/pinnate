import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { PinnateProvider } from '../../../theme/PinnateProvider';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ padding: '20px' }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A generic Icon component that renders any icon from the icon collection with consistent props and styling.',
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [
        'Check',
        'Info',
        'Circle',
        'CircleDisable',
        'Dot',
        'CheckCircle',
        'InfoCircle',
        'WarningBold',
        'ErrorFill',
      ],
    },
    size: {
      control: { type: 'number', min: 8, max: 48, step: 2 },
    },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'Check',
    size: 16,
  },
};

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '20px',
      }}
    >
      {(
        [
          'Check',
          'Info',
          'Circle',
          'CircleDisable',
          'Dot',
          'CheckCircle',
          'InfoCircle',
          'WarningBold',
          'ErrorFill',
        ] as const
      ).map((iconName) => (
        <div
          key={iconName}
          style={{
            textAlign: 'center',
            padding: '16px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          <Icon name={iconName} size={24} />
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>{iconName}</div>
        </div>
      ))}
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Icon name="Check" size={14} />
      <Icon name="Check" size={16} />
      <Icon name="Check" size={20} />
      <Icon name="Check" size={24} />
      <Icon name="Check" size={32} />
    </div>
  ),
};

export const WithCustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Icon name="CheckCircle" size={24} style={{ color: '#10B981' }} />
      <Icon name="InfoCircle" size={24} style={{ color: '#3B82F6' }} />
      <Icon name="WarningBold" size={24} style={{ color: '#F59E0B' }} />
      <Icon name="ErrorFill" size={24} style={{ color: '#EF4444' }} />
    </div>
  ),
};
