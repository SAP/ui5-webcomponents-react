import { withStyles } from '@ui5-webcomponents-react/base';
import React, { FC, isValidElement, ReactNode, ReactText } from 'react';
import { Title } from '../../../lib/Title';

const styles = {
  bar: {
    minHeight: '1.5rem',
    display: 'flex',
    alignItems: 'center'
  }
};

export interface TitleBarProps {
  children: ReactText | ReactNode;
}

export const TitleBar: FC<TitleBarProps> = withStyles(styles)((props) => {
  const { classes, children } = props;
  return (
    <div className={classes.bar}>
      {typeof children === 'string' && <Title>{children}</Title>}
      {isValidElement(children) && children}
    </div>
  );
});
