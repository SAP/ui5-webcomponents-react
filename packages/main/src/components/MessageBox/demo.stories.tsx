import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';
import { MessageBoxActions } from '@ui5/webcomponents-react/lib/MessageBoxActions';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import React, { useCallback, useRef } from 'react';
import { Ui5DialogDomRef } from '../../interfaces/Ui5DialogDomRef';

export const defaultStory = (props) => {
  const messageBoxRef = useRef();
  const onButtonClick = useCallback(
    (e) => {
      messageBoxRef.current.open(true);
    },
    [messageBoxRef]
  );

  const onCloseMessageBox = useCallback(
    (e) => {
      messageBoxRef.current.close(true);
    },
    [messageBoxRef]
  );

  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox
        ref={messageBoxRef}
        type={props.type}
        open={props.open}
        onClose={onCloseMessageBox}
        title={props.title}
      >
        Message Box Content
      </MessageBox>
    </>
  );
};

defaultStory.storyName = 'Default';

export const withCustomActions = (props) => {
  const messageBoxRef = useRef<Ui5DialogDomRef>();
  const onButtonClick = useCallback(
    (e) => {
      messageBoxRef.current.open();
    },
    [messageBoxRef]
  );

  const onCloseMessageBox = useCallback(
    (e) => {
      messageBoxRef.current.close();
    },
    [messageBoxRef]
  );

  return (
    <>
      <Button onClick={onButtonClick}>Open Messagebox</Button>
      <MessageBox
        ref={messageBoxRef}
        type={props.type}
        open={props.open}
        onClose={onCloseMessageBox}
        title={props.title}
        actions={[MessageBoxActions.OK, 'A custom action', MessageBoxActions.CANCEL]}
      >
        Message Box Content
      </MessageBox>
    </>
  );
};

withCustomActions.args = {
  title: 'A Custom Message Box Title'
};

export default {
  title: 'Components / MessageBox',
  component: MessageBox,
  argTypes: {
    ...createSelectArgTypes({ type: MessageBoxTypes }),
    ref: {
      type: null
    }
  },
  args: {
    open: false,
    type: MessageBoxTypes.CONFIRM
  }
};
