import { debounce } from '@ui5/webcomponents-react-base';
import { useRef, useState } from 'react';

export const useCancelAnimationFallback = (
  noAnimation: boolean,
): { isMounted: boolean; handleBarAnimationStart: () => void; handleBarAnimationEnd: () => void } => {
  const [isMounted, setIsMounted] = useState(true);
  const cancelAnimationFallback = () => {
    setIsMounted(false);
    setIsMounted(true);
  };
  const debouncedCancelAnimationFallback = useRef(debounce(cancelAnimationFallback, 1500)).current;

  const handleBarAnimationStart = () => {
    if (!noAnimation) {
      debouncedCancelAnimationFallback();
    }
  };
  const handleBarAnimationEnd = () => {
    if (!noAnimation) {
      debouncedCancelAnimationFallback.cancel();
    }
  };
  return { isMounted, handleBarAnimationStart, handleBarAnimationEnd };
};
