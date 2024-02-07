// todo remove once portals are supported inline, or general popovers are supported w/o having to mount them to the body
import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { SelectMenu as OriginalSelectMenu, SelectMenuDomRef, SelectMenuPropTypes } from '../SelectMenu';

export const SelectMenu = forwardRef<SelectMenuDomRef, SelectMenuPropTypes>((args, ref) =>
  createPortal(<OriginalSelectMenu {...args} ref={ref} />, document.body)
);

SelectMenu.displayName = 'SelectMenu';
