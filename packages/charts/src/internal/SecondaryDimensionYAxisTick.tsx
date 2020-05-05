import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { truncateLongLabel } from '@ui5/webcomponents-react-charts/lib/Utils';
import React from 'react';

let lastRenderedTickValue = '';
export const SecondaryDimensionTicksYAxis = (props) => {
  const { x, y, payload, config } = props;
  const tickValue = config.formatter(payload.value);

  if (lastRenderedTickValue === tickValue && payload.index !== 0) {
    return null;
  }
  lastRenderedTickValue = tickValue;

  return (
    <g transform={`translate(${x - 35},${y})`}>
      <text fill={ThemingParameters.sapNeutralBorderColor} transform="rotate(-35)" textAnchor="end">
        {`${truncateLongLabel(tickValue)}`}
      </text>
    </g>
  );
};
