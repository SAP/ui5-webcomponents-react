import { createPortal } from 'react-dom';
import {
  ResponsivePopover as OriginalResponsivePopover,
  ResponsivePopoverDomRef,
  ResponsivePopoverPropTypes
} from './index';
import { forwardRef } from 'react';

export const ResponsivePopover = forwardRef<ResponsivePopoverDomRef, ResponsivePopoverPropTypes>((args, ref) =>
  createPortal(<OriginalResponsivePopover {...args} ref={ref} />, document.body)
);

ResponsivePopover.displayName = 'ResponsivePopover';
