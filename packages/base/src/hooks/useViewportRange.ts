import { Device } from '@ui5/webcomponents-react-base/lib/Device';
import { useEffect, useState, useRef } from 'react';

export const useViewportRange = (rangeSet) => {
  const [currentRange, setCurrentRange] = useState(Device.media.getCurrentRange(rangeSet, window.innerWidth).name);
  const isMounted = useRef(true);

  useEffect(() => {
    const handler = ({ name: range }) => {
      if (isMounted.current === true) {
        setCurrentRange(range);
      }
    };
    Device.media.attachHandler(handler, null, 'StdExt');
    return () => {
      isMounted.current = false;
      Device.resize.detachHandler(handler, null);
    };
  }, [setCurrentRange, isMounted]);

  return currentRange;
};
