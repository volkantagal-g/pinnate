import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Display/Image',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Modern, accessible image component with lazy loading, error handling, and responsive design support.'
      }
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL'
    },
    alt: {
      control: 'text',
      description: 'Alternative text for accessibility (required)'
    },
    fallbackSrc: {
      control: 'text',
      description: 'Fallback image URL when main image fails to load'
    },
    width: {
      control: 'text',
      description: 'Image width'
    },
    height: {
      control: 'text',
      description: 'Image height'
    },
    objectFit: {
      control: 'select',
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      description: 'Object fit behavior'
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius'
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Shadow elevation'
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: 'Loading state'
    },
    placeholder: {
      control: 'select',
      options: ['blur', 'none'],
      description: 'Placeholder blur effect'
    },
    aspectRatio: {
      control: 'text',
      description: 'Aspect ratio (e.g., "16/9", "4/3")'
    },
    skeleton: {
      control: 'boolean',
      description: 'Skeleton loading state'
    },
    hover: {
      control: 'select',
      options: ['none', 'scale', 'lift', 'glow'],
      description: 'Hover effect'
    },
    quality: {
      control: 'select',
      options: ['low', 'medium', 'high'],
      description: 'Image quality optimization'
    }
  },
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Sample image from Picsum',
    width: 400,
    height: 300
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Sample image'
  }
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Image
        src="https://picsum.photos/200/150"
        alt="Small image"
        width={200}
        height={150}
        radius="md"
        shadow="sm"
      />
      <Image
        src="https://picsum.photos/300/200"
        alt="Medium image"
        width={300}
        height={200}
        radius="lg"
        shadow="md"
      />
      <Image
        src="https://picsum.photos/400/300"
        alt="Large image"
        width={400}
        height={300}
        radius="xl"
        shadow="lg"
      />
    </div>
  )
};

// Radius variants
export const RadiusVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Image
        src="https://picsum.photos/150/150"
        alt="No radius"
        width={150}
        height={150}
        radius="none"
      />
      <Image
        src="https://picsum.photos/150/150"
        alt="Small radius"
        width={150}
        height={150}
        radius="sm"
      />
      <Image
        src="https://picsum.photos/150/150"
        alt="Medium radius"
        width={150}
        height={150}
        radius="md"
      />
      <Image
        src="https://picsum.photos/150/150"
        alt="Large radius"
        width={150}
        height={150}
        radius="lg"
      />
      <Image
        src="https://picsum.photos/150/150"
        alt="Extra large radius"
        width={150}
        height={150}
        radius="xl"
      />
      <Image
        src="https://picsum.photos/150/150"
        alt="Full radius (circle)"
        width={150}
        height={150}
        radius="full"
      />
    </div>
  )
};

// Shadow variants
export const ShadowVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '32px' }}>
      <Image
        src="https://picsum.photos/200/150"
        alt="No shadow"
        width={200}
        height={150}
        shadow="none"
        radius="md"
      />
      <Image
        src="https://picsum.photos/200/150"
        alt="Small shadow"
        width={200}
        height={150}
        shadow="sm"
        radius="md"
      />
      <Image
        src="https://picsum.photos/200/150"
        alt="Medium shadow"
        width={200}
        height={150}
        shadow="md"
        radius="md"
      />
      <Image
        src="https://picsum.photos/200/150"
        alt="Large shadow"
        width={200}
        height={150}
        shadow="lg"
        radius="md"
      />
      <Image
        src="https://picsum.photos/200/150"
        alt="Extra large shadow"
        width={200}
        height={150}
        shadow="xl"
        radius="md"
      />
    </div>
  )
};

// Object fit variants
export const ObjectFitVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <div>
        <h4>Cover (default)</h4>
        <Image
          src="https://picsum.photos/200/150"
          alt="Cover fit"
          width={200}
          height={150}
          objectFit="cover"
          radius="md"
        />
      </div>
      <div>
        <h4>Contain</h4>
        <Image
          src="https://picsum.photos/200/150"
          alt="Contain fit"
          width={200}
          height={150}
          objectFit="contain"
          radius="md"
        />
      </div>
      <div>
        <h4>Fill</h4>
        <Image
          src="https://picsum.photos/200/150"
          alt="Fill fit"
          width={200}
          height={150}
          objectFit="fill"
          radius="md"
        />
      </div>
      <div>
        <h4>None</h4>
        <Image
          src="https://picsum.photos/200/150"
          alt="None fit"
          width={200}
          height={150}
          objectFit="none"
          radius="md"
        />
      </div>
      <div>
        <h4>Scale Down</h4>
        <Image
          src="https://picsum.photos/200/150"
          alt="Scale down fit"
          width={200}
          height={150}
          objectFit="scale-down"
          radius="md"
        />
      </div>
    </div>
  )
};

