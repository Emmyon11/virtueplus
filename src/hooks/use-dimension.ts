'use client';
import { useLayoutEffect, useRef } from 'react';

export const useDimensions = (ref) => {
  // Create a ref to store the dimensions of the element
  const dimensions = useRef({ width: 0, height: 0 });

  // LayoutEffect hook to update dimensions when the component mounts and on window resize
  useLayoutEffect(() => {
    const updateDimensions = () => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    };

    // Update dimensions on initial mount
    updateDimensions();

    // Attach window resize listener to update dimensions on resize
    window.addEventListener('resize', updateDimensions);

    // Cleanup: remove resize listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [ref]);

  // Return the current dimensions of the element
  return dimensions.current;
};
