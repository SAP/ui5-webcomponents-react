import React, { ComponentType } from 'react';
import { withStyles } from '@fiori-for-react/styles';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { mergeConfig } from '../../util/utils';
import { Loader } from '../Loader';

const styles = () => ({
  chart: {
    position: 'relative',
    paddingTop: '6px',
    width: (props) => `${props.width}px`,
    height: (props) => `${props.height}px`,
    '& canvas': {
      maxWidth: (props) => `${props.width}px`,
      maxHeight: (props) => `${props.height}px`
    },
    '& svg': {
      width: (props) => `${props.width}px`,
      height: (props) => `${props.height}px`
    }
  }
});

export const withChartContainer = (Component: ComponentType<any>) => {
  const ChartContainer = (props) => {
    // @ts-ignore
    const { options, internalNoMerge, style, className, tooltip, loading, datasets, ...rest } = props as ChartBaseProps;
    const mergedOptions = internalNoMerge ? options : mergeConfig(DEFAULT_OPTIONS, options);

    let classes = props.classes.chart;
    if (className) {
      classes = `${classes} ${className}`;
    }

    return (
      <div className={classes} style={style} title={tooltip}>
        {loading && datasets.length > 0 && <Loader />}
        {/*
        // @ts-ignore */}
        {loading && datasets.length === 0 && <Component.LoadingPlaceholder />}
        {datasets.length > 0 && <Component {...rest} datasets={datasets} loading={loading} options={mergedOptions} />}
      </div>
    );
  };

  ChartContainer.defaultProps = Component.defaultProps;
  hoistNonReactStatics(ChartContainer, Component);

  return withStyles(styles)(ChartContainer);
};
