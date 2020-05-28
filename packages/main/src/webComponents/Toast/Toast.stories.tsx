import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Toast } from '@ui5/webcomponents-react/lib/Toast';
import { ToastPlacement } from '@ui5/webcomponents-react/lib/ToastPlacement';
import React, { useRef } from 'react';
import mdx from './Toast.mdx';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / Toast',
  component: Toast,
  parameters: {
    docs: {
      page: mdx
    }
  },
  argTypes: {
    ...createSelectArgTypes({ placement: ToastPlacement })
  },
  args: {
    duration: 3000,
    placement: ToastPlacement.BottomCenter
  }
};

const showToast = () => {
  // @ts-ignore
  document.querySelector('#web_components_react_toast_demo').show();
};

export const generatedDefaultStory = (props) => {
  const toast = useRef();

  const showToast = () => {
    toast.current.show();
  };
  return (
    <>
      <Toast ref={toast} duration={props.duration} placement={props.placement}>
        Some Content
      </Toast>
      <Button onClick={showToast}>Show Toast</Button>
    </>
  );
};

generatedDefaultStory.storyName = 'Default story';
