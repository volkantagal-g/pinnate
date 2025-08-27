import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Image } from './Image';

// Mock IntersectionObserver for lazy loading
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
global.IntersectionObserver = mockIntersectionObserver;

describe('Image Component', () => {
  const defaultProps = {
    src: 'https://example.com/image.jpg',
    alt: 'Test image'
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with required props', () => {
    render(<Image {...defaultProps} />);
    const img = screen.getByAltText('Test image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  it('applies custom width and height', () => {
    render(<Image {...defaultProps} width={300} height={200} />);
    const container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveStyle({ width: '300px', height: '200px' });
  });

  it('applies border radius variants', () => {
    const { rerender } = render(<Image {...defaultProps} radius="sm" />);
    let container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass('radius-sm');

    rerender(<Image {...defaultProps} radius="lg" />);
    container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass('radius-lg');
  });

  it('applies shadow variants', () => {
    const { rerender } = render(<Image {...defaultProps} shadow="md" />);
    let container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass('shadow-md');

    rerender(<Image {...defaultProps} shadow="xl" />);
    container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass('shadow-xl');
  });

  it('applies object fit variants', () => {
    const { rerender } = render(<Image {...defaultProps} objectFit="contain" />);
    let img = screen.getByAltText('Test image');
    expect(img).toHaveClass('object-fit-contain');

    rerender(<Image {...defaultProps} objectFit="cover" />);
    img = screen.getByAltText('Test image');
    expect(img).toHaveClass('object-fit-cover');
  });

  it('applies hover effects', () => {
    const { rerender } = render(<Image {...defaultProps} hover="scale" />);
    let container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass('hover-scale');

    rerender(<Image {...defaultProps} hover="lift" />);
    container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass('hover-lift');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Image {...defaultProps} onClick={handleClick} />);
    
    const img = screen.getByAltText('Test image');
    fireEvent.click(img);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies clickable styles when onClick is provided', () => {
    render(<Image {...defaultProps} onClick={() => {}} />);
    const container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass('clickable');
  });

  it('shows skeleton loading state', () => {
    render(<Image {...defaultProps} skeleton={true} />);
    const container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass('skeleton');
  });

  it('applies aspect ratio', () => {
    render(<Image {...defaultProps} aspectRatio="16/9" />);
    const container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveStyle({ aspectRatio: '16/9' });
  });

  it('generates responsive srcset', () => {
    const responsive = {
      sm: 'https://example.com/small.jpg',
      md: 'https://example.com/medium.jpg',
      lg: 'https://example.com/large.jpg'
    };

    render(<Image {...defaultProps} responsive={responsive} />);
    const img = screen.getByAltText('Test image');
    
    const expectedSrcSet = 'https://example.com/small.jpg 640w, https://example.com/medium.jpg 768w, https://example.com/large.jpg 1024w';
    expect(img).toHaveAttribute('srcset', expectedSrcSet);
  });

  it('generates sizes attribute for responsive images', () => {
    const responsive = {
      sm: 'https://example.com/small.jpg',
      md: 'https://example.com/medium.jpg'
    };

    render(<Image {...defaultProps} responsive={responsive} />);
    const img = screen.getByAltText('Test image');
    
    const expectedSizes = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw';
    expect(img).toHaveAttribute('sizes', expectedSizes);
  });

  it('handles image load events', async () => {
    render(<Image {...defaultProps} />);
    const img = screen.getByAltText('Test image');
    
    // Simulate image load
    fireEvent.load(img);
    
    await waitFor(() => {
      expect(img).toHaveClass('loaded');
    });
  });

  it('handles image error events', async () => {
    render(<Image {...defaultProps} />);
    const img = screen.getByAltText('Test image');
    
    // Simulate image error
    fireEvent.error(img);
    
    await waitFor(() => {
      expect(img).toHaveClass('error');
    });
  });

  it('shows fallback image on error', async () => {
    const fallbackSrc = 'https://example.com/fallback.jpg';
    render(<Image {...defaultProps} fallbackSrc={fallbackSrc} />);
    
    const img = screen.getByAltText('Test image');
    
    // Simulate error
    fireEvent.error(img);
    
    await waitFor(() => {
      expect(img).toHaveAttribute('src', fallbackSrc);
    });
  });

  it('shows error overlay when image fails and no fallback', async () => {
    render(<Image {...defaultProps} />);
    const img = screen.getByAltText('Test image');
    
    // Simulate error
    fireEvent.error(img);
    
    await waitFor(() => {
      expect(screen.getByText('Image failed to load')).toBeInTheDocument();
    });
  });

  it('shows loading overlay initially', () => {
    render(<Image {...defaultProps} />);
    const loadingOverlay = screen.getByRole('img').closest('div')?.querySelector('.loadingOverlay');
    expect(loadingOverlay).toBeInTheDocument();
  });

  it('applies placeholder blur effect', () => {
    render(<Image {...defaultProps} placeholder="blur" />);
    const placeholder = screen.getByAltText('Test image').closest('div')?.querySelector('.placeholderBlur');
    expect(placeholder).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-image-class';
    render(<Image {...defaultProps} className={customClass} />);
    const container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveClass(customClass);
  });

  it('applies custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<Image {...defaultProps} style={customStyle} />);
    const container = screen.getByAltText('Test image').closest('div');
    expect(container).toHaveStyle(customStyle);
  });

  it('forwards additional HTML attributes', () => {
    render(<Image {...defaultProps} data-testid="custom-image" />);
    const img = screen.getByTestId('custom-image');
    expect(img).toBeInTheDocument();
  });

  it('sets loading attribute correctly', () => {
    const { rerender } = render(<Image {...defaultProps} loading="eager" />);
    let img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'eager');

    rerender(<Image {...defaultProps} loading="lazy" />);
    img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('updates image source when src prop changes', () => {
    const { rerender } = render(<Image {...defaultProps} />);
    let img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');

    rerender(<Image {...defaultProps} src="https://example.com/new-image.jpg" />);
    img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('src', 'https://example.com/new-image.jpg');
  });
});
