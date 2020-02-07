import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { withChartContainer } from '@ui5/webcomponents-react-charts/lib/withChartContainer';
import bestContrast from 'get-best-contrast-color';
import React, { FC, forwardRef, Ref, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { DEFAULT_OPTIONS } from '../../config';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { InternalProps } from '../../interfaces/InternalProps';
import { useLegend, useLegendItemClickHandler } from '../../internal/ChartLegend';
import { getCssVariableValue } from '../../themes/Utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import {
  formatAxisCallback,
  formatDataLabel,
  formatTooltipLabel,
  getTextHeight,
  getTextWidth,
  useMergedConfig
} from '../../util/Utils';
import { ColumnChartPlaceholder } from './Placeholder';

export interface ColumnChartPropTypes extends ChartBaseProps {}

const ColumnChartComponent = forwardRef((props: ColumnChartPropTypes, ref: Ref<any>) => {
  const {
    labels,
    datasets,
    categoryAxisFormatter,
    valueAxisFormatter,
    getDatasetAtEvent,
    getElementAtEvent,
    colors,
    options,
    width,
    height,
    noLegend,
    legendRef
  } = props as ColumnChartPropTypes & InternalProps;

  const theme: any = useTheme();
  const data = useChartData(labels, datasets, colors, theme.theme);

  const chartRef = useConsolidatedRef<any>(ref);

  const handleLegendItemPress = useLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  const columnChartDefaultConfig = useMemo(() => {
    return {
      scales: {
        xAxes: [
          {
            ...DEFAULT_OPTIONS.scales.xAxes[0],
            ticks: {
              callback: formatAxisCallback(categoryAxisFormatter)
            }
          }
        ],
        yAxes: [
          {
            ...DEFAULT_OPTIONS.scales.yAxes[0],
            ticks: {
              ...DEFAULT_OPTIONS.scales.yAxes[0].ticks,
              callback: formatAxisCallback(valueAxisFormatter)
            }
          }
        ]
      },
      tooltips: {
        callbacks: {
          label: formatTooltipLabel(categoryAxisFormatter, valueAxisFormatter)
        }
      },
      plugins: {
        datalabels: {
          display: (context) => {
            const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
            const dataMeta = datasetMeta.data[context.dataIndex];
            const height = dataMeta._view.base - dataMeta._view.y; // offset
            if (height < getTextHeight() + 6) {
              return false;
            }
            const formattedValue = valueAxisFormatter(
              context.dataset.data[context.dataIndex],
              context.dataset,
              context
            );
            const textWidth = getTextWidth(formattedValue);
            return textWidth < dataMeta._view.width;
          },
          anchor: 'end',
          align: 'start',
          formatter: formatDataLabel(valueAxisFormatter),
          color: (context) => {
            const datasetMeta = context.chart.getDatasetMeta(context.datasetIndex);
            const dataMeta = datasetMeta.data[context.dataIndex];
            return bestContrast(dataMeta._view.backgroundColor, [
              getCssVariableValue('--sapUiBaseText', '#32363a'),
              getCssVariableValue('--sapUiContentContrastTextColor', '#fff')
            ]);
          }
        }
      }
    };
  }, [categoryAxisFormatter, valueAxisFormatter]);

  const mergedOptions = useMergedConfig(columnChartDefaultConfig, options);

  return (
    <Bar
      ref={chartRef}
      data={data}
      height={height}
      width={width}
      options={mergedOptions}
      getDatasetAtEvent={getDatasetAtEvent}
      getElementAtEvent={getElementAtEvent}
    />
  );
});
// @ts-ignore
ColumnChartComponent.LoadingPlaceholder = ColumnChartPlaceholder;
/**
 * <code>import { ColumnChart } from '@ui5/webcomponents-react-charts/lib/ColumnChart';</code>
 */
const ColumnChart: FC<ColumnChartPropTypes> = withChartContainer(ColumnChartComponent);

ColumnChart.defaultProps = {
  ...ChartBaseDefaultProps
};
ColumnChart.displayName = 'ColumnChart';

export { ColumnChart };
