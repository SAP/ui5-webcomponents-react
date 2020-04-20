import React, { ComponentType, CSSProperties, forwardRef, Ref, useMemo, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { ChartBaseProps } from '../interfaces/ChartBaseProps';
import { getLoadingState } from './Placeholder';
import { useSizeMonitor } from '../hooks/useSizeMonitor';

const calculateChartHeight = (props) => {
  if (props.noLegend) {
    return typeof props.height === 'string' ? props.height : `${props.height}px`;
  }
  return typeof props.height === 'string' ? `calc(${props.height} - 60px)` : `${props.height - 60}px`;
};

const styles = {
  chart: {
    '& .legend': {
      height: '55px',
      maxHeight: '55px',
      marginTop: '5px',
      overflowY: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '0 1rem',
      boxSizing: 'border-box'
    },
    '& > svg[role="img"]': {
      width: (props) => `${props.width}px`,
      height: calculateChartHeight
    }
  }
};

const useStyles = createUseStyles(styles, { name: 'ChartContainer' });

export const withChartContainer = (Component: ComponentType<any>) => {
  const ChartContainer = forwardRef((props: ChartBaseProps, ref: Ref<any>) => {
    const { style, className, tooltip, loading, datasets, slot, noLegend, ...rest } = props;

    const outerContainer = useRef(null);
    const legendRef = useRef(null);

    const classes = useStyles(props);
    let classNames = classes.chart;
    if (className) {
      classNames = `${classNames} ${className}`;
    }

    const loadingIndicator = useMemo(() => {
      return getLoadingState(loading, datasets, (Component as any).LoadingPlaceholder);
    }, [loading, datasets, Component]);

    const { height, width } = useSizeMonitor(props, outerContainer);

    const inlineStyle: CSSProperties = useMemo(() => {
      return {
        position: 'relative',
        paddingTop: '6px',
        width: typeof props.width === 'string' ? props.width : `${width}px`,
        height: typeof props.height === 'string' ? props.height : `${height}px`,
        ...style
      };
    }, [props.width, props.height, width, height, style]);

    const chartHeight = useMemo(() => (noLegend ? height : height - 60), [noLegend, height]);

    const chartWrapperStyles: CSSProperties = useMemo(() => {
      let innerChartWrapperStyles: CSSProperties = {
        position: 'relative',
        height: chartHeight >= 0 ? `${chartHeight}px` : 'auto',
        width: width ? `${width}px` : 'auto'
      };

      return innerChartWrapperStyles;
    }, [chartHeight, width]);

    return (
      <div ref={outerContainer} className={classNames} style={inlineStyle} title={tooltip} slot={slot}>
        {loadingIndicator}
        {height && datasets.length > 0 && (
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
