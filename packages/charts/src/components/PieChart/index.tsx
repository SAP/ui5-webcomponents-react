import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import React, { forwardRef, Ref, RefObject, useMemo, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { useTheme } from 'react-jss';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { useLegend, usePieLegendItemClickHandler } from '../../internal/ChartLegend';
import { withChartContainer } from '../../internal/withChartContainer';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatTooltipLabelForPieCharts, useMergedConfig } from '../../util/utils';
import { PieChartPlaceholder } from './Placeholder';

export interface PieChartPropTypes extends ChartBaseProps {}

const PieChartComponent = forwardRef((props: PieChartPropTypes, ref: Ref<any>) => {
  const {
    labels,
    datasets,
    colors,
    categoryAxisFormatter,
    getDatasetAtEvent,
    getElementAtEvent,
    valueAxisFormatter,
    options,
    width,
    height,
    noLegend
  } = props;

  const theme: any = useTheme();
  const data = useChartData(labels, datasets, colors, theme.theme, true);

  const pieChartDefaultConfig = useMemo(() => {
    return {
      tooltips: {
        callbacks: {
          label: formatTooltipLabelForPieCharts(categoryAxisFormatter, valueAxisFormatter)
        }
      },
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: (context) => {
            return /* sapUiBaseText */ '#32363a';
          },
          formatter: valueAxisFormatter
        }
      }
    };
  }, [categoryAxisFormatter, valueAxisFormatter]);

  const mergedOptions = useMergedConfig(pieChartDefaultConfig, options);

  const chartRef = useConsolidatedRef<any>(ref);
  const legendRef: RefObject<HTMLDivElement> = useRef();

  const handleLegendItemPress = usePieLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  return (
    <>
      <Pie
        ref={chartRef}
        data={data}
        height={height}
        width={width}
        options={mergedOptions}
        getDatasetAtEvent={getDatasetAtEvent}
        getElementAtEvent={getElementAtEvent}
      />
      <div ref={legendRef} className="legend" />
    </>
  );
});
// @ts-ignore
PieChartComponent.LoadingPlaceholder = PieChartPlaceholder;

const PieChart = withChartContainer(PieChartComponent);

PieChart.defaultProps = {
  ...ChartBaseDefaultProps
};
PieChart.displayName = 'PieChart';

export { PieChart };
