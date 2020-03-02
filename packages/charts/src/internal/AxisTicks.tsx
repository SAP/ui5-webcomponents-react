import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import React from 'react';

export const AxisTicks = (props) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y + 10})`}>
      <text fill={ThemingParameters.sapNeutralBorderColor} textAnchor={'middle'}>
        {payload.value}
      </text>
    </g>
  );
};
