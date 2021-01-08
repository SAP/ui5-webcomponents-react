import { getCurrentRange, attachMediaHandler, detachMediaHandler } from '@ui5/webcomponents-react-base/lib/Device';
import { useEffect, useState } from 'react';

export const useViewportRange = (rangeSet: string) => {
  const [currentRange, setCurrentRange] = useState(getCurrentRange(rangeSet, window.innerWidth).name);

  useEffect(() => {
    let isMounted = true;
    const handler = ({ name: range }) => {
      if (isMounted === true) {
        setCurrentRange(range);
      }
    };
    attachMediaHandler(handler, rangeSet);
    return () => {
      isMounted = false;
      detachMediaHandler(handler);
    };
  }, [setCurrentRange]);

  return currentRange;
};
