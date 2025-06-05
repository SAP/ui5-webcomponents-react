import type { MessageBoxPropTypes } from '@ui5/webcomponents-react';
import { MessageBox, Text } from '@ui5/webcomponents-react';

export function ClearAllMessageBox(props: Pick<MessageBoxPropTypes, 'open' | 'onClose'>) {
  const { open, onClose } = props;
  return (
    <MessageBox open={open} titleText="Clear All Notifications" onClose={onClose}>
      <Text>Are you sure you want to clear all the notifications?</Text>
    </MessageBox>
  );
}

ClearAllMessageBox.displayName = 'ClearAllMessageBox';
