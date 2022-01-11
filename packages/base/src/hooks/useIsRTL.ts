import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL.js';
import { RefObject, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks';

const GLOBAL_DIR_CSS_VAR = '--_ui5_dir';

const detectRTL = (elementRef: RefObject<HTMLElement>) => {
  if (!elementRef.current) {
    return getRTL();
  }
  const doc = window.document;
  const dirValues = ['ltr', 'rtl']; // exclude "auto" and "" from all calculations
  const locallyAppliedDir = getComputedStyle(elementRef.current).getPropertyValue(GLOBAL_DIR_CSS_VAR);

  // In that order, inspect the CSS Var (for modern browsers), the element itself, html and body (for IE fallback)
  if (dirValues.includes(locallyAppliedDir)) {
    return locallyAppliedDir === 'rtl';
  }
  if (dirValues.includes(elementRef.current?.dir)) {
    return elementRef.current?.dir === 'rtl';
  }
  if (dirValues.includes(doc.documentElement.dir)) {
    return doc.documentElement.dir === 'rtl';
  }
  if (dirValues.includes(doc.body.dir)) {
    return doc.body.dir === 'rtl';
  }

  // Finally, check the configuration for explicitly set RTL or language-implied RTL
  return getRTL();
};

const useIsRTL = (elementRef: RefObject<HTMLElement>): boolean => {
  const [isRTL, setRTL] = useState<boolean>(getRTL()); // use config RTL as best guess
  const isMounted = useRef(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    setRTL(detectRTL(elementRef)); // update immediately while rendering
    const targets = [document.documentElement, document.body, elementRef.current].filter(Boolean);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'dir') {
          if (isMounted.current) {
            setRTL(detectRTL(elementRef));
          }
        }
      });
    });

    targets.forEach((target) => {
      observer.observe(target, { attributes: true, childList: false, characterData: false, attributeFilter: ['dir'] });
    });

    return () => {
      isMounted.current = false;
      observer.disconnect();
    };
  }, [isMounted]);

  return isRTL;
};

export { useIsRTL };
