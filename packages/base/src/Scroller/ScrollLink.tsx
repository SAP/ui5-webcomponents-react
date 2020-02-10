import { ScrollContext } from '@ui5/webcomponents-react-base/lib/ScrollContext';
import React, { FC, useCallback, useContext, useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  inactiveClass?: string;
  activeClass?: string;
  id: string | number;
  onSetActive?: (id: string | number) => void;
  alwaysToTop?: false;
  scrollOffset?: number;
}

export const ScrollLink: FC<Props> = (props: Props) => {
  const {
    children,
    inactiveClass = '',
    activeClass = '',
    id,
    onSetActive,
    alwaysToTop = false,
    scrollOffset = 0
  } = props;

  const { selectedElementId, scrollToElementById, scrollToTop } = useContext(ScrollContext);

  const onClick = useCallback(() => {
    if (alwaysToTop) {
      scrollToTop();
    } else {
      scrollToElementById(id, scrollOffset);
    }
  }, [scrollToElementById, id]);

  useEffect(() => {
    if (selectedElementId === id && typeof onSetActive === 'function') {
      onSetActive(id);
    }
  }, [selectedElementId]);

  let classString;

  if (id === selectedElementId) {
    classString = activeClass;
  } else {
    classString = inactiveClass;
  }

  return (
    <div style={{ cursor: 'pointer' }} className={classString} onClick={onClick}>
      {children}
    </div>
  );
};
