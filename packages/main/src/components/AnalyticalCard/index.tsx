import { StyleClassHelper } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';

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
  width?: CSSProperties['width'];
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'AnalyticalCard' });

export const AnalyticalCard: FC<AnalyticalCardTypes> = forwardRef(
  (props: AnalyticalCardTypes, ref: Ref<HTMLDivElement>) => {
    const { children, style, className, tooltip, header } = props;
    const classes = useStyles(props);
    const classNameString = StyleClassHelper.of(classes.card);
    if (className) {
      classNameString.put(className);
    }
    return (
      <div ref={ref} className={classNameString.toString()} style={style} title={tooltip}>
        {header}
        <div className={classes.content}>{children}</div>
      </div>
    );
  }
);

AnalyticalCard.displayName = 'AnalyticalCard';
AnalyticalCard.defaultProps = { width: '20rem', header: null };
