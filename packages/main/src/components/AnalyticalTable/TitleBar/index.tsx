import React, { forwardRef, isValidElement, ReactNode, ReactText, Ref } from 'react';
import { Title } from '../../../webComponents/Title';

const styles = {
  minHeight: '1.5rem',
  display: 'flex',
  alignItems: 'center'
};

export interface TitleBarProps {
  children: ReactText | ReactNode;
}

export const TitleBar = forwardRef((props: TitleBarProps, ref: Ref<HTMLDivElement>) => {
  const { children } = props;
  return (
    <div style={styles} ref={ref}>
      {typeof children === 'string' && <Title>{children}</Title>}
      {isValidElement(children) && children}
    </div>
  );
});
