import { createPortal } from 'react-dom';
import { Popover as OriginalPopover, PopoverDomRef, PopoverPropTypes } from './index';
import { forwardRef } from 'react';

export const Popover = forwardRef<PopoverDomRef, PopoverPropTypes>((args, ref) =>
  createPortal(<OriginalPopover {...args} ref={ref} />, document.body)
);

Popover.displayName = 'Popover';
