import { useCallback, useEffect, useState } from 'react';
import { Device } from '../Device';

export const useViewportRange = () => {
  const [currentRange, setCurrentRange] = useState(Device.media.getCurrentRange('StdExt', window.innerWidth).name);

  const onWindowResize = useCallback(
    ({ name: range }) => {
      setCurrentRange(range);
    },
    [currentRange, setCurrentRange]
  );

  useEffect(() => {
    Device.media.attachHandler(onWindowResize, null, 'StdExt');
    return () => Device.resize.detachHandler(onWindowResize, null);
  }, [onWindowResize]);

  return [currentRange];
};
