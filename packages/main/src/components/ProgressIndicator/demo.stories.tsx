import React from 'react';
import { ValueState } from '../..';
import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';

export const renderStory = () => {
  return (
    <div>
      <ProgressIndicator visible={false} percentValue={5} width="50%" displayValue="5%" />
      <ProgressIndicator percentValue={95} width="50%" displayValue="95%" />
      <ProgressIndicator percentValue={25} state={ValueState.Success} displayValue="25 GB" />
      <ProgressIndicator percentValue={50} state={ValueState.Warning} displayValue="50/100" />
      <ProgressIndicator percentValue={75} state={ValueState.Error} displayValue="75%" />
      <ProgressIndicator percentValue={33} state={ValueState.Information} displayValue="33%" />
    </div>
  );
};
renderStory.story = {
  name: 'Default'
};

export default {
  title: 'Components | ProgressIndicator',
  component: ProgressIndicator
};
