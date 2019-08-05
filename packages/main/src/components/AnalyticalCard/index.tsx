import { StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, FC, forwardRef, ReactNode, ReactNodeArray, Ref } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';

import styles from './AnalyticalCard.jss';
import { createUseStyles } from 'react-jss';

export interface AnalyticalCardTypes extends CommonProps {
  /**
   * Render Function for Header Content
   * This function will pass two parameters: theme and Content Density.
   * Expect to return a CardHeader.
   */
  header: ReactNode | ReactNodeArray;
  /**
   * Expected one or more React Components
   */
  children?: ReactNode | ReactNodeArray;
  width?: CSSProperties['width'];
}

export interface AnalyticalCardPropsInternal extends AnalyticalCardTypes, ClassProps {
  theme?: JSSTheme;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'AnalyticalCard' });

export const AnalyticalCard: FC<AnalyticalCardTypes> = forwardRef((props: AnalyticalCardTypes, ref: Ref<any>) => {
  const { children, style, className, tooltip, innerRef, header } = props as AnalyticalCardPropsInternal;
  const classes = useStyles(props);
  const classNameString = StyleClassHelper.of(classes.card);
  if (className) {
    classNameString.put(className);
  }
  return (
    <div ref={innerRef} className={classNameString.toString()} style={style} title={tooltip}>
      {header}
      <div className={classes.content}>{children}</div>
    </div>
  );
});

AnalyticalCard.defaultProps = { width: '20rem', header: null };
