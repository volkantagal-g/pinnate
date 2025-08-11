const Tile = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
  <div style={{ display: 'grid', gap: 8, width: 200, marginBottom: 64 }}>
    <div style={{ fontWeight: 600, color: '#000', lineHeight: 1 }}>{title}</div>
    <div style={{ fontSize: 12, color: '#333' }}>{description}</div>
    {children}
  </div>
);
import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '../../theme/PinnateProvider';
import { InfoTooltip } from './InfoTooltip';

const meta: Meta<typeof InfoTooltip> = {
  title: 'Components/InfoTooltip',
  component: InfoTooltip,
  tags: ['autodocs'],
  args: {
    title: 'Insert tooltip',
    content: 'Insert tooltip description here. It would look much better as three lines of text.',
    placement: 'top',
    scheme: 'light',
  },
  decorators: [
    (Story, ctx) => (
      <PinnateProvider>
        <div style={{ padding: 40, background: ctx.args?.scheme === 'dark' ? '#0C0E12' : '#F5F5F5' }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InfoTooltip>;

export const Overview: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))' }}>
      <Tile title="Top Start" description="Arrow near start; anchored above icon">
        <InfoTooltip {...args} placement="top-start" />
      </Tile>
      <Tile title="Top" description="Centered above icon">
        <InfoTooltip {...args} placement="top" />
      </Tile>
      <Tile title="Top End" description="Arrow near end; anchored above icon">
        <InfoTooltip {...args} placement="top-end" />
      </Tile>

      <Tile title="Right Start" description="Right side, start aligned">
        <InfoTooltip {...args} placement="right-start" />
      </Tile>
      <Tile title="Right" description="Right side, centered">
        <InfoTooltip {...args} placement="right" />
      </Tile>
      <Tile title="Right End" description="Right side, end aligned">
        <InfoTooltip {...args} placement="right-end" />
      </Tile>

      <Tile title="Bottom Start" description="Below icon, start aligned">
        <InfoTooltip {...args} placement="bottom-start" />
      </Tile>
      <Tile title="Bottom" description="Below icon, centered">
        <InfoTooltip {...args} placement="bottom" />
      </Tile>
      <Tile title="Bottom End" description="Below icon, end aligned">
        <InfoTooltip {...args} placement="bottom-end" />
      </Tile>

      <Tile title="Left Start" description="Left side, start aligned">
        <InfoTooltip {...args} placement="left-start" />
      </Tile>
      <Tile title="Left" description="Left side, centered">
        <InfoTooltip {...args} placement="left" />
      </Tile>
      <Tile title="Left End" description="Left side, end aligned">
        <InfoTooltip {...args} placement="left-end" />
      </Tile>
    </div>
  ),
};

