import { useCallback, useEffect, useRef, useState } from 'react';
import { Device } from '@ui5/webcomponents-react-base/lib/Device';

export const useWindowResize = () => {
  const headerRef = useRef(null);
  const [tableWidth, setTableWidth] = useState(0);
  const onWindowResize = useCallback(() => {
    if (headerRef.current) {
      setTableWidth(headerRef.current.getBoundingClientRect().width);
    }
  }, [setTableWidth, headerRef.current]);

  const observer = useRef(new MutationObserver(onWindowResize));

  useEffect(() => {
    Device.resize.attachHandler(onWindowResize, null);
    return () => {
      Device.resize.detachHandler(onWindowResize, null);
    };
  }, [onWindowResize]);

  useEffect(() => {
    if (headerRef.current) {
      observer.current.observe(headerRef.current, {
        attributes: true,
        subtree: true,
        childList: true
      });
    }

    return () => {
      observer.current.disconnect();
    };
  }, [headerRef.current, observer.current]);

  return [headerRef, tableWidth];
};
