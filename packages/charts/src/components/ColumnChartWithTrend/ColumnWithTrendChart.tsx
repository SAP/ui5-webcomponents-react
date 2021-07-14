import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/hooks';
import { ColumnChart as ColumnChartLib } from '@ui5/webcomponents-react-charts/dist/ColumnChart';
import { ColumnWithTrendChartPlaceholder } from '@ui5/webcomponents-react-charts/dist/ColumnWithTrendChartPlaceholder';
import { LineChart as LineChartLib } from '@ui5/webcomponents-react-charts/dist/LineChart';
import React, { FC, forwardRef, Ref } from 'react';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { usePrepareTrendMeasures } from '../../hooks/usePrepareTrendMeasures';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';

interface MeasureConfig extends IChartMeasure {
  /**
   * Column Width
   */
  width?: number;
  /**
   * Column Opacity
   */
  opacity?: number;
  /**
   * Chart type
   */
  type: AvailableChartTypes;
  /**
   * column Stack ID
   * @default undefined
   */
  stackId?: string;
}

interface DimensionConfig extends IChartDimension {
  /**
   * Interval of axis label
   * @default 0
   */
  interval?: number;
}

export interface ColumnChartWithTrendProps extends IChartBaseProps {
  /**
   * An array of config objects. Each object will define one dimension of the chart.
   *
   * #### Required Properties
   * - `accessor`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * #### Optional Properties
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `interval`: number that controls how many ticks are rendered on the x axis
   *
   */
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one column in the chart.
   *
   * #### Required properties
   * - `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * #### Optional properties
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: column width, defaults to `auto`
   * - `opacity`: column opacity, defaults to `1`
   * - `stackId`: columns with the same stackId will be stacked
   *
   */
  measures: MeasureConfig[];
}

const dimensionDefaults = {
  formatter: defaultFormatter
};

const measureDefaults = {
  formatter: defaultFormatter,
  opacity: 1
};

type AvailableChartTypes = 'line' | 'column' | string;
/**
 * A `ColumnChartWithTrend` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted amd a trend line which is displayed above the column chart.
 */
const ColumnWithTrendChart: FC<ColumnChartWithTrendProps> = forwardRef(
  (props: ColumnChartWithTrendProps, ref: Ref<HTMLDivElement>) => {
    const { dataset, style } = props;

    const chartRef = useConsolidatedRef<any>(ref);

    const { dimensions, measures } = usePrepareDimensionsAndMeasures(
      props.dimensions,
      props.measures,
      dimensionDefaults,
      measureDefaults
    );

    const { lineMeasures, columnMeasures } = usePrepareTrendMeasures(measures);

    return (
      <div
        ref={chartRef}
        style={{ display: 'flex', flexDirection: 'column', height: style.height, width: style.width }}
      >
        {dataset?.length !== 0 && (
          <LineChartLib
            syncId={'trend'}
            style={{ ...style, height: `calc(${style.height} * 0.2)` }}
            dataset={dataset}
            measures={lineMeasures}
            dimensions={dimensions}
            noLegend
            chartConfig={{
              xAxisVisible: false,
              yAxisVisible: false,
              yAxisTicksVisible: false
            }}
          />
        )}
        <ColumnChartLib
          syncId={'trend'}
          trendPlaceholder={ColumnWithTrendChartPlaceholder}
          dataset={dataset}
          measures={columnMeasures}
          dimensions={dimensions}
          style={{ ...style, height: `calc(${style.height} * ${dataset?.length !== 0 ? 0.8 : 1})` }}
        />
      </div>
    );
  }
);

ColumnWithTrendChart.defaultProps = {
  noLegend: false,
  noAnimation: false
};

ColumnWithTrendChart.displayName = 'ColumnChartWithTrend';

export { ColumnWithTrendChart };
