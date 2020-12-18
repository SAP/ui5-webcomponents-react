import { getCurrentRange, attachHandler, detachHandler } from '@ui5/webcomponents-react-base/lib/Media';
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
    attachHandler(handler, rangeSet);
    return () => {
      isMounted = false;
      detachHandler(handler);
    };
  }, [setCurrentRange]);

  return currentRange;
};
