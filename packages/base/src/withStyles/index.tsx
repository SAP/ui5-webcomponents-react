import deepMerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { ComponentType, ForwardRefExoticComponent, RefAttributes } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { createGenerateClassName } from './createGenerateClassName';

const generateClassName = createGenerateClassName();

const getStyle = (style) => (...args) => (typeof style === 'function' ? style(...args) : style);

const mergeStyles = (styles, ...newStyles) => {
  return (...args) =>
    deepMerge.all([getStyle(styles)(...args), ...newStyles.map((newStyle) => getStyle(newStyle)(...args))]);
};

const getDisplayName = (Component) => Component.displayName || Component.name || 'Component';
const wrapComponentName = (componentName) => `WithStyles(${componentName})`;

export interface WithStylesComponent extends ForwardRefExoticComponent<RefAttributes<any>> {
  InnerComponent?: ComponentType<any>;
  withCustomStyles?: (args: any[]) => WithStylesComponent;
}

export const withStyles = (styles) => (Component: ComponentType<any>) => {
  const useStyles = createUseStyles(styles, {
    generateClassName
  });

  const WithStyles: WithStylesComponent = React.forwardRef((props, ref) => {
    const classes = useStyles(props);
    const theme = useTheme();

    return <Component {...props} ref={ref} classes={classes} theme={theme} />;
  });

  WithStyles.defaultProps = Component.defaultProps;
  WithStyles.InnerComponent = Component;
  WithStyles.displayName = wrapComponentName(getDisplayName(Component));
  WithStyles.withCustomStyles = (...newStyles) => {
    return withStyles(mergeStyles(styles, ...newStyles))(Component);
  };

  hoistNonReactStatics(WithStyles, Component);
  return WithStyles;
};
