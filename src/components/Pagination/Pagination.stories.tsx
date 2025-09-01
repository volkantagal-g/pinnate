import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';
import { PinnateProvider } from '@App/theme/PinnateProvider';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible pagination component with navigation arrows, smart page number display, and accessibility features.',
      },
    },
  },
  argTypes: {
    totalPages: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Total number of pages',
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page',
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Show first/last page navigation buttons',
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show previous/next page navigation buttons',
    },
    maxVisiblePages: {
      control: { type: 'number', min: 5, max: 15 },
      description: 'Maximum number of page numbers to show before using ellipsis',
    },
    onPageChange: {
      action: 'page changed',
      description: 'Callback when page changes',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ padding: '2rem', backgroundColor: '#f3f4f6', height: '200px', width: '1000px' }}
      >
        <PinnateProvider>
          <Story />
        </PinnateProvider>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component for stories
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaginationWrapper = ({ totalPages, currentPage, ...props }: any) => {
  const [page, setPage] = useState(currentPage);

  return (
    <Pagination {...props} totalPages={totalPages} currentPage={page} onPageChange={setPage} />
  );
};

export const Default: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
    showFirstLast: true,
    showPrevNext: true,
    maxVisiblePages: 7,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const SmallPageCount: Story = {
  args: {
    totalPages: 5,
    currentPage: 3,
    showFirstLast: true,
    showPrevNext: true,
    maxVisiblePages: 7,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const LargePageCount: Story = {
  args: {
    totalPages: 25,
    currentPage: 12,
    showFirstLast: true,
    showPrevNext: true,
    maxVisiblePages: 7,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const NearBeginning: Story = {
  args: {
    totalPages: 20,
    currentPage: 3,
    showFirstLast: true,
    showPrevNext: true,
    maxVisiblePages: 7,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const NearEnd: Story = {
  args: {
    totalPages: 20,
    currentPage: 18,
    showFirstLast: true,
    showPrevNext: true,
    maxVisiblePages: 7,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const WithoutFirstLastButtons: Story = {
  args: {
    totalPages: 15,
    currentPage: 7,
    showFirstLast: false,
    showPrevNext: true,
    maxVisiblePages: 7,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const WithoutPrevNextButtons: Story = {
  args: {
    totalPages: 12,
    currentPage: 6,
    showFirstLast: true,
    showPrevNext: false,
    maxVisiblePages: 7,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const MinimalNavigation: Story = {
  args: {
    totalPages: 8,
    currentPage: 4,
    showFirstLast: false,
    showPrevNext: false,
    maxVisiblePages: 8,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const CustomMaxVisiblePages: Story = {
  args: {
    totalPages: 30,
    currentPage: 15,
    showFirstLast: true,
    showPrevNext: true,
    maxVisiblePages: 11,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

//Interactive Pagination with totalItems and dropdown

export const ControlledPagination = ({ ...props }) => {
  const [page, setPage] = useState(1);
  const [totalItemsPerPage, setTotalItemsPerPage] = useState(10);
  return (
    <Pagination
      {...props}
      totalPages={10}
      currentPage={page}
      onPageChange={setPage}
      totalItems={100}
      totalItemsPerPage={totalItemsPerPage}
      onTotalItemsChange={setTotalItemsPerPage}
    />
  );
};
