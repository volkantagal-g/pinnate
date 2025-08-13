import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '@App/theme/PinnateProvider';
import { ArrowLeft, ArrowRight } from '@App/icons';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ display: 'grid', gap: 12 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Overview: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {/* Primary */}
      <h3 style={{ marginBottom: 8 }}>Primary</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="primary" size="lg" label="Button" />
        <Button variant="primary" size="md" label="Button" />
        <Button variant="primary" size="sm" label="Button" />
        <Button variant="primary" size="xs" label="Button" />
      </div>
      <h3 style={{ marginBottom: 8 }}>Primary Error</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="primary" size="lg" label="Button" error />
        <Button variant="primary" size="md" label="Button" error />
        <Button variant="primary" size="sm" label="Button" error />
        <Button variant="primary" size="xs" label="Button" error />
      </div>
      <h3 style={{ marginBottom: 8 }}>Primary with icons</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="primary" icon={<ArrowRight />} iconPosition="end" label="Button" size='lg' />
        <Button variant="primary" icon={<ArrowRight />} iconPosition="end" label="Button" size='md' />
        <Button variant="primary" icon={<ArrowRight />} iconPosition="end" label="Button" size='sm' />
        <Button variant="primary" icon={<ArrowRight />} iconPosition="end" label="Button" size='xs' />
      </div>
      <h3 style={{ marginBottom: 8 }}>Primary only icon</h3>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="primary" onlyIcon icon={<ArrowLeft />} aria-label="icon" size='lg' />
        <Button variant="primary" onlyIcon icon={<ArrowLeft />} aria-label="icon" size='md' />
        <Button variant="primary" onlyIcon icon={<ArrowLeft />} aria-label="icon" size='sm' />
        <Button variant="primary" onlyIcon icon={<ArrowLeft />} aria-label="icon" size='xs' />
      </div>
      <h3 style={{ marginBottom: 8 }}>Secondary</h3>
      {/* Secondary */}
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="secondary" size="lg" label="Button" />
        <Button variant="secondary" size="md" label="Button" />
        <Button variant="secondary" size="sm" label="Button" />
        <Button variant="secondary" size="xs" label="Button" />
      </div>
      <h3 style={{ marginBottom: 8 }}>Secondary Error</h3>
      {/* Secondary */}
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="secondary" size="lg" label="Button" error />
        <Button variant="secondary" size="md" label="Button" error />
        <Button variant="secondary" size="sm" label="Button" error />
        <Button variant="secondary" size="xs" label="Button" error />
      </div>
      <h3 style={{ marginBottom: 8 }}>Secondary Color</h3>
      {/* Secondary */}
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="secondary" size="lg" label="Button" color />
        <Button variant="secondary" size="md" label="Button" color />
        <Button variant="secondary" size="sm" label="Button" color />
        <Button variant="secondary" size="xs" label="Button" color />
      </div>
      <h3 style={{ marginBottom: 8 }}>Tertiary</h3>
      {/* Tertiary */}
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="tertiary" size="lg" label="Button" />
        <Button variant="tertiary" size="md" label="Button" />
        <Button variant="tertiary" size="sm" label="Button" />
        <Button variant="tertiary" size="xs" label="Button" />
      </div>
      <h3 style={{ marginBottom: 8 }}>Tertiary Color</h3>
      {/* Tertiary */}
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="tertiary" size="lg" label="Button" color />
        <Button variant="tertiary" size="md" label="Button" color />
        <Button variant="tertiary" size="sm" label="Button" color />
        <Button variant="tertiary" size="xs" label="Button" color />
      </div>
      <h3 style={{ marginBottom: 8 }}>Tertiary Error</h3>
      {/* Tertiary */}
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="tertiary" size="lg" label="Button" error />
        <Button variant="tertiary" size="md" label="Button" error />
        <Button variant="tertiary" size="sm" label="Button" error />
        <Button variant="tertiary" size="xs" label="Button" error />
      </div>
      </div>
  ),
};

