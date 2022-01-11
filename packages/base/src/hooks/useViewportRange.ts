import { useEffect, useState } from 'react';
import { getCurrentRange, attachMediaHandler, detachMediaHandler } from '../Device';

export const useViewportRange = () => {
  const [currentRange, setCurrentRange] = useState(getCurrentRange().name);

  useEffect(() => {
    let isMounted = true;
    const handler = ({ name: range }) => {
      if (isMounted === true) {
        setCurrentRange(range);
      }
    };
    attachMediaHandler(handler);
    return () => {
      isMounted = false;
      detachMediaHandler(handler);
    };
  }, [setCurrentRange]);

  return currentRange;
};
