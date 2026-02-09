import { useState, useEffect } from 'react';

/**
 * Custom hook to detect viewport size and device type
 * Breakpoints:
 * - mobile: < 640px
 * - tablet: 640px - 1024px
 * - desktop: 1024px - 1440px
 * - large: > 1440px
 */
export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLarge: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setViewport({
        width,
        height,
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024 && width < 1440,
        isLarge: width >= 1440,
      });
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

/**
 * Hook to detect if user is on mobile device
 */
export const useIsMobile = () => {
  const { isMobile } = useViewport();
  return isMobile;
};

/**
 * Hook to get current breakpoint name
 */
export const useBreakpoint = () => {
  const { isMobile, isTablet, isDesktop, isLarge } = useViewport();
  
  if (isMobile) return 'mobile';
  if (isTablet) return 'tablet';
  if (isDesktop) return 'desktop';
  if (isLarge) return 'large';
  return 'unknown';
};
