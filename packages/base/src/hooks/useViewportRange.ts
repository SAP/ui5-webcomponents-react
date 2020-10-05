import { getCurrentRange, attachHandler, detachHandler } from '@ui5/webcomponents-react-base/lib/Media';
import { useEffect, useRef, useState } from 'react';

export const useViewportRange = (rangeSet: string) => {
  const [currentRange, setCurrentRange] = useState(getCurrentRange(rangeSet, window.innerWidth).name);
  const isMounted = useRef(true);

  useEffect(() => {
    const handler = ({ name: range }) => {
      if (isMounted.current === true) {
        setCurrentRange(range);
      }
    };
    attachHandler(handler, null, rangeSet);
    return () => {
      isMounted.current = false;
      detachHandler(handler, null);
    };
  }, [setCurrentRange, isMounted]);

  return currentRange;
};
