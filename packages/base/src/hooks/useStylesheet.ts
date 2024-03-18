'use client';

import type { StyleDataCSP } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import { createOrUpdateStyle, removeStyle } from '@ui5/webcomponents-base/dist/ManagedStyles.js';
import * as React from 'react';
import { useStyleContext } from '../context/StyleContext.js';

function getUseInsertionEffect(isSSR: boolean) {
  return isSSR ? React.useEffect : Reflect.get(React, 'useInsertionEffect') || React.useLayoutEffect;
}

function trackComponentStyleMount(componentMap: Map<string, number>, componentName: string) {
  if (componentMap.has(componentName)) {
    componentMap.set(componentName, componentMap.get(componentName)! + 1);
  } else {
    componentMap.set(componentName, 1);
  }
}

function trackComponentStyleUnmount(componentMap: Map<string, number>, componentName: string) {
  if (componentMap.has(componentName)) {
    componentMap.set(componentName, componentMap.get(componentName)! - 1);
  }
}

export function useStylesheet(styles: StyleDataCSP, componentName: string) {
  const styleContext = useStyleContext();
  const { staticCssInjected, componentsMap } = styleContext;

  getUseInsertionEffect(typeof window === 'undefined')(() => {
    if (!staticCssInjected) {
      createOrUpdateStyle(styles, 'data-ui5wcr-component', componentName);
      trackComponentStyleMount(componentsMap, componentName);
    }

    return () => {
      if (!staticCssInjected) {
        trackComponentStyleUnmount(componentsMap, componentName);
        const numberOfMountedComponents = componentsMap.get(componentName);
        if (typeof numberOfMountedComponents === 'number' && numberOfMountedComponents <= 0) {
          removeStyle('data-ui5wcr-component', componentName);
        }
      }
    };
  }, [styles, staticCssInjected]);
}
