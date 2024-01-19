import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { Dialog as OriginalDialog, DialogDomRef, DialogPropTypes } from './index';

// todo remove once portals are supported inline, or general popovers are supported w/o having to mount them to the body
export const Dialog = forwardRef<DialogDomRef, DialogPropTypes>((args, ref) =>
  createPortal(<OriginalDialog {...args} ref={ref} />, document.body)
);

Dialog.displayName = 'Dialog';
