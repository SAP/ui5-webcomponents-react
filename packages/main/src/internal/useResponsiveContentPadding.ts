import { getCurrentRange } from '@ui5/webcomponents-react-base/dist/Device';
import { useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(
  {
    Phone: { paddingLeft: '1rem', paddingRight: '1rem' },
    Tablet: { paddingLeft: '2rem', paddingRight: '2rem' },
    Desktop: { paddingLeft: '2rem', paddingRight: '2rem' },
    LargeDesktop: { paddingLeft: '3rem', paddingRight: '3rem' }
  },
  { name: 'StdExtPadding' }
);

export const useResponsiveContentPadding = (element) => {
  const [currentRange, setCurrentRange] = useState(getCurrentRange().name);
  const resizeTimeout = useRef(null);
  const isMounted = useRef(false);
  const classes = useStyles();

  useEffect(() => {
    isMounted.current = true;
    const observer = new ResizeObserver(([el]) => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(() => {
        if (isMounted.current) {
          setCurrentRange(() => getCurrentRange(el.contentRect.width)?.name);
        }
      }, 150);
    });
    if (element) {
      observer.observe(element);
    }
    return () => {
      isMounted.current = false;
      observer.disconnect();
    };
  }, [element, isMounted]);

  return classes[currentRange];
};
