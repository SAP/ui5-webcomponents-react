import React, { ComponentType, CSSProperties, forwardRef, Ref } from 'react';
// @ts-ignore
import { createUseStyles } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { getLoadingState } from '../Placeholder';

const styles = {
  chart: {
    '& canvas': {
      maxWidth: (props) => `${props.width}px`,
      maxHeight: (props) => `${props.height}px`
    },
    '& svg': {
      width: (props) => `${props.width}px`,
      height: (props) => `${props.height}px`
    }
  }
};

const useStyles = createUseStyles(styles);

export const withChartContainer = (Component: ComponentType<any>) => {
  const ChartContainer = forwardRef((props: ChartBaseProps, ref: Ref<any>) => {
    const { style, className, tooltip, loading, datasets, slot, ...rest } = props;

    const classes = useStyles(props);
    let classNames = classes.chart;
    if (className) {
      classNames = `${classNames} ${className}`;
    }

    const loadingIndicator = getLoadingState(loading, datasets, (Component as any).LoadingPlaceholder);

    const inlineStyle: CSSProperties = {
      position: 'relative',
      paddingTop: '6px',
      width: `${props.width}px`,
      height: `${props.height}px`,
      ...style
    };

    return (
      <div className={classNames} style={inlineStyle} title={tooltip} slot={slot}>
        {loadingIndicator}
        {datasets.length > 0 && <Component {...rest} ref={ref} datasets={datasets} loading={loading} />}
      </div>
    );
  });

  ChartContainer.defaultProps = Component.defaultProps;
  ChartContainer.displayName = Component.displayName;

  return ChartContainer;
};
