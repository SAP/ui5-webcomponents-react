import React from 'react';

import { spacing } from '@ui5/webcomponents-react-base';
import { Label as UI5Label, WrappingType } from '@ui5/webcomponents-react';

const Label = ({ style, ...props }) => {
  const innerStyle = {
    ...style,
    ...spacing.sapUiTinyMarginBottom,
    lineHeight: '20px'
  };

  return (
    <UI5Label data-testid="label-wrapper" wrappingType={WrappingType.Normal} style={innerStyle} {...props}>
      {props.children}
    </UI5Label>
  );
};

export default Label;
