import React from 'react';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export const YAxisTicks = (props) => {
  const { x, y, payload, config } = props;
  const formattedValue = config.formatter(payload.value);
  const tickValue = formattedValue.length > 10 ? `${formattedValue.slice(0, 13)}...` : formattedValue;
  return (
    <g transform={`translate(${x},${y + 3})`}>
      <text fill={ThemingParameters.sapContent_LabelColor} textAnchor={'end'}>
        {`${tickValue}`}
      </text>
    </g>
  );
};
