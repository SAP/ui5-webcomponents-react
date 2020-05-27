import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import React, { useCallback, useRef } from 'react';

export default {
  title: 'UI5 Web Components / Dialog',
  component: Dialog
};

export const generatedDefaultStory = () => {
  const dialogRef = useRef();
  const onButtonClick = useCallback(() => {
    dialogRef.current.open();
  }, [dialogRef]);

  return (
    <>
      <Button onClick={onButtonClick}>Open Dialog</Button>
      <Dialog
        ref={dialogRef}
        stretch={boolean('stretch', false)}
        headerText={text('headerText', 'Dialog Header Text')}
        initialFocus={text('initialFocus', '')}
        footer={<span>Footer</span>}
        header={null}
        onAfterClose={action('onAfterClose')}
        onAfterOpen={action('onAfterOpen')}
        onBeforeClose={action('onBeforeClose')}
        onBeforeOpen={action('onBeforeOpen')}
      >
        Some Content
      </Dialog>
    </>
  );
};

generatedDefaultStory.storyName = 'Generated default story';
