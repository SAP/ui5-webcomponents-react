import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { DialogDomRef } from '../../webComponents';
import { MessageBox as OriginalMessageBox, MessageBoxPropTypes } from './index';
import React from 'react';

export const MessageBox = forwardRef<DialogDomRef, MessageBoxPropTypes>((args, ref) =>
  createPortal(<OriginalMessageBox {...args} ref={ref} />, document.body)
);

MessageBox.displayName = 'MessageBox';
