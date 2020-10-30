import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL';
import React, { useState } from 'react';

const useIsRTL = (elementRef?: React.ElementRef<any>) => {
  const [isRTL, setRTL] = useState(false);
  const targets = [document.documentElement, document.body];
  const config = { attributes: true, childList: true, characterData: true };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'dir') {
        setRTL(mutation.target?.dir === 'rtl');
      }
    });
  });

  targets.forEach((target) => {
    observer.observe(target, config);
  });

  if (elementRef?.current?.dir === 'rtl') {
    return true;
  }

  if (getRTL()) {
    return true;
  }

  return isRTL;
};

export { useIsRTL };
