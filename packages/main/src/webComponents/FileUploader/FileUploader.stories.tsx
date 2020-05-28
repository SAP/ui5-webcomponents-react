import { FileUploader } from '@ui5/webcomponents-react/lib/FileUploader';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / FileUploader',
  component: FileUploader,
  argTypes: {
    ...createSelectArgTypes({ valueState: ValueState })
  },
  args: {
    accept: undefined,
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <FileUploader
    accept={props.accept}
    disabled={props.disabled}
    hideInput={props.hideInput}
    multiple={props.multiple}
    name={props.name}
    placeholder={props.placeholder}
    value={props.value}
    valueState={props.valueState}
    // onChange={props.onChange}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
