import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import React, { forwardRef, Ref, useMemo, useCallback } from 'react';
import { useInitialize } from '../../lib/initialize';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import {
  CartesianGrid,
  Line,
  LineChart as LineChartLib,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList
} from 'recharts';
import { useTheme } from 'react-jss';
import { JSSTheme } from '@ui5/webcomponents-react/src/interfaces/JSSTheme';
import { LineChartPlaceholder } from './Placeholder';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { ChartContainer } from '../../internal/ChartContainer';

export interface LineChartProps extends RechartBaseProps {}

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

const LineRechart = forwardRef((props: LineChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    colors,
    labelKey = 'label',
    width = '300px',
    height = '300px',
    dataset,
    noLegend = false,
    valueAxisFormatter,
    categoryAxisFormatter,
    yAxisType
  } = props as LineChartProps;

  useInitialize();

  const dataKeys = dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : [];

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const onItemLegendClick = useCallback(
    (e) => {
      return {
        e,
        label: e.dataKey,
        chartType: e.type,
        color: e.color
      };
    },
    [dataset]
  );

  const onDataPointClick = useCallback(
    (e) => {
      console.log(e);
      // Necessary because onItemLegendclick calls always onDataPointClick with e = null
      return e
        ? {
            e,
            index: e.activeTooltipIndex,
            label: e.activeLabel,
            values: e.activePayload
          }
        : e;
    },
    [dataset]
  );

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      placeholder={LineChartPlaceholder}
      width={width}
      height={height}
    >
      <LineChartLib
        margin={{ right: 15 }}
        ref={chartRef}
        data={dataset}
        onClick={onDataPointClick}
        style={{ fontSize: parameters.sapUiFontSmallSize }}
      >
        <CartesianGrid vertical={true} />
        <XAxis dataKey={labelKey} />
        <YAxis type={yAxisType} />
        {dataKeys.map((key, index) => (
          <Line
            key={key}
            name={key}
            type="monotone"
            dataKey={key}
            stroke={color ? color : `var(--sapUiChartAccent${(index % 12) + 1})`}
          >
            <LabelList dataKey={key} content={CustomDataLabel} />
          </Line>
        ))}
        ){!noLegend && <Legend onClick={onItemLegendClick} />}
        <Tooltip formatter={(value, name) => [valueAxisFormatter(value), categoryAxisFormatter(name)]} />
      </LineChartLib>
    </ChartContainer>
  );
});

// @ts-ignore
LineRechart.LoadingPlaceholder = LineChartPlaceholder;

// @ts-ignore
LineRechart.defaultProps = {
  ...ChartBaseDefaultProps
};

LineRechart.displayName = 'LineRechart';

export { LineRechart };
