import type { ReactNode } from 'react';
import React, { forwardRef, isValidElement } from 'react';
import { Title } from '../../../webComponents/Title/index.js';

const styles = {
  minHeight: '1.5rem',
  display: 'flex',
  alignItems: 'center'
};

export interface TitleBarProps {
  children: ReactNode;
  titleBarId: string;
}

export const TitleBar = forwardRef<HTMLDivElement, TitleBarProps>((props, ref) => {
  const { children, titleBarId } = props;
  return (
    <div style={styles} ref={ref} id={titleBarId}>
      {typeof children === 'string' && <Title>{children}</Title>}
      {isValidElement(children) && children}
    </div>
  );
});

TitleBar.displayName = 'TitleBar';
