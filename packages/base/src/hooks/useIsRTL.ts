'use client';

import { attachDirectionChange, detachDirectionChange } from '@ui5/webcomponents-base/dist/locale/directionChange.js';
import type { RefObject } from 'react';
import { useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/index.js';

const useIsRTL = <RefType extends HTMLElement>(elementRef: RefObject<RefType>): boolean => {
  const [isRTL, setRTL] = useState(false); // use config RTL as best guess
  const isMounted = useRef(false);

  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    setRTL(elementRef.current?.matches(':dir(rtl)') ?? false);

    const handleDirectionChange = () => {
      if (isMounted.current) {
        setRTL(elementRef.current?.matches(':dir(rtl)') ?? false);
      }
    };
    attachDirectionChange(handleDirectionChange);

    return () => {
      isMounted.current = false;
      detachDirectionChange(handleDirectionChange);
    };
  }, []);

  return isRTL;
};

export { useIsRTL };
