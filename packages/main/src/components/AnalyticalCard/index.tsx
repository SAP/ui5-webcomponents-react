import { createUseStyles } from 'react-jss';
import React, { forwardRef, ReactNode, Ref } from 'react';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import clsx from 'clsx';
import { useDeprecationNoticeForTooltip } from '../../internal/useDeprecationNotiveForTooltip';

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
  const { children, style, className, tooltip, header, ...rest } = props;
  useDeprecationNoticeForTooltip('AnalyticalCard', props.tooltip);
  const classes = useStyles();
  const classNameString = clsx(classes.card, className);

  return (
    <div ref={ref} className={classNameString} style={style} title={tooltip} {...rest}>
      {header}
      <div className={classes.content}>{children}</div>
    </div>
  );
});

AnalyticalCard.displayName = 'AnalyticalCard';

export { AnalyticalCard };
