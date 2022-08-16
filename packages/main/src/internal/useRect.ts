// copied from https://github.com/TanStack/react-virtual/blob/061075751c3fad630710c0f7794e587a6cf9dda0/src/useRect.js (20. May 2022) (modified)
import { Virtualizer } from '@tanstack/react-virtual';
import { useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base';
import { useEffect, useReducer, useRef, useState } from 'react';

function rectReducer(state, action) {
  const rect = action.rect;
  if (state.height !== rect.height || state.width !== rect.width) {
    return rect;
  }
  return state;
}

interface Rect {
  width: number;
  height: number;
}

//todo remove file

export const observeElementRect = (instance: Virtualizer<any, any>, cb: (rect: Rect) => void) => {
  const observer = new ResizeObserver((entries) => {
    const target = entries[0]?.target as HTMLElement;
    console.log(target.getBoundingClientRect());
    cb({
      width: target?.offsetWidth,
      height: target?.offsetHeight
    });
  });
  if (!instance.scrollElement) {
    return;
  }

  cb({
    width: instance.scrollElement.offsetWidth,
    height: instance.scrollElement.offsetHeight
  });

  observer.observe(instance.scrollElement);

  return () => {
    observer.unobserve(instance.scrollElement);
  };
};

export function useRect(nodeRef, initialRect = { width: 0, height: 0 }) {
  const [element, setElement] = useState(nodeRef.current);
  const [rect, dispatch] = useReducer(rectReducer, initialRect);
  const initialRectSet = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });

  useIsomorphicLayoutEffect(() => {
    if (element && !initialRectSet.current) {
      initialRectSet.current = true;
      dispatch({ rect: { width: element.offsetWidth, height: element.offsetHeight } });
    }
  }, [element]);

  useEffect(() => {
    if (!element) {
      return;
    }

    const observer = new ResizeObserver(() => {
      dispatch({ rect: { width: element.offsetWidth, height: element.offsetHeight } });
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return rect;
}
