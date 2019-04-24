import React, { ComponentType } from 'react';
import { withStyles } from '@fiori-for-react/core/utils/withStyles';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { DEFAULT_OPTIONS } from '../../config';
import { mergeConfig } from '../../util/utils';

const styles = () => ({
  chart: {
    '& canvas': {
      maxWidth: (props) => `${props.width}px`,
      maxHeight: (props) => `${props.height}px`
    }
  }
});

export const withChartContainer = (Component: ComponentType<any>) => {
  const ChartContainer = (props) => {
    const { options, internalNoMerge, style, className, tooltip, ...rest } = props;
    const mergedOptions = internalNoMerge ? options : mergeConfig(DEFAULT_OPTIONS, options);

    let classes = props.classes.chart;
    if (className) {
      classes = `${classes} ${className}`;
    }

    return (
      <div className={classes} style={style} title={tooltip}>
        <Component {...rest} options={mergedOptions} />
      </div>
    );
  };

  ChartContainer.defaultProps = Component.defaultProps;
  hoistNonReactStatics(ChartContainer, Component);

  return withStyles(styles)(ChartContainer);
};
