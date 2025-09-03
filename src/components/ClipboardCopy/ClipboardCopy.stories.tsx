import type { Meta, StoryObj } from '@storybook/react';
import { PinnateProvider } from '../../theme/PinnateProvider';
import { ClipboardCopy } from './ClipboardCopy';

const meta: Meta<typeof ClipboardCopy> = {
  title: 'Components/ClipboardCopy',
  component: ClipboardCopy,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <div style={{ display: 'flex', padding: 20 }}>
          <Story />
        </div>
      </PinnateProvider>
    ),
  ],
  argTypes: {
    onCopy: { action: 'copied' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'https://example.com/copy-this-url',
    copyText: 'Copy',
    copiedText: 'Copied!',
    showText: true,
  },
};

export const IconOnly: Story = {
  args: {
    value: 'https://example.com/copy-this-url',
    showText: false,
  },
};

export const CustomText: Story = {
  args: {
    value: 'Custom text to copy',
    copyText: 'Copy Link',
    copiedText: 'Link Copied!',
    showText: true,
  },
};

export const CustomTextWithoutCopiedText: Story = {
  args: {
    value: '1234567',
    copyText: 'Restaurant Id: 1234567',
    showText: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 'https://example.com/copy-this-url',
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    value:
      'This is a very long text that should be copied to clipboard when the user clicks the copy button. It can contain multiple lines and special characters like @#$%^&*()',
    copyText: 'Copy Long Text',
    copiedText: 'Text Copied!',
  },
};
