import React, { forwardRef, isValidElement, ReactNode, ReactText, Ref, useRef } from 'react';
import { getRandomId } from '../../../internal/getRandomId';
import { Title } from '../../../webComponents/Title';

const styles = {
  minHeight: '1.5rem',
  display: 'flex',
  alignItems: 'center'
};

export interface TitleBarProps {
  children: ReactText | ReactNode;
  titleBarId: string;
}

export const TitleBar = forwardRef((props: TitleBarProps, ref: Ref<HTMLDivElement>) => {
  const { children, titleBarId } = props;
  return (
    <div style={styles} ref={ref} id={titleBarId}>
      {typeof children === 'string' && <Title>{children}</Title>}
      {isValidElement(children) && children}
    </div>
  );
});
