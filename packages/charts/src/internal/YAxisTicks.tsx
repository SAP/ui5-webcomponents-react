import React from 'react';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { truncateLongLabel } from '../util/Utils';

export const YAxisTicks = (props) => {
  const { x, y, payload, config } = props;
  const formattedValue = config.formatter(payload.value);
  const tickValue = truncateLongLabel(formattedValue);
  return (
    <g transform={`translate(${x},${y + 3})`}>
      <text fill={ThemingParameters.sapContent_LabelColor} textAnchor={'end'}>
        {`${tickValue}`}
      </text>
    </g>
  );
};
