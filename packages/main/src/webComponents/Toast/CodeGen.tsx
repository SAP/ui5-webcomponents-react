import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { Toast as OriginalToast, ToastDomRef, ToastPropTypes } from './index';

// todo remove once portals are supported inline, or general popovers are supported w/o having to mount them to the body
export const Toast = forwardRef<ToastDomRef, ToastPropTypes>((args, ref) =>
  createPortal(<OriginalToast {...args} ref={ref} />, document.body)
);
Toast.displayName = 'Toast';
