import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React, { FC, RefObject } from 'react';
import { IChartMeasure } from '../interfaces/IChartMeasure';
import { truncateLongLabel } from '../util/Utils';
import { SecondaryDimensionTicksXAxis } from './SecondaryDimensionXAxisTick';

interface XAxisTicksProps {
  x?: number;
  y?: number;
  payload?: any;
  config: IChartMeasure;
  level?: number;
  chartRef: RefObject<HTMLDivElement>;
}

export const XAxisTicks: FC<XAxisTicksProps> = (props: XAxisTicksProps) => {
  const { chartRef, x, y, payload, config, level = 0 } = props;
  let shouldRotate = false;
  if (chartRef.current) {
    const [firstLine, secondLine] = chartRef.current.querySelectorAll('.xAxis .recharts-cartesian-axis-ticks line');
    if (firstLine && secondLine) {
      const firstLineX = firstLine.getBoundingClientRect().x;
      const secondLineX = secondLine.getBoundingClientRect().x;
      shouldRotate = secondLineX - firstLineX <= 100;
    }
  }

  if (level > 0) {
    return <SecondaryDimensionTicksXAxis {...props} rotate={shouldRotate} />;
  }

  const formattedValue = config.formatter(payload.value);
  return (
    <g transform={`translate(${x},${y + 10})`}>
      <text
        fill={ThemingParameters.sapContent_LabelColor}
        transform={shouldRotate ? 'rotate(-35)' : undefined}
        textAnchor={shouldRotate ? 'end' : 'middle'}
      >
        {truncateLongLabel(formattedValue, 11)}
      </text>
    </g>
  );
};
