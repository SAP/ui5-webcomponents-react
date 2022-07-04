import React, { forwardRef, ReactNode, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { Card, CardDomRef } from '../../webComponents';
import styles from './AnalyticalCard.jss';

export interface AnalyticalCardPropTypes extends CommonProps {
  /**
   * The Card header Component. Using the `AnalyticalCardHeader` is recommended.
   */
  header?: ReactNode;
  /**
   * The content of the `AnalyticalCard`.
   */
  children: ReactNode | ReactNode[];
}

const useStyles = createUseStyles(styles, { name: 'AnalyticalCard' });
/**
 * The `AnalyticalCard` is mainly used for data visualization. It consists of two areas – a header area and a chart area with a visual representation of the data.<br />
 */
const AnalyticalCard = forwardRef((props: AnalyticalCardPropTypes, ref: Ref<CardDomRef>) => {
  const { children, header, ...rest } = props;
  const classes = useStyles();

  return (
    <Card ref={ref} {...rest}>
      {header}
      <div className={classes.content} aria-role="group">
        {children}
      </div>
    </Card>
  );
});

AnalyticalCard.displayName = 'AnalyticalCard';

export { AnalyticalCard };
