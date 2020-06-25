import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import React, { useCallback, useRef } from 'react';

export default {
  title: 'UI5 Web Components / Dialog',
  component: Dialog,
  args: {
    headerText: 'Dialog Header Text'
  },
  argTypes: {
    children: {
      type: null
    },
    ref: {
      type: null
    }
  }
};

export const generatedDefaultStory = (props) => {
  const dialogRef = useRef();
  const onButtonClick = useCallback(() => {
    dialogRef.current.open();
  }, [dialogRef]);

  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      <Dialog
        ref={dialogRef}
        stretch={props.stretch}
        headerText={props.headerText}
        initialFocus={props.initialFocus}
        onAfterClose={props.onAfterClose}
        onAfterOpen={props.onAfterOpen}
        onBeforeClose={props.onBeforeClose}
        onBeforeOpen={props.onBeforeOpen}
        footer={<span>Footer</span>}
        header={null}
      >
        Some Content
      </Dialog>
    </>
  );
};

generatedDefaultStory.storyName = 'Generated default story';
