import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '../../theme/PinnateProvider';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: 'Badge' },
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Badge; boyutlar: sm (16), md (20), lg (24). Renkler palette üzerinden yönetilir ve değiştirildiğinde dot/check de güncellenir. Variant: filled | withDot | withCheck.',
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    size: { control: { type: 'radio' }, options: ['sm', 'md', 'lg'] },
    variant: { control: { type: 'radio' }, options: ['filled', 'withDot', 'withCheck'] },
    color: {
      control: { type: 'select' },
      options: ['gray', 'purple', 'getir', 'red', 'orange', 'green', 'yellow', 'riteg', 'blue', 'pink', 'teal'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const All: Story = {
  name: 'Overview',
  render: () => {
    const colors = ['gray','purple','getir','red','orange','green','yellow','riteg','blue','pink','teal'] as const;
    const variants = ['filled','withDot','withCheck'] as const;
    const sizes = ['sm','md','lg'] as const;
    return (
      <div style={{ display: 'grid', gap: 24 }}>
        {variants.map((v) => (
          <div key={v} style={{ display: 'grid', gap: 12 }}>
            <div style={{ fontWeight: 600 }}>{v}</div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {colors.map((c) => (
                <div key={c} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {sizes.map((s) => (
                    <Badge key={`${c}-${s}`} color={c} variant={v as any} size={s as any}>
                      Badge
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="lg" />
    </div>
  ),
};

export const WithDot: Story = {
  args: { variant: 'withDot' },
};

export const WithCheck: Story = {
  args: { variant: 'withCheck' },
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {(['gray','purple','getir','red','orange','green','yellow','riteg','blue','pink','teal'] as const).map((c) => (
        <Badge key={c} {...args} color={c}>
          Badge
        </Badge>
      ))}
    </div>
  ),
};

export const LightTone: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {(['gray','purple','getir','red','orange','green','yellow','riteg','blue','pink','teal'] as const).map((c) => (
          <Badge key={`l-${c}`} color={c} tone="light">
            Badge
          </Badge>
        ))}
      </div>
    </div>
  ),
};
