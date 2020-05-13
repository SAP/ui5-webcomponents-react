import { getTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';
import { withChartContainer } from '@ui5/webcomponents-react-charts/lib/withChartContainer';
import React, { FC, forwardRef, Ref, useEffect, useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartBaseProps } from '../../interfaces/ChartBaseProps';
import { InternalProps } from '../../interfaces/InternalProps';
import { useLegend, usePieLegendItemClickHandler } from '../../internal/ChartLegend';
import { getCssVariableValue } from '../../themes/Utils';
import { ChartBaseDefaultProps } from '../../util/ChartBaseDefaultProps';
import { useChartData } from '../../util/populateData';
import { formatTooltipLabelForPieCharts, useMergedConfig } from '../../util/utils_deprecated';
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
    noLegend,
    legendRef
  } = props as PieChartPropTypes & InternalProps;

  useEffect(() => {
    deprecationNotice(
      'PieChart',
      "This component is deprecated and will be removed with v0.10.0. Please use '@ui5/webcomponents-react-charts/lib/next/PieChart' instead."
    );
  }, []);

  const theme = getTheme();
  const data = useChartData(labels, datasets, colors, theme, true);

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
          color: getCssVariableValue('--sapTextColor', '#32363a'),
          formatter: (val, context) => {
            return valueAxisFormatter(val, context.dataset, context);
          }
        }
      }
    };
  }, [categoryAxisFormatter, valueAxisFormatter]);

  const mergedOptions = useMergedConfig(pieChartDefaultConfig, options);

  const chartRef = useConsolidatedRef<any>(ref);

  const handleLegendItemPress = usePieLegendItemClickHandler(chartRef, legendRef);
  useLegend(chartRef, legendRef, noLegend, handleLegendItemPress);

  return (
    <Pie
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
PieChartComponent.LoadingPlaceholder = PieChartPlaceholder;
/**
 * <code>import { PieChart } from '@ui5/webcomponents-react-charts/lib/PieChart';</code>
 * <br />
 * <b>This component is deprecated and will be removed with v0.10.0. Please use [this component](https://sap.github.io/ui5-webcomponents-react/?path=/docs/charts-piechart) instead.</b>
 */
const PieChart: FC<PieChartPropTypes> = withChartContainer(PieChartComponent);

PieChart.defaultProps = {
  ...ChartBaseDefaultProps
};
PieChart.displayName = 'PieChart';

export { PieChart };
