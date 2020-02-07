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
  LabelList,
  Brush
} from 'recharts';
import { useTheme } from 'react-jss';
import { JSSTheme } from '@ui5/webcomponents-react/src/interfaces/JSSTheme';
import { LineChartPlaceholder } from './Placeholder';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { ChartContainer } from '../../internal/ChartContainer';

export interface LineChartProps extends RechartBaseProps {}

const CustomDataLabel = (props) => {
  const { x, y, value } = props;
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
    labelKey = 'label',
    width = '300px',
    height = '300px',
    dataset,
    noLegend = false,
    dataPointClickHandler,
    legendClickHandler
  } = props as LineChartProps;

  useInitialize();
  const dataKeys = dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : [];

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const onItemLegendClick = useCallback(
    (e) => {
      legendClickHandler({
        dataKey: e.dataKey,
        value: e.value,
        chartType: e.type,
        color: e.color,
        payload: e.payload
      });
    },
    [dataset]
  );

  const onDataPointClick = useCallback(
    (e) => {
      if (e) {
        const dataPoint = e.activePayload.filter((dataElement) => dataElement.dataKey === currentDataKey);
        dataPoint.length > 0 &&
          dataPointClickHandler({
            xValue: dataPoint[0].payload.xValue,
            name: dataPoint[0].name,
            value: dataPoint[0].value,
            payload: dataPoint[0].payload
          });
      }
    },
    [dataset]
  );

  let currentDataKey;
  const setDataKey = (e) => {
    currentDataKey = e.dataKey;
  };

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
        <YAxis />
        {dataKeys.map((key, index) => (
          <Line
            onClick={onDataPointClick}
            key={key}
            name={key}
            type="monotone"
            dataKey={key}
            stroke={color ? color : `var(--sapUiChartAccent${(index % 12) + 1})`}
            activeDot={{ onMouseOver: setDataKey }}
          >
            <LabelList dataKey={key} content={CustomDataLabel} />
          </Line>
        ))}
        ){!noLegend && <Legend onClick={onItemLegendClick} />}
        <Tooltip />
        <Brush height={30} />
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
