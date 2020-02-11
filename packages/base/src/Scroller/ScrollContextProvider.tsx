import { ScrollContext } from '@ui5/webcomponents-react-base/lib/ScrollContext';
import React, { FC, ReactNode, RefObject, useMemo } from 'react';

interface Props {
  children: ReactNode;
  scrollContainer: RefObject<any>;
  registerElement: (id: string) => void;
  unregisterElement: (id: string) => void;
  scrollToElementById: (id: string) => void;
  selectedElementId: string;
  scrollToTop: () => void;
}

export const ScrollContentProvider: FC<Props> = (props: Props) => {
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
};
