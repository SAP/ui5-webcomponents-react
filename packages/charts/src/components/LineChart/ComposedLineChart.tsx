import React, { forwardRef, Ref } from 'react';
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
  const { dataKey, color, colors, type } = props as ComposedLineChartProps;

  useInitialize();

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  // const onItemLegendClick = useCallback(
  //   (e) => {
  //     return {
  //       e,
  //       label: e.dataKey,
  //       chartType: e.type,
  //       color: e.color
  //     };
  //   },
  //   [dataSet]
  // );
  //
  // const onDataPointClick = useCallback(
  //   (e) => {
  //     // Necessary because onItemLegendclick calls always onDataPointClick with e = null
  //     return e
  //       ? {
  //           e,
  //           index: e.activeTooltipIndex,
  //           label: e.activeLabel,
  //           values: e.activePayload
  //         }
  //       : e;
  //   },
  //   [dataSet]
  // );

  return <Line type={type ? type : 'monotone'} dataKey={dataKey} stroke={color ? color : colors[0]} />;
});

// @ts-ignore
ComposedLineChart.LoadingPlaceholder = LineChartPlaceholder;

// @ts-ignore
ComposedLineChart.defaultProps = {
  ...ChartBaseDefaultProps
};

ComposedLineChart.displayName = 'Line';

export { ComposedLineChart };
