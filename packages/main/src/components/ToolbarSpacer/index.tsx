import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import React, { forwardRef, Ref } from 'react';

export type ToolbarSpacerPropTypes = CommonProps;

const ToolbarSpacer = forwardRef((props: ToolbarSpacerPropTypes, ref: Ref<HTMLSpanElement>) => {
  const { ...rest } = props;
  return <span ref={ref} style={{ flexGrow: 1 }} className="spacer" {...rest} />;
});

ToolbarSpacer.displayName = 'ToolbarSpacer';
export { ToolbarSpacer };
