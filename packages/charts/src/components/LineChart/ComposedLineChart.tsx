import React, { forwardRef, Ref, useCallback } from 'react';
import { useInitialize } from '../../lib/initialize';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import { useTheme } from 'react-jss';
import { JSSTheme } from '@ui5/webcomponents-react/src/interfaces/JSSTheme';
import { LineChartPlaceholder } from './Placeholder';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { Line } from '../../elements/Line';
import { ComposedLineProps } from '../../interfaces/ComposedLineProps';

export interface ComposedLineChartProps extends ComposedLineProps {}

const CustomDataLabel = (props) => {
  const { x, y, stroke, value, formatter } = props;
  const { parameters } = useTheme() as JSSTheme;
  return (
    <text
      x={x}
      y={y}
      dy={-8}
      textAnchor="middle"
      style={{
        fontFamily: parameters.sapUiFontFamily,
        fill: parameters.sapUiContentLabelColor,
        fontSize: parameters.sapMFontSmallSize
      }}
    >
      {value}
    </text>
  );
};

const ComposedLineChart = forwardRef((props: ComposedLineChartProps, ref: Ref<any>) => {
  const { dataKey, color, colors, type, onDataClickHandler } = props as ComposedLineChartProps;

  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const onDataPointClick = useCallback(
    (e) => {
      console.log(e);
      if (e) {
        console.log(e);
        onDataClickHandler({
          e,
          index: e.activeTooltipIndex,
          label: e.activeLabel,
          values: e.activePayload
        });
      }
      console.log(e);
    },
    [dataKey]
  );

  let currentDataKey;
  const setDataKey = (e) => {
    currentDataKey = e.dataKey;
    console.log(currentDataKey);
  };

  return (
    <Line
      onClick={onDataPointClick}
      type={type ? type : 'monotone'}
      dataKey={dataKey}
      stroke={color ? color : colors[0]}
      activeDot={{ onMouseOver: setDataKey }}
    />
  );
});

// @ts-ignore
ComposedLineChart.LoadingPlaceholder = LineChartPlaceholder;

// @ts-ignore
ComposedLineChart.defaultProps = {
  ...ChartBaseDefaultProps
};

ComposedLineChart.displayName = 'Line';

export { ComposedLineChart };
