import { Title } from '@ui5/webcomponents-react/lib/Title';
import React, { forwardRef, isValidElement, ReactNode, ReactText, Ref } from 'react';

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
