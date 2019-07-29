import React, { ComponentType, CSSProperties, forwardRef, Ref, useMemo, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { ChartBaseProps } from '../interfaces/ChartBaseProps';
import { getLoadingState } from './Placeholder';

const chartHeight = (props) => {
  if (props.noLegend) {
    return `${props.height}px`;
  }
  return `${props.height - 60}px`;
};

const styles = {
  chart: {
    '& svg': {
      width: (props) => `${props.width}px`,
      height: chartHeight
    },
    '& .legend': {
      height: '55px',
      maxHeight: '55px',
      marginTop: '5px',
      overflowY: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '0 1rem',
      boxSizing: 'border-box'
    }
  }
};

const useStyles = createUseStyles(styles, { name: 'ChartContainer' });

export const withChartContainer = (Component: ComponentType<any>) => {
  const ChartContainer = forwardRef((props: ChartBaseProps, ref: Ref<any>) => {
    const { style, className, tooltip, loading, datasets, slot, noLegend, height, width, ...rest } = props;

    const classes = useStyles(props);
    let classNames = classes.chart;
    if (className) {
      classNames = `${classNames} ${className}`;
    }

    const loadingIndicator = useMemo(() => {
      return getLoadingState(loading, datasets, (Component as any).LoadingPlaceholder);
    }, [loading, datasets, Component]);

    const inlineStyle: CSSProperties = useMemo(
      () => ({
        position: 'relative',
        paddingTop: '6px',
        width: `${width}px`,
        height: `${height}px`,
        ...style
      }),
      [width, height, style]
    );

    const chartHeight = useMemo(() => (noLegend ? height : height - 60), [noLegend, height]);

    const chartWrapperStyles: CSSProperties = useMemo(
      () => ({ position: 'relative', height: `${chartHeight}px`, width: `${width}px` }),
      [chartHeight, width]
    );

    const legendRef = useRef(null);
    return (
      <div className={classNames} style={inlineStyle} title={tooltip} slot={slot}>
        {loadingIndicator}
        {datasets.length > 0 && (
          <div style={chartWrapperStyles}>
            <Component
              {...rest}
              noLegend={noLegend}
              height={chartHeight}
              width={width}
              ref={ref}
              datasets={datasets}
              loading={loading}
              legendRef={legendRef}
            />
          </div>
        )}
        <div ref={legendRef} className="legend" />
      </div>
    );
  });

  ChartContainer.defaultProps = Component.defaultProps;
  ChartContainer.displayName = Component.displayName;

  return ChartContainer;
};
