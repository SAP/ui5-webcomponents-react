import { getRTL } from '@ui5/webcomponents-base/dist/config/RTL';
import React from 'react';

const useIsRTL = (elementRef?: React.ElementRef<any>) => {
  if (elementRef?.current?.dir === 'rtl') {
    return true;
  }

  if (getRTL()) {
    return true;
  }

  if (document.dir === 'rtl') {
    return true;
  }

  return false;
};

export { useIsRTL };
