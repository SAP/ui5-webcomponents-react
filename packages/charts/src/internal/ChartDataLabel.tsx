import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { getTextWidth } from '@ui5/webcomponents-react-charts/dist/Utils';
import React, { createElement, FC } from 'react';
import { Label } from 'recharts';
import { IChartMeasure } from '../interfaces/IChartMeasure';

interface CustomDataLabelProps {
  config: IChartMeasure;
  viewBox?: any;
  chartType: 'bar' | 'column' | 'line' | 'radar' | 'pie' | 'area';
  position?: string;
  value?: any;
  children?: any;
}

export const ChartDataLabel: FC<CustomDataLabelProps> = (props: CustomDataLabelProps) => {
  const { config, chartType, viewBox } = props;
  if (config.hideDataLabel) {
    return null;
  }

  if (config.DataLabel) {
    return createElement(config.DataLabel, props);
  }

  const formattedLabel = config.formatter(props.value ?? props.children);
  if (chartType === 'bar' || chartType === 'column') {
    if (Math.abs(viewBox.width) < getTextWidth(formattedLabel)) {
      return null;
    }
    if (Math.abs(viewBox.height) < 12) {
      return null;
    }
  }

  let fill = ThemingParameters.sapContent_ContrastTextColor;
  if (['area', 'line', 'radar'].includes(chartType)) {
    fill = ThemingParameters.sapTextColor; // label is displayed outside of the colored element
  }

  return (
    <Label
      viewBox={viewBox}
      {...(props as any)}
      fill={fill}
      stroke={'none'}
      content={undefined}
      value={formattedLabel}
    />
  );
};
