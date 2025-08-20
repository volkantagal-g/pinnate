import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dropdown } from './Dropdown';
import type { DropdownSection } from './Dropdown';
import { PinnateProvider } from '#App/theme/PinnateProvider.js';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <PinnateProvider>
        <Story />
      </PinnateProvider>
    ),
  ],
  argTypes: {
    triggerIcon: {
      control: { type: 'select' },
      options: ['arrowUp', 'arrowDown', 'flash'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSections: DropdownSection[] = [
  {
    subheader: 'Subheader',
    items: [
      { label: 'Label', value: '1' },
      { label: 'Label', value: '2' },
      { label: 'Label', value: '3' },
    ],
  },
  {
    subheader: 'Subheader',
    items: [
      { label: 'Label', value: '4' },
      { label: 'Label', value: '5' },
      { label: 'Label', value: '6' },
    ],
  },
  {
    subheader: 'Subheader',
    items: [
      { label: 'Label', value: '7' },
      { label: 'Label', value: '8' },
      { label: 'Label', value: '9' },
    ],
  },
];

const userWithAvatar = {
  name: 'John Doe',
  email: 'john.doe@getir.com',
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
};

const userWithoutAvatar = {
  name: 'John Doe',
  email: 'john.doe@getir.com',
};

// Interactive component for controlled state
const ControlledDropdown = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Record<string, string>>({});

  const handleItemSelect = (sectionIndex: number, itemValue: string) => {
    const newSelectedItems = {
      ...selectedItems,
      [sectionIndex.toString()]: itemValue,
    };

    setSelectedItems(newSelectedItems);

    console.log('selectedItems', newSelectedItems);
  };

  const sectionsWithSelection = defaultSections.map((section, sectionIndex) => ({
    ...section,
    items: section.items.map((item) => ({
      ...item,
      selected: selectedItems[sectionIndex.toString()] === item.value,
    })),
  }));

  return (
    <Dropdown
      {...props}
      open={open}
      onOpenChange={setOpen}
      sections={sectionsWithSelection}
      onItemSelect={handleItemSelect}
    />
  );
};

export const Default: Story = {
  args: {
    user: userWithoutAvatar,
    sections: defaultSections,
    triggerIcon: 'arrowDown',
  },
};

export const WithAvatar: Story = {
  args: {
    user: userWithAvatar,
    sections: defaultSections,
    triggerIcon: 'arrowDown',
  },
};

export const Disabled: Story = {
  args: {
    user: userWithoutAvatar,
    sections: defaultSections,
    triggerIcon: 'arrowDown',
    disabled: true,
  },
};

export const Controlled: Story = {
  render: (args) => <ControlledDropdown {...args} />,
  args: {
    user: userWithAvatar,
    triggerIcon: 'arrowDown',
  },
};

export const CustomSections: Story = {
  args: {
    user: userWithAvatar,
    sections: [
      {
        subheader: 'Account',
        items: [
          { label: 'Profile Settings', value: 'profile' },
          { label: 'Security', value: 'security' },
          { label: 'Preferences', value: 'preferences' },
        ],
      },
      {
        subheader: 'Workspace',
        items: [
          { label: 'Switch Team', value: 'switch-team' },
          { label: 'Invite Members', value: 'invite' },
          { label: 'Billing', value: 'billing' },
        ],
      },
      {
        subheader: 'Support',
        items: [
          { label: 'Help Center', value: 'help' },
          { label: 'Contact Support', value: 'contact' },
          { label: 'Documentation', value: 'docs' },
        ],
      },
    ],

    triggerIcon: 'arrowDown',
  },
};
