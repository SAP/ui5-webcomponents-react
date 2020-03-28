import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';

type properties = { x: number; y: number; payload: object };

let globalRotate = false;

export const AxisTicks = (props: properties, formatter, unit = '', rotate) => {
  const { x, y, payload } = props;

  globalRotate = !!rotate;

  const tickValue =
    formatter(payload.value).length > 9 ? formatter(payload.value).slice(0, 9) + '...' : formatter(payload.value);
  return (
    <g transform={`translate(${x},${y + 10})`}>
      <text
        fill={ThemingParameters.sapNeutralBorderColor}
        transform={rotate ? 'rotate(-45)' : ''}
        textAnchor={rotate ? 'end' : 'middle'}
      >
        {`${tickValue}${unit}`}
      </text>
    </g>
  );
};

export const SecondaryDimensionTicks = (props: properties) => {
  const { x, y, payload } = props;

  const tickValue = payload.value.length > 10 && globalRotate ? payload.value.slice(0, 10) + '...' : payload.value;

  return (
    <g transform={`translate(${x},${y + 50})`}>
      <text
        fill={ThemingParameters.sapNeutralBorderColor}
        transform={globalRotate ? 'rotate(-45)' : ''}
        textAnchor={globalRotate ? 'end' : 'middle'}
      >
        {`${tickValue}`}
      </text>
    </g>
  );
};

export const DataLabel = (props: properties, formatter, customElement) => {
  const { x, y, value } = props;
  const customElementClone =
    customElement && React.cloneElement(customElement, { children: formatter(value), textAnchor: 'middle' });
  return (
    <g transform={`translate(${x},${y - 5})`} fill={ThemingParameters.sapNeutralBorderColor}>
      {customElementClone}
    </g>
  );
};
