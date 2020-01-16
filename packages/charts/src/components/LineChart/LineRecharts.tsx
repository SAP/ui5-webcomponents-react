import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { withChartContainer } from '@ui5/webcomponents-react-charts/lib/withChartContainer';
import { JSSTheme } from '@ui5/webcomponents-react/interfaces/JSSTheme';
import React, { forwardRef, Ref, useMemo, useCallback } from 'react';
import { useTheme } from 'react-jss';
import {
  CartesianGrid,
  LabelList,
  Legend,
  Line,
  LineChart as LineChartLib,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { InternalProps } from '../../interfaces/InternalProps';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { LineChartPlaceholder } from './Placeholder';

export interface LineChartPropTypes extends ChartBaseProps {}

const CustomDataLabel = (props) => {
  const { x, y, stroke, value, formatter } = props;
  const { parameters } = useTheme() as JSSTheme;
  return (
    <text
      x={x}
      y={y}
      dy={-8}
      fill={stroke}
      textAnchor="middle"
      style={{
        fontFamily: parameters.sapUiFontFamily,
        fill: parameters.sapUiContentLabelColor,
        fontSize: parameters.sapMFontSmallSize
      }}
    >
      {formatter(value)}
    </text>
  );
};

const CustomTick = (props) => {
  const { x, y, stroke, payload } = props;
  const { parameters } = useTheme() as JSSTheme;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={8}
        textAnchor="middle"
        style={{
          fontFamily: parameters.sapUiFontFamily,
          color: parameters.sapUiTextColor,
          fontWeight: 'bold',
          fontSize: parameters.sapUiFontSmallSize
        }}
      >
        {payload.value}
      </text>
    </g>
  );
};

const LineChartComponent = forwardRef((props: LineChartPropTypes, ref: Ref<any>) => {
  const {
    labels,
    datasets,
    colors,
    options,
    valueAxisFormatter,
    categoryAxisFormatter,
    getElementAtEvent,
    getDatasetAtEvent,
    width,
    height,
    noLegend,
    legendRef
  } = props as LineChartPropTypes & InternalProps;

  useInitialize();

  const { theme, parameters }: any = useTheme();

  const chartRef = useConsolidatedRef<any>(ref);

  // const handleLegendItemPress = useLegendItemClickHandler(chartRef, legendRef);
  // useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  // TODO: I'm currently mapping the chart.js structure into recharts. Should we keep the API or do a breaking Change?
  const internalData = useMemo(
    () =>
      labels.map((label, index) => {
        return datasets.reduce(
          (acc, val) => {
            return {
              ...acc,
              [val.label]: { value: val.data[index] }
            };
          },
          { xLabel: label }
        );
      }),
    [labels, datasets]
  );

  // TODO: Click handler for elements
  const onDataPointClick = useCallback((e) => {
    debugger;
  }, []);

  const onLegendItemClick = useCallback((e) => {
    // TODO we used to hide the data set on legend click
  }, []);
  console.log(internalData);

  return (
    <div style={{ width: width, height: height }}>
      <ResponsiveContainer width={width} height={height}>
        <LineChartLib
          ref={chartRef}
          data={internalData}
          style={{ fontSize: parameters.sapUiFontSmallSize }}
          onClick={onDataPointClick}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="xLabel"
            tick={<CustomTick />}
            tickFormatter={categoryAxisFormatter}
            interval={'preserveStartEnd'}
          />
          <YAxis
            tickFormatter={valueAxisFormatter}
            tick={{
              fontFamily: parameters.sapUiFontFamily,
              fill: parameters.sapUiTextColor,
              fontWeight: 'bold',
              fontSize: parameters.sapUiFontSmallSize
            }}
          />
          {datasets.map(({ label, color }, index) => (
            <Line
              type="monotone"
              key={label}
              name={label}
              dataKey={`${label}.value`}
              stroke={color ? color : `var(--sapUiChartAccent${(index % 12) + 1})`}
            >
              <LabelList dataKey={`${label}.value`} content={CustomDataLabel} formatter={valueAxisFormatter} />
            </Line>
          ))}
          <Tooltip formatter={(value, name) => [valueAxisFormatter(value), categoryAxisFormatter(name)]} />
          {!noLegend && <Legend onClick={onLegendItemClick} />}
        </LineChartLib>
      </ResponsiveContainer>
    </div>
  );
});
// @ts-ignore
LineChartComponent.LoadingPlaceholder = LineChartPlaceholder;

const LineChart = withChartContainer(LineChartComponent);

LineChart.defaultProps = {
  ...ChartBaseDefaultProps
};
LineChart.displayName = 'LineChart';

export { LineChart };
