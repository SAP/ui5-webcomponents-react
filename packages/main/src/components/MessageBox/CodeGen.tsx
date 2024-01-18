import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { DialogDomRef } from '../../webComponents/index.js';
import { MessageBox as OriginalMessageBox, MessageBoxPropTypes } from './index.js';

export const MessageBox = forwardRef<DialogDomRef, MessageBoxPropTypes>((args, ref) =>
  createPortal(<OriginalMessageBox {...args} ref={ref} />, document.body)
);

MessageBox.displayName = 'MessageBox';
