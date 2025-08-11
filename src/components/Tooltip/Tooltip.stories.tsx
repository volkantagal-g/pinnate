import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '../../theme/PinnateProvider';
import { Tooltip } from './Tooltip';

const Tile = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
  <div style={{ display: 'grid', gap: 8, width: 320 }}>
    <div style={{ fontWeight: 600 }}>{title}</div>
    <div style={{ fontSize: 12, color: '#6B6B6B' }}>{description}</div>
    {children}
  </div>
);

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    title: 'Insert tooltip',
    content: 'Insert tooltip description here. It would look much better as three lines of text.',
    placement: 'top',
    scheme: 'dark',
  },
  decorators: [
    (Story, ctx) => (
      <PinnateProvider>
        <div
          style={{
            padding: 40,
            background: ctx.args?.scheme === 'light' ? '#0C0E12' : '#F5F5F5',
          }}
        >
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Overview: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(3, minmax(320px, 1fr))' }}>
      <Tile title="Top Start" description="Arrow aligned near the start edge on top">
        <Tooltip {...args} placement="top-start" />
      </Tile>
      <Tile title="Top" description="Arrow centered on top">
        <Tooltip {...args} placement="top" />
      </Tile>
      <Tile title="Top End" description="Arrow aligned near the end edge on top">
        <Tooltip {...args} placement="top-end" />
      </Tile>
      <Tile title="Right Start" description="Arrow aligned to start on right side">
        <Tooltip {...args} placement="right-start" />
      </Tile>
      <Tile title="Right" description="Arrow centered on right">
        <Tooltip {...args} placement="right" />
      </Tile>
      <Tile title="Right End" description="Arrow aligned to end on right side">
        <Tooltip {...args} placement="right-end" />
      </Tile>
      <Tile title="Bottom Start" description="Arrow aligned near the start edge at bottom">
        <Tooltip {...args} placement="bottom-start" />
      </Tile>
      <Tile title="Bottom" description="Arrow centered at bottom">
        <Tooltip {...args} placement="bottom" />
      </Tile>
      <Tile title="Bottom End" description="Arrow aligned near the end edge at bottom">
        <Tooltip {...args} placement="bottom-end" />
      </Tile>
      <Tile title="Left Start" description="Arrow aligned to start on left side">
        <Tooltip {...args} placement="left-start" />
      </Tile>
      <Tile title="Left" description="Arrow centered on left">
        <Tooltip {...args} placement="left" />
      </Tile>
      <Tile title="Left End" description="Arrow aligned to end on left side">
        <Tooltip {...args} placement="left-end" />
      </Tile>
    </div>
  ),
};

export const DarkScheme: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(3, 1fr)', background: '#F5F5F5' }}>
      <Tooltip {...args} scheme="dark" placement="top" />
      <Tooltip {...args} scheme="dark" placement="right" />
      <Tooltip {...args} scheme="dark" placement="bottom" />
      <Tooltip {...args} scheme="dark" placement="left" />
    </div>
  ),
};

export const LightScheme: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(3, 1fr)', background: '#F5F5F5' }}>
      <Tooltip {...args} scheme="light" placement="top" />
      <Tooltip {...args} scheme="light" placement="right" />
      <Tooltip {...args} scheme="light" placement="bottom" />
      <Tooltip {...args} scheme="light" placement="left" />
    </div>
  ),
};

