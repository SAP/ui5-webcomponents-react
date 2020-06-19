import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import { XAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/XAxisTicks';
import { YAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/YAxisTicks';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart as ScatterChartLib,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis
} from 'recharts';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useLongestYAxisLabel } from '../../hooks/useLongestYAxisLabel';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity, xAxisPadding } from '../../internal/staticProps';
import { useObserveXAxisHeights } from '../../hooks/useObserveXAxisHeights';

interface MeasureConfig extends Omit<IChartMeasure, 'color' | 'hideDataLabel' | 'DataLabel'> {
  /**
   * Defines axis of measures
   */
  axis: 'x' | 'y' | 'z';
}

interface ScatterDataObject {
  /**
   * Defines label of the dataset
   */
  label?: string;
  /**
   * Contains the data of the chart
   */
  data?: any[];
  /**
   * Any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   */
  color?: CSSProperties['color'];
  /**
   * Defines opacity of the displayed dataset
   * @default 1
   */
  opacity?: number;
}

export interface ScatterChartProps extends IChartBaseProps {
  /**
   * An array of dataset objects. Each object defines a dataset which is displayed.
   *
   * <h4>Optional properties</h4>
   *  - `label`: string containing the label of the dataset which is also displayed in the legend.
   *  - `data`: array of objects which contains the data.
   *  - `color`: any valid CSS color or CSS variable. Defaults to the `sapChart_Ordinal` colors.
   *  - ´opacity´: number contains value of opacity of dataset
   *
   *  Example of dataset:
   *    <code>
   *      [
   *        {
   *         label: 'America',
   *         opacity: 0.7,
   *         data: [
   *           {
   *             users: 120,
   *             sessions: 200,
   *             volume: 302
   *           },
   *           {
   *             users: 20,
   *             sessions: 230,
   *             volume: 392
   *           }
   *         ]
   *        }
   *      ]
   *    </code>
   */
  dataset?: ScatterDataObject[];
  /**
   * An array of config objects. Each object is defining one axis in the chart.
   *
   * <h4>Required properties</h4>
   *  - `accessor`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
   *     Can also be a getter.
   *  - `axis`: string containing definition of axis. Must be x, y or z data to the axis.
   *
   * <h4>Optional properties</h4>
   *  - `label`: Label to display in tooltips. Falls back to the <code>accessor</code> if not present.
   *  - `formatter`: function will be called for each data label and allows you to format it according to your needs. Also addresses labels of axis.
   */
  measures?: MeasureConfig[];
}

const measureDefaults = {
  formatter: defaultFormatter
};

/**
 * <code>import { ScatterChart } from '@ui5/webcomponents-react-charts/lib/ScatterChart';</code>
 */
const ScatterChart: FC<ScatterChartProps> = forwardRef((props: ScatterChartProps, ref: Ref<HTMLDivElement>) => {
  const {
    dataset,
    loading,
    noLegend = false,
    noAnimation = false,
    onDataPointClick,
    onLegendClick,
    style,
    className,
    tooltip,
    slot
  } = props;

  const chartConfig = useMemo(() => {
    return {
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      legendPosition: 'bottom',
      legendHorizontalAlign: 'left',
      zoomingTool: false,
      resizeDebounce: 250,
      ...props.chartConfig
    };
  }, [props.chartConfig]);

  const { measures } = usePrepareDimensionsAndMeasures([], props.measures, {}, measureDefaults);

  const tooltipValueFormatter = useTooltipFormatter(measures);
  const chartRef = useConsolidatedRef<any>(ref);
  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex) => {
      if (eventOrIndex.dataKey && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(
            {},
            {
              value: eventOrIndex.value,
              dataKey: eventOrIndex.dataKey,
              dataIndex: eventOrIndex.index,
              payload: eventOrIndex.payload
            }
          )
        );
      }
    },
    [onDataPointClick]
  );
  const isBigDataSet = dataset?.length > 30 ?? false;

  const xMeasure = measures.find(({ axis }) => axis === 'x');
  const yMeasure = measures.find(({ axis }) => axis === 'y');
  const zMeasure = measures.find(({ axis }) => axis === 'z');

  const [yAxisWidth, legendPosition] = useLongestYAxisLabel(dataset?.[0].data, [yMeasure]);
  const xAxisHeights = useObserveXAxisHeights(chartRef, 1);
  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={LineChartPlaceholder}
      ref={chartRef}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
    >
      <ScatterChartLib
        margin={marginChart}
        onClick={onDataPointClickInternal}
        className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {chartConfig.xAxisVisible && (
          <XAxis
            type={'number'}
            key={xMeasure?.accessor}
            name={xMeasure?.label}
            dataKey={xMeasure?.accessor}
            xAxisId={0}
            interval={xMeasure?.interval ?? (isBigDataSet ? 'preserveStart' : 0)}
            tick={<XAxisTicks config={xMeasure} />}
            padding={xAxisPadding}
            height={xAxisHeights[0]}
            label={xMeasure?.label ? { value: xMeasure?.label, dy: 15, position: 'insideRight' } : 0}
          />
        )}
        <YAxis
          label={yMeasure?.label ? { value: yMeasure?.label, angle: -90, position: 'insideLeft' } : false}
          type={'number'}
          name={yMeasure?.label}
          axisLine={chartConfig.yAxisVisible}
          tickLine={tickLineConfig}
          key={yMeasure?.accessor}
          dataKey={yMeasure?.accessor}
          tickFormatter={yMeasure?.formatter}
          interval={0}
          tick={<YAxisTicks config={yMeasure} />}
          width={yMeasure?.label ? yAxisWidth + 10 : yAxisWidth}
          margin={yMeasure?.label ? { left: 200 } : 0}
        />
        <ZAxis name={zMeasure?.label} dataKey={zMeasure?.accessor} range={[0, 5000]} key={zMeasure?.accessor} />
        {dataset?.map((dataSet, index) => {
          return (
            <Scatter
              opacity={dataSet.opacity}
              data={dataSet?.data}
              name={dataSet?.label}
              fill={dataSet?.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              isAnimationActive={noAnimation === false}
            />
          );
        })}
        {!noLegend && (
          <Legend
            verticalAlign={chartConfig.legendPosition}
            align={chartConfig.legendHorizontalAlign}
            onClick={onItemLegendClick}
            wrapperStyle={legendPosition}
          />
        )}
        {chartConfig.referenceLine && (
          <ReferenceLine
            stroke={chartConfig.referenceLine.color}
            y={chartConfig.referenceLine.value}
            label={chartConfig.referenceLine.label}
            yAxisId={'left'}
          />
        )}
        <Tooltip cursor={tooltipFillOpacity} formatter={tooltipValueFormatter} contentStyle={tooltipContentStyle} />
      </ScatterChartLib>
    </ChartContainer>
  );
});

ScatterChart.displayName = 'ScatterChart';

export { ScatterChart };
