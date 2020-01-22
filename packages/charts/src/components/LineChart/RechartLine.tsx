import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import React, { forwardRef, Ref, useMemo, useCallback } from 'react';
import { useInitialize } from '../../lib/initialize';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import {
  ResponsiveContainer,
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
    colors,
    labelKey = 'label',
    width = '300px',
    height = '300px',
    dataset,
    loading,
    noLegend,
    valueAxisFormatter,
    categoryAxisFormatter
  } = props as LineChartProps;

  useInitialize();

  const dataKeys = Object.keys(dataset[0]).filter((key) => key !== labelKey);
  const chartRef = useConsolidatedRef<any>(ref);

  const onItemLegendClick = useCallback((e) => {
    // TODO: clickHandler items legend
  }, []);

  const onDataPointClick = useCallback((e) => {
    // TODO: Clickhandler items clicked
  }, []);

  return (
    <div style={{ width, height }}>
      <ResponsiveContainer>
        <LineChartLib ref={chartRef} data={dataset} onClick={onDataPointClick}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey={labelKey} />
          <YAxis />
          {dataKeys.map((key) => {
            return (
              <Line key={key} name={key} type="monotone" dataKey={key}>
                <LabelList dataKey={key} content={CustomDataLabel} />
              </Line>
            );
          })}
          )
          <Legend />
          <Tooltip formatter={(value, name) => [valueAxisFormatter(value), categoryAxisFormatter(name)]} />
          {!noLegend && <Legend onClick={onItemLegendClick} />}
        </LineChartLib>
      </ResponsiveContainer>
    </div>
  );
});

// @ts-ignore
LineRechart.LoadingPlaceholder = LineChartPlaceholder;

LineRechart.defaultProps = {
  ...ChartBaseDefaultProps
};

LineRechart.displayName = 'LineRechart';

export { LineRechart };
