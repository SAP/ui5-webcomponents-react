import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React, { FC } from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';
import { getTextWidth } from '../util/Utils';
import Label from './ChartLabel';

interface CustomDataLabelProps {
  config: IChartMeasure;
  viewBox?: any;
  chartType: 'bar' | 'column' | 'line' | 'radar' | 'pie';
  position?: string;
  value?: any;
  children?: any;
}

export const ChartDataLabel: FC<CustomDataLabelProps> = (props: CustomDataLabelProps) => {
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
