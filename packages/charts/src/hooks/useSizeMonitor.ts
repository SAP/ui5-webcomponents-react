import { useCallback, useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

export const useSizeMonitor = (props, container) => {
  const { height: heightProp, width: widthProp, minHeight, minWidth } = props;
  const [sizeState, setSizeState] = useState({
    height: null,
    width: null
  });
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

      if (dynamicHeightProp || dynamicWidthProp) {
        setSizeState((state) => ({
          ...state,
          ...(dynamicHeightProp && { height: Math.max(minHeight, clientRectHeight) }),
          ...(dynamicWidthProp && { width: Math.max(minWidth, clientRectWidth) })
        }));
      }
    },
    [setSizeState, minWidth, minHeight, dynamicHeightProp, dynamicWidthProp]
  );

  useEffect(() => {
    if (enableSizeMonitor && container.current) {
      // @ts-ignore
      observer.current = new ResizeObserver(debounce(recalculateSize, 500));
      observer.current.observe(container.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [recalculateSize]);

  return {
    height: dynamicHeightProp ? sizeState.height : heightProp,
    width: dynamicWidthProp ? sizeState.width : widthProp
  };
};
