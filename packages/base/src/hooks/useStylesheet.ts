'use client';

import type { StyleDataCSP } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { createOrUpdateStyle, removeStyle } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import * as React from 'react';
import { useStyleContext } from '../context/StyleContext.js';

function getUseInsertionEffect(isSSR: boolean) {
  return isSSR ? React.useEffect : Reflect.get(React, 'useInsertionEffect') || React.useLayoutEffect;
}

export function useStylesheet(styles: StyleDataCSP, componentName: string) {
  const styleContext = useStyleContext();
  const { staticCssInjected } = styleContext;

  getUseInsertionEffect(typeof window === 'undefined')(() => {
    if (!staticCssInjected) {
      createOrUpdateStyle(styles, 'data-ui5wcr-component', componentName);
    }

    return () => {
      if (!staticCssInjected) {
        removeStyle('data-ui5wcr-component', componentName);
      }
    };
  }, [styles, staticCssInjected]);
}
