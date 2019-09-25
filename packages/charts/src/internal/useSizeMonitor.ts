import { useCallback, useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export const useSizeMonitor = (props, container) => {
  const { height: heightProp, width: widthProp, minHeight, minWidth } = props;
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const enableSizeMonitor = typeof heightProp === 'string' || typeof widthProp === 'string';

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

      // console.log(props);

      setHeight(Math.max(minHeight, clientRectHeight));
      setWidth(Math.max(minWidth, clientRectWidth));
    },
    [container.current, setHeight, setWidth]
  );

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
