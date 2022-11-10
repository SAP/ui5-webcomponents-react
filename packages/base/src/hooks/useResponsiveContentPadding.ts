import { useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { getCurrentRange } from '../Device';

const useStyles = createUseStyles(
  {
    Phone: { paddingLeft: '1rem', paddingRight: '1rem' },
    Tablet: { paddingLeft: '2rem', paddingRight: '2rem' },
    Desktop: { paddingLeft: '2rem', paddingRight: '2rem' },
    LargeDesktop: { paddingLeft: '3rem', paddingRight: '3rem' }
  },
  { name: 'StdExtPadding' }
);

/**
 * Hook for creating a style class, which sets `padding-left` and `padding-right` depending on the width of the element.
 *
 * @param {HTMLElement} element The element the calculation is based on.
 * @param {boolean} [returnRangeString=false] If set to `true`, returns an array with the class name and range.
 * @returns {(string|Array)} If `returnRangeString` is `true`, the hook returns an array with the class name on first and the range string on second position. Otherwise, only the class name string is returned.
 */
export const useResponsiveContentPadding = (
  element: HTMLElement,
  returnRangeString = false
): string | [string, string] => {
  const [currentRange, setCurrentRange] = useState(() => getCurrentRange()?.name ?? 'Desktop');
  const classes = useStyles();
  const requestAnimationFrameRef = useRef<number | undefined>();

  useEffect(() => {
    const observer = new ResizeObserver(([el]) => {
      cancelAnimationFrame(requestAnimationFrameRef.current);
      requestAnimationFrameRef.current = requestAnimationFrame(() => {
        setCurrentRange(getCurrentRange(el.target.getBoundingClientRect().width)?.name);
      });
    });
    if (element) {
      observer.observe(element);
    }
    return () => {
      observer.disconnect();
      cancelAnimationFrame(requestAnimationFrameRef.current);
    };
  }, [element]);

  if (returnRangeString) {
    return [classes[currentRange], currentRange];
  }

  return classes[currentRange];
};
