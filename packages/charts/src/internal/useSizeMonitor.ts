import { useCallback, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export const useSizeMonitor = (heightProp, widthProp, container) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const enableSizeMonitor = typeof heightProp === 'string' || typeof widthProp === 'string';

  const recalculateSize = useCallback(() => {
    const { height: clientRectHeight, width: clientRectWidth } = container.current.getBoundingClientRect();

    setHeight(clientRectHeight);
    setWidth(clientRectWidth);
  }, [container.current, setHeight, setWidth]);

  const observer = useRef(new ResizeObserver(recalculateSize));

  // @ts-ignore
  useEffect(() => {
    if (enableSizeMonitor && container.current) {
      observer.current.observe(container.current);

      recalculateSize();
      return () => {
        observer.current.disconnect();
      };
    }
  }, []);

  return {
    height: enableSizeMonitor ? height : heightProp,
    width: enableSizeMonitor ? width : widthProp
  };
};
