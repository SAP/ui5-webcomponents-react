import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import {
  ViewSettingsDialog as OriginalViewSettingsDialog,
  ViewSettingsDialogDomRef,
  ViewSettingsDialogPropTypes
} from './index';

// todo remove once portals are supported inline, or general popovers are supported w/o having to mount them to the body
export const ViewSettingsDialog = forwardRef<ViewSettingsDialogDomRef, ViewSettingsDialogPropTypes>((args, ref) =>
  createPortal(<OriginalViewSettingsDialog {...args} ref={ref} />, document.body)
);
ViewSettingsDialog.displayName = 'ViewSettingsDialog';
