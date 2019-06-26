import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { ComponentType, ForwardRefExoticComponent, RefAttributes, RefObject } from 'react';
// @ts-ignore
import { createUseStyles, useTheme } from 'react-jss';
import { createGenerateClassName } from './createGenerateClassName';

const generateClassName = createGenerateClassName();

const getDisplayName = (Component) => Component.displayName || Component.name || 'Component';
const wrapComponentName = (componentName) => `WithStyles(${componentName})`;

export interface WithStylesComponent<T = {}> extends ForwardRefExoticComponent<RefAttributes<T>> {
  InnerComponent?: ComponentType<any>;
}

export function withStyles<T>(styles): any {
  return (Component: ComponentType<T>) => {
    const useStyles = createUseStyles(styles, {
      generateClassName
    });

    const WithStyles: WithStylesComponent<T> = React.forwardRef((props: T, ref: RefObject<any>) => {
      const classes = useStyles(props);
      const theme = useTheme();

      return <Component {...props} ref={ref} classes={classes} theme={theme} />;
    });

    WithStyles.defaultProps = Component.defaultProps;
    WithStyles.displayName = wrapComponentName(getDisplayName(Component));
    hoistNonReactStatics(WithStyles, Component);
    return WithStyles;
  };
}
