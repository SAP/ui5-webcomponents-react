import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import React, { CSSProperties, FC, forwardRef, ReactNode, ReactNodeArray, Ref, useMemo } from 'react';
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

/**
 * <code>import { AnalyticalCard } from '@ui5/webcomponents-react/lib/AnalyticalCard';</code>
 */
export const AnalyticalCard: FC<AnalyticalCardTypes> = forwardRef(
  (props: AnalyticalCardTypes, ref: Ref<HTMLDivElement>) => {
    const { children, style, className, tooltip, header, width } = props;
    const classes = useStyles();
    const classNameString = StyleClassHelper.of(classes.card);
    if (className) {
      classNameString.put(className);
    }

    const analyticalCardStyles = useMemo(() => {
      return {
        width,
        ...style
      };
    }, [style, width]);

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <div
        ref={ref}
        className={classNameString.toString()}
        style={analyticalCardStyles}
        title={tooltip}
        {...passThroughProps}
      >
        {header}
        <div className={classes.content}>{children}</div>
      </div>
    );
  }
);

AnalyticalCard.displayName = 'AnalyticalCard';
AnalyticalCard.defaultProps = { width: '20rem', header: null };
