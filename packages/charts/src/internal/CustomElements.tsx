import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import React from 'react';

let globalRotate = false;

export const XAxisTicks = (props, formatter, unit = '', rotate) => {
  const { x, y, payload } = props;
  globalRotate = !!rotate;
  const tickValue = rotate
    ? formatter(payload.value).length > 10
      ? `${formatter(payload.value).slice(0, 8)}...`
      : formatter(payload.value)
    : payload.value;
  return (
    <g transform={`translate(${x},${y + 10})`}>
      <text
        fill={ThemingParameters.sapNeutralBorderColor}
        transform={rotate ? 'rotate(-35)' : ''}
        textAnchor={rotate ? 'end' : 'middle'}
      >
        {`${tickValue}${unit}`}
      </text>
    </g>
  );
};

export const SecondaryDimensionTicksXAxis = (props) => {
  const { x, y, payload } = props;

  const tickValue = payload.value.length > 12 && globalRotate ? payload.value.slice(0, 12) + '...' : payload.value;
  const dy = globalRotate ? 40 : 10;

  return (
    <g transform={`translate(${x},${y + dy})`}>
      {' '}
      <text fill={ThemingParameters.sapNeutralBorderColor}>|</text>
      <text
        fill={ThemingParameters.sapNeutralBorderColor}
        transform={globalRotate ? 'rotate(-35)' : ''}
        textAnchor={globalRotate ? 'end' : 'middle'}
        y={15}
      >
        {`${tickValue}`}
      </text>
    </g>
  );
};

export const SecondaryDimensionTicksYAxis = (props, yAxisFormatter) => {
  const { x, y, payload } = props;

  const tickValue = yAxisFormatter(payload.value);

  return (
    <g transform={`translate(${x - 90},${y})`}>
      {' '}
      <text fill={ThemingParameters.sapNeutralBorderColor} textAnchor={'start'}>
        {`${tickValue}`}
      </text>
    </g>
  );
};

export const DataLabel = (props, formatter, customElement) => {
  const { x, y, value } = props;
  const customElementClone =
    customElement && React.cloneElement(customElement, { children: formatter(value), textAnchor: 'middle' });
  return (
    <g transform={`translate(${x},${y - 5})`} fill={ThemingParameters.sapNeutralBorderColor}>
      {customElementClone}
    </g>
  );
};