// Hover effects
export const HoverEffects: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Image
        src="https://picsum.photos/200/150"
        alt="No hover effect"
        width={200}
        height={150}
        hover="none"
        radius="md"
        shadow="md"
      />
      <Image
        src="https://picsum.photos/200/150"
        alt="Scale hover effect"
        width={200}
        height={150}
        hover="scale"
        radius="md"
        shadow="md"
      />
      <Image
        src="https://picsum.photos/200/150"
        alt="Lift hover effect"
        width={200}
        height={150}
        hover="lift"
        radius="md"
        shadow="md"
      />
      <Image
        src="https://picsum.photos/200/150"
        alt="Glow hover effect"
        width={200}
        height={150}
        hover="glow"
        radius="md"
        shadow="md"
      />
    </div>
  )
};

// Clickable images
export const Clickable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Image
        src="https://picsum.photos/200/150"
        alt="Clickable image"
        width={200}
        height={150}
        onClick={() => alert('Image clicked!')}
        hover="scale"
        radius="md"
        shadow="md"
      />
      <Image
        src="https://picsum.photos/200/150"
        alt="Another clickable image"
        width={200}
        height={150}
        onClick={() => console.log('Image clicked!')}
        hover="lift"
        radius="md"
        shadow="md"
      />
    </div>
  )
};

// Aspect ratio
export const AspectRatio: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Image
        src="https://picsum.photos/400/300"
        alt="16:9 aspect ratio"
        width={400}
        aspectRatio="16/9"
        radius="md"
        shadow="md"
      />
      <Image
        src="https://picsum.photos/400/300"
        alt="4:3 aspect ratio"
        width={400}
        aspectRatio="4/3"
        radius="md"
        shadow="md"
      />
      <Image
        src="https://picsum.photos/400/300"
        alt="1:1 aspect ratio (square)"
        width={400}
        aspectRatio="1/1"
        radius="md"
        shadow="md"
      />
    </div>
  )
};

// Skeleton loading
export const Skeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Image
        src=""
        alt="Skeleton loading"
        width={200}
        height={150}
        skeleton={true}
        radius="md"
      />
      <Image
        src=""
        alt="Another skeleton"
        width={300}
        height={200}
        skeleton={true}
        radius="lg"
      />
    </div>
  )
};

// Error handling with fallback
export const ErrorHandling: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Image
        src="https://invalid-url-that-will-fail.com/image.jpg"
        alt="Image that will fail to load"
        width={200}
        height={150}
        radius="md"
        shadow="md"
      />
      <Image
        src="https://invalid-url-that-will-fail.com/image.jpg"
        alt="Image with fallback"
        fallbackSrc="https://picsum.photos/200/150"
        width={200}
        height={150}
        radius="md"
        shadow="md"
      />
    </div>
  )
};

// Responsive images
export const Responsive: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <Image
        src="https://picsum.photos/600/400"
        alt="Responsive image"
        width="100%"
        height={400}
        responsive={{
          sm: 'https://picsum.photos/400/300',
          md: 'https://picsum.photos/500/350',
          lg: 'https://picsum.photos/600/400',
          xl: 'https://picsum.photos/800/500'
        }}
        radius="lg"
        shadow="md"
      />
    </div>
  )
};

// Placeholder blur
export const PlaceholderBlur: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Image
        src="https://picsum.photos/200/150"
        alt="With placeholder blur"
        width={200}
        height={150}
        placeholder="blur"
        radius="md"
        shadow="md"
      />
      <Image
        src="https://picsum.photos/200/150"
        alt="Without placeholder"
        width={200}
        height={150}
        placeholder="none"
        radius="md"
        shadow="md"
      />
    </div>
  )
};
