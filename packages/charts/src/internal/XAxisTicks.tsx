import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { getTextWidth, truncateLongLabel } from '@ui5/webcomponents-react-charts/dist/Utils';
import React, { FC } from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';

interface XAxisTicksProps {
  visibleTicksCount?: number;
  width?: number;
  x?: number;
  y?: number;
  payload?: any;
  config: IChartMeasure;
  secondYAxisConfig?: {
    color: string;
  };
}

export const XAxisTicks: FC<XAxisTicksProps> = (props: XAxisTicksProps) => {
  const { x, y, payload, config, visibleTicksCount, width, secondYAxisConfig } = props;

  const bandWidth = width / visibleTicksCount;
  const shouldRotate = bandWidth <= 100;

  const formattedValue = config.formatter(payload.value);
  let textToDisplay = formattedValue;
  if (shouldRotate) {
    textToDisplay = truncateLongLabel(formattedValue, 11);
  } else if (getTextWidth(formattedValue) > bandWidth) {
    for (let i = `${formattedValue}`.length; i > 0; i--) {
      textToDisplay = truncateLongLabel(formattedValue, i);
      if (getTextWidth(textToDisplay) <= bandWidth) {
        break;
      }
    }
  }

  return (
    <g style={{ direction: 'ltr' }} transform={`translate(${x},${y + (secondYAxisConfig ? 0 : 10)})`}>
      <text
        fill={secondYAxisConfig?.color ?? ThemingParameters.sapContent_LabelColor}
        transform={shouldRotate ? 'rotate(-35)' : undefined}
        textAnchor={shouldRotate ? 'end' : 'middle'}
      >
        {textToDisplay}
      </text>
    </g>
  );
};
