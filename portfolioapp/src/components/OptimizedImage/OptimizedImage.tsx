import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  lazy?: boolean;
  webpSrc?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

const ImageContainer = styled.div<{ $isLoading: boolean }>`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  transition: all 0.3s ease;
  border-radius: inherit;
  
  ${props => props.$isLoading && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent
      );
      animation: shimmer 1.8s infinite;
      border-radius: inherit;
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `}
`;

const Image = styled.img<{ $isLoaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  opacity: ${props => props.$isLoaded ? 1 : 0};
  transform: ${props => props.$isLoaded ? 'scale(1)' : 'scale(1.05)'};
  filter: ${props => props.$isLoaded ? 'none' : 'blur(2px)'};
  border-radius: inherit;
`;

const PlaceholderDiv = styled.div<{ $placeholder?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.$placeholder ? 
    `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${props.$placeholder})` : 
    'linear-gradient(135deg, #e9ecef 0%, #f8f9fa 100%)'
  };
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  transform: scale(1.1);
  transition: all 0.3s ease;
  border-radius: inherit;
`;

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  lazy = true,
  webpSrc,
  placeholder,
  style,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Check WebP support
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  const getImageSrc = () => {
    if (hasError) return placeholder || src;
    if (webpSrc && supportsWebP()) return webpSrc;
    return src;
  };

  return (
    <ImageContainer 
      ref={containerRef}
      className={className}
      $isLoading={!isLoaded && isInView}
      style={{ width, height, ...style }}
    >
      {placeholder && !isLoaded && (
        <PlaceholderDiv $placeholder={placeholder} />
      )}
      
      {isInView && (
        <picture>
          {webpSrc && (
            <source srcSet={webpSrc} type="image/webp" />
          )}
          <Image
            ref={imgRef}
            src={getImageSrc()}
            alt={alt}
            $isLoaded={isLoaded}
            onLoad={handleLoad}
            onError={handleError}
            loading={lazy ? 'lazy' : 'eager'}
            decoding="async"
          />
        </picture>
      )}
    </ImageContainer>
  );
};

export default OptimizedImage;