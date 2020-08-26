import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';

import styles from './AnalyticalCard.jss';

export interface AnalyticalCardTypes extends CommonProps {
  /**
   * The Card header Component, using the AnalyticalCardHeader is recommended.
   */
  header?: ReactNode;
  /**
   * Expected one or more React Components
   */
  children: ReactNode | ReactNodeArray;
}

const useStyles = createComponentStyles(styles, { name: 'AnalyticalCard' });

const AnalyticalCard: FC<AnalyticalCardTypes> = forwardRef((props: AnalyticalCardTypes, ref: Ref<HTMLDivElement>) => {
  const { children, style, className, tooltip, header } = props;
  const classes = useStyles();
  const classNameString = StyleClassHelper.of(classes.card);
  if (className) {
    classNameString.put(className);
  }

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div ref={ref} className={classNameString.toString()} style={style} title={tooltip} {...passThroughProps}>
      {header}
      <div className={classes.content}>{children}</div>
    </div>
  );
});

AnalyticalCard.displayName = 'AnalyticalCard';

export { AnalyticalCard };
