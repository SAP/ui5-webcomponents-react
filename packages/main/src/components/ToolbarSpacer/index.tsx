import { CommonProps } from '../../interfaces/CommonProps';
import React, { forwardRef, Ref } from 'react';

export type ToolbarSpacerPropTypes = CommonProps;

const ToolbarSpacer = forwardRef((props: ToolbarSpacerPropTypes, ref: Ref<HTMLSpanElement>) => {
  return <span ref={ref} style={{ flexGrow: 1 }} className="spacer" {...props} />;
});

ToolbarSpacer.displayName = 'ToolbarSpacer';
export { ToolbarSpacer };
