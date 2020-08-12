import { Title } from '@ui5/webcomponents-react/lib/Title';
import React, { FC, isValidElement, ReactNode, ReactText } from 'react';

const styles = {
  minHeight: '1.5rem',
  display: 'flex',
  alignItems: 'center'
};

export interface TitleBarProps {
  children: ReactText | ReactNode;
}

export const TitleBar: FC<TitleBarProps> = (props) => {
  const { children } = props;
  return (
    <div style={styles}>
      {typeof children === 'string' && <Title>{children}</Title>}
      {isValidElement(children) && children}
    </div>
  );
};
