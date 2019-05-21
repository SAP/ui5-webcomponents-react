import React, { FC, isValidElement, ReactNode, ReactText } from 'react';
import { Title } from '@lib/Title';
import { withStyles } from '@fiori-for-react/styles';

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
