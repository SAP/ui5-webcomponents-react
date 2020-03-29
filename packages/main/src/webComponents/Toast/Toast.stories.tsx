import { number, text } from '@storybook/addon-knobs';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Toast } from '@ui5/webcomponents-react/lib/Toast';
import React from 'react';

export default {
  title: 'UI5 Web Components / Toast',
  component: Toast
};

const showToast = () => {
  // @ts-ignore
  document.querySelector('#web_components_react_toast_demo').show();
};

export const generatedDefaultStory = () => (
  <>
    {/*
    // @ts-ignore */}
    <Toast
      id="web_components_react_toast_demo"
      duration={number('duration', 3000)}
      placement={text('placement', 'BottomCenter')}
    >
      Some Content
    </Toast>
    <Button onClick={showToast}>Show Toast</Button>
  </>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
