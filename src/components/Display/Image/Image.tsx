import React, { useState, useRef, useEffect } from 'react';
import s from './Image.module.scss';

/**
 * @category Display
 */

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  /** Image source URL */
  src: string;
  /** Alternative text for accessibility (required) */
  alt: string;
  /** Fallback image URL when main image fails to load */
  fallbackSrc?: string;
  /** Image width */
  width?: number | string;
  /** Image height */
  height?: number | string;
  /** Object fit behavior */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Shadow elevation */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Loading state */
  loading?: 'lazy' | 'eager';
  /** Placeholder blur effect */
  placeholder?: 'blur' | 'none';
  /** Aspect ratio (e.g., "16/9", "4/3") */
  aspectRatio?: string;
  /** Skeleton loading state */
  skeleton?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Hover effect */
  hover?: 'none' | 'scale' | 'lift' | 'glow';
  /** Image quality optimization */
  quality?: 'low' | 'medium' | 'high';
  /** Responsive breakpoints */
  responsive?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

export function Image({
  src = 'https://via.placeholder.com/150',
  alt = 'Image',
  fallbackSrc = 'https://via.placeholder.com/150',
  width = 150,
  height = 150,
  objectFit = 'cover',
  radius = 'none',
  shadow = 'none',
  loading = 'lazy',
  placeholder = 'none',
  aspectRatio,
  skeleton = false,
  onClick,
  hover = 'none',
  quality = 'medium',
  responsive,
  className,
  style,
  ...imgProps
}: ImageProps): React.ReactNode {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Update image source when src prop changes
  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // Try fallback image if available
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setIsLoading(true);
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Generate responsive srcset
  const generateSrcSet = () => {
    if (!responsive) return undefined;
    
    const breakpoints = Object.entries(responsive)
      .map(([breakpoint, url]) => {
        const sizes = { sm: '640w', md: '768w', lg: '1024w', xl: '1280w' };
        return `${url} ${sizes[breakpoint as keyof typeof sizes]}`;
      })
      .join(', ');
    
    return breakpoints || undefined;
  };

  // Generate sizes attribute
  const generateSizes = () => {
    if (!responsive) return undefined;
    
    return '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw';
  };

  const containerClasses = [
    s.container,
    s[`radius-${radius}`],
    s[`shadow-${shadow}`],
    s[`hover-${hover}`],
    skeleton && s.skeleton,
    onClick && s.clickable,
    className
  ].filter(Boolean).join(' ');

  const imageClasses = [
    s.image,
    s[`object-fit-${objectFit}`],
    isLoaded && s.loaded,
    hasError && s.error
  ].filter(Boolean).join(' ');

  const containerStyle: React.CSSProperties = {
    width,
    height,
    aspectRatio: aspectRatio ? aspectRatio : undefined,
    ...style
  };

  if (skeleton) {
    return (
      <div className={containerClasses} style={containerStyle}>
        <div className={s.skeletonContent} />
      </div>
    );
  }

  return (
    <div className={containerClasses} style={containerStyle}>
      {isLoading && !isLoaded && (
        <div className={s.loadingOverlay}>
          <div className={s.spinner} />
        </div>
      )}
      
      {hasError && !fallbackSrc && (
        <div className={s.errorOverlay}>
          <div className={s.errorIcon}>📷</div>
          <span className={s.errorText}>Image failed to load</span>
        </div>
      )}
      
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={imageClasses}
        loading={loading}
        srcSet={generateSrcSet()}
        sizes={generateSizes()}
        onClick={handleClick}
        onLoad={handleLoad}
        onError={handleError}
        {...imgProps}
      />
      
      {placeholder === 'blur' && !isLoaded && (
        <div className={s.placeholderBlur} />
      )}
    </div>
  );
}
