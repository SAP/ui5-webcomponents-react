import { useCallback, useEffect, useRef, useState } from 'react';

export const useSizeMonitor = (props, container) => {
  const { height: heightProp, width: widthProp, minHeight, minWidth } = props;
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const observer = useRef(null);

  const dynamicHeightProp = typeof heightProp === 'string';
  const dynamicWidthProp = typeof heightProp === 'string';
  const enableSizeMonitor = dynamicHeightProp || dynamicWidthProp;

  const recalculateSize = useCallback(
    (e?) => {
      let clientRectHeight;
      let clientRectWidth;

      if (!e || !e[0] || !e[0].contentRect) {
        clientRectHeight = container.current.getBoundingClientRect().height;
        clientRectWidth = container.current.getBoundingClientRect().width;
      } else {
        clientRectHeight = e[0].contentRect.height;
        clientRectWidth = e[0].contentRect.width;
      }

      if (dynamicHeightProp) setHeight(Math.max(minHeight, clientRectHeight));
      setWidth(Math.max(minWidth, clientRectWidth));
    },
    [setHeight, setWidth, dynamicHeightProp, dynamicWidthProp]
  );

  // @ts-ignore
  useEffect(() => {
    if (enableSizeMonitor && container.current) {
      observer.current = new ResizeObserver(recalculateSize);
      observer.current.observe(container.current);

      return () => {
        observer.current.disconnect();
      };
    }
  }, [recalculateSize]);

  // call recalculateSize once on mount
  useEffect(() => {
    if (enableSizeMonitor && container.current) {
      recalculateSize();
    }
  }, []);

  return {
    height: dynamicHeightProp ? height : heightProp,
    width: dynamicWidthProp ? width : widthProp
  };
};
