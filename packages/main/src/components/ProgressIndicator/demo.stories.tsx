import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const renderStory = (props) => {
  return (
    <div>
      <ProgressIndicator
        percentValue={props.percentValue}
        style={{ width: '50%' }}
        displayValue={props.displayValue}
        // @ts-ignore
        state={props.state}
      />
      <ProgressIndicator percentValue={95} style={{ width: '50%' }} displayValue="95%" />
      <ProgressIndicator percentValue={25} state={ValueState.Success} displayValue="25 GB" />
      <ProgressIndicator percentValue={50} state={ValueState.Warning} displayValue="50/100" />
      <ProgressIndicator percentValue={75} state={ValueState.Error} displayValue="75%" />
      <ProgressIndicator percentValue={33} state={ValueState.Information} displayValue="33%" />
    </div>
  );
};
renderStory.storyName = 'Default';

export default {
  title: 'Components / ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {
    ...createSelectArgTypes({ state: ValueState })
  },
  args: {
    percentValue: 5,
    displayValue: '5%',
    state: ValueState.None
  }
};
