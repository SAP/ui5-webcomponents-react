import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { ComponentType, ForwardRefExoticComponent, RefAttributes, RefObject } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useConsolidatedRef } from '../hooks/useConsolidatedRef';

const getDisplayName = (Component) => Component.displayName || Component.name || 'Component';
const wrapComponentName = (componentName) => `WithStyles(${componentName})`;

export interface WithStylesComponent<T = {}> extends ForwardRefExoticComponent<RefAttributes<T>> {
  InnerComponent?: ComponentType<any>;
}

export function withStyles<T>(styles): any {
  return (Component: ComponentType<T>) => {
    const displayName = wrapComponentName(getDisplayName(Component));

    const useStyles = createUseStyles(styles, {
      name: displayName
    });

    const WithStyles: WithStylesComponent<T> = React.forwardRef((props: T, ref: RefObject<any>) => {
      const classes = useStyles(props);
      const theme = useTheme();

      const consolidatedRef = useConsolidatedRef(ref);

      return <Component {...props} innerRef={consolidatedRef} classes={classes} theme={theme} />;
    });

    WithStyles.defaultProps = Component.defaultProps;
    WithStyles.displayName = displayName;
    WithStyles.InnerComponent = Component;
    hoistNonReactStatics(WithStyles, Component);
    return WithStyles;
  };
}
