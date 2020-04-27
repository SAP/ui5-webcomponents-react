import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React, { FC, useCallback } from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';
import Label from '../internal/ChartLabel';
import { SecondaryDimensionTicksXAxis, SecondaryDimensionTicksYAxis, YAxisTicks } from '../internal/CustomElements';
import { getTextWidth, renderAxisTicks } from '../util/Utils';

interface CustomDataLabelProps {
  config: IChartMeasure;
  viewBox?: any;
  chartType: 'bar' | 'column' | 'line' | 'radar' | 'pie';
  position?: string;
  value?: any;
  children?: any;
}

export const CustomDataLabel: FC<CustomDataLabelProps> = (props: CustomDataLabelProps) => {
  const { config, chartType } = props;

  const viewBox = Label.parseViewBox(props);

  if (config.hideDataLabel) {
    return null;
  }

  if (config.DataLabel) {
    return config.DataLabel(props);
  }

  const formattedLabel = config.formatter(props.value ?? props.children);
  if (chartType === 'bar' || chartType === 'column') {
    if (viewBox.width < getTextWidth(formattedLabel)) {
      return null;
    }
    if (viewBox.height < 12) {
      return null;
    }
  }

  return (
    <Label
      fill={ThemingParameters.sapContent_LabelColor}
      viewBox={viewBox}
      {...(props as any)}
      content={undefined}
      value={formattedLabel}
    />
  );
};

export const useAxisLabel = (AxisFormatter, yAxis?) => {
  return useCallback(
    (labelProps) => {
      return yAxis ? YAxisTicks(labelProps, AxisFormatter) : renderAxisTicks(labelProps, AxisFormatter);
    },
    [AxisFormatter]
  );
};

let dimension = '';
export const useSecondaryDimensionLabel = (yAxis?: boolean, yAxisFormatter?) => {
  return useCallback((labelProps) => {
    if (dimension === labelProps.payload.value) {
      return undefined;
    } else {
      dimension = labelProps.payload.value;
      return yAxis
        ? SecondaryDimensionTicksYAxis(labelProps, yAxisFormatter)
        : SecondaryDimensionTicksXAxis(labelProps);
    }
  }, []);
};
