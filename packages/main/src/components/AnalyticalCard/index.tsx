import { createUseStyles } from 'react-jss';
import React, { forwardRef, ReactNode, Ref } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import clsx from 'clsx';
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
const AnalyticalCard = forwardRef((props: AnalyticalCardPropTypes, ref: Ref<HTMLDivElement>) => {
  const { children, style, className, header, ...rest } = props;
  const classes = useStyles();
  const classNameString = clsx(classes.card, className);

  return (
    <div ref={ref} className={classNameString} style={style} {...rest}>
      {header}
      <div className={classes.content}>{children}</div>
    </div>
  );
});

AnalyticalCard.displayName = 'AnalyticalCard';

export { AnalyticalCard };
