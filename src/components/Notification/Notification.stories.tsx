import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { Notification } from './Notification';
import { Button } from '@Components/Button/Button';

const meta: Meta<typeof Notification> = {
  title: 'Components/Feedback/Notification',
  component: Notification,
  tags: ['autodocs'],
  args: {
    variant: 'info',
    position: 'top-right',
    title: 'Notification title',
    description: 'Consectetur adipiscing elita liquid pariatur.',
    durationMs: 3000,
  },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['info', 'success', 'warning', 'error'] },
    position: {
      control: { type: 'select' },
      options: ['top-left','top-center','top-right','middle-left','middle-center','middle-right','bottom-left','bottom-center','bottom-right'],
    },
    durationMs: { control: { type: 'number', min: 1000, step: 500 } },
  },
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ height: '70vh', display: 'grid', placeItems: 'center' }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Playground: Story = {
  render: function Render(args) {
    const [items, setItems] = React.useState<number[]>([]);
    return (
      <>
        <Button label="Show notification" onClick={() => setItems((prev) => [...prev, Date.now()])} />
        {items.map((id, index) => (
          <Notification
            key={id}
            {...args}
            open
            offsetPx={index * 96}
            onClose={() => setItems((prev) => prev.filter((x) => x !== id))}
          />
        ))}
      </>
    );
  },
};

export const WithActions: Story = {
  args: {
    primaryAction: { label: 'Button' },
    secondaryAction: { label: 'Button' },
    durationMs: 3000,
  },
  render: function Render(args) {
    const [visible, setVisible] = React.useState(false);
    return (
      <>
        <Button label="Show notification" onClick={() => setVisible(true)} />
        <Notification
          {...args}
          open={visible}
          onClose={() => setVisible(false)}
          primaryAction={{ label: args.primaryAction?.label ?? 'Button', onClick: () => setVisible(false) }}
          secondaryAction={{ label: args.secondaryAction?.label ?? 'Button', onClick: () => setVisible(false) }}
        />
      </>
    );
  },
};

export const WithButtons: Story = {
  args: {
    title: 'Action required',
    description: 'Consectetur adipiscing elita liquid pariatur.',
    primaryAction: { label: 'Confirm', variant: 'primary', size: 'sm' },
    secondaryAction: { label: 'Cancel', variant: 'tertiary', size: 'sm' },
  },
  render: function Render(args) {
    const [visible, setVisible] = React.useState(false);
    return (
      <>
        <Button label="Show notification with buttons" onClick={() => setVisible(true)} />
        <Notification
          {...args}
          open={visible}
          onClose={() => setVisible(false)}
          primaryAction={args.primaryAction ? { ...args.primaryAction, onClick: () => setVisible(false) } : undefined}
          secondaryAction={args.secondaryAction ? { ...args.secondaryAction, onClick: () => setVisible(false) } : undefined}
        />
      </>
    );
  },
};

export const Overview: Story = {
  render: function Render() {
    const [openSimple, setOpenSimple] = React.useState(false);
    const [openButtons, setOpenButtons] = React.useState(false);
    return (
      <div style={{ display: 'grid', gap: 16 }}>
        <Button label="Show (no buttons)" onClick={() => setOpenSimple(true)} />
        <Button label="Show (with buttons)" onClick={() => setOpenButtons(true)} />

        <Notification
          title="Notification title"
          description="Consectetur adipiscing elita liquid pariatur."
          position="top-right"
          durationMs={3000}
          open={openSimple}
          onClose={() => setOpenSimple(false)}
        />

        <Notification
          title="Action required"
          description="Consectetur adipiscing elita liquid pariatur."
          position="bottom-right"
          open={openButtons}
          onClose={() => setOpenButtons(false)}
          primaryAction={{ label: 'Confirm', variant: 'primary', size: 'sm' }}
          secondaryAction={{ label: 'Cancel', variant: 'tertiary', size: 'sm' }}
        />
      </div>
    );
  },
};

