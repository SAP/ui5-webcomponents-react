import { debounce } from '@ui5/webcomponents-react-base/dist/Utils';
import { useRef, useState } from 'react';

export const useCancelAnimationFallback = (noAnimation) => {
  const [isMounted, setIsMounted] = useState(true);
  const cancelAnimationFallback = () => {
    setIsMounted(false);
    setIsMounted(true);
  };
  const debouncedCancelAnimationFallback = useRef(debounce(cancelAnimationFallback, 1500)).current;

  const handleBarAnimationStart = () => {
    if (!noAnimation) {
      console.log('start');
      debouncedCancelAnimationFallback();
    }
  };
  const handleBarAnimationEnd = () => {
    if (!noAnimation) {
      console.log('end');
      debouncedCancelAnimationFallback.cancel();
    }
  };
  return { isMounted, handleBarAnimationStart, handleBarAnimationEnd };
};
