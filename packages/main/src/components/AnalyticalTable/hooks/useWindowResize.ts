import { useCallback, useEffect, useRef, useState } from 'react';
import { Device } from '@ui5/webcomponents-react-base/lib/Device';

export const useWindowResize = (resizedColumns) => {
  const headerRef = useRef(null);
  const [tableWidth, setTableWidth] = useState(null);

  const onWindowResize = useCallback(() => {
    if (headerRef.current) {
      setTableWidth(headerRef.current.scrollWidth);
    }
  }, [setTableWidth, headerRef.current]);

  useEffect(() => {
    Device.resize.attachHandler(onWindowResize, null);
    return () => {
      Device.resize.detachHandler(onWindowResize, null);
    };
  }, [onWindowResize]);

  useEffect(() => {
    if (headerRef.current) {
      setTableWidth(headerRef.current.scrollWidth);
    }
  }, [headerRef.current, setTableWidth, resizedColumns]);

  return [headerRef, tableWidth];
};
