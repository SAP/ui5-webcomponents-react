import React, { useMemo } from 'react';
import { ScrollContext } from './ScrollContext';

export function ScrollContentProvider(props) {
  const {
    children,
    scrollContainer,
    registerElement,
    unregisterElement,
    scrollToElementById,
    selectedElementId,
    scrollToTop
  } = props;
  const context = useMemo(() => {
    return {
      scrollContainer,
      registerElement,
      unregisterElement,
      scrollToElementById,
      selectedElementId,
      scrollToTop
    };
  }, [scrollContainer, registerElement, unregisterElement, scrollToElementById, selectedElementId, scrollToTop]);

  return <ScrollContext.Provider value={context}>{children}</ScrollContext.Provider>;
}
