import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressIndicator } from '../../lib/ProgressIndicator';

function renderStory() {
  return (
    <div>
      <ProgressIndicator visible={false} percentValue={5} width="50%" displayValue="5%" />
      <ProgressIndicator percentValue={95} width="50%" displayValue="95%" />
      <ProgressIndicator percentValue={25} state="Success" displayValue="25 GB" />
      <ProgressIndicator percentValue={50} state="Warning" displayValue="50/100" />
      <ProgressIndicator percentValue={75} state="Error" displayValue="75%" />
    </div>
  );
}

storiesOf('Components | ProgressIndicator', module).add('Default', renderStory);
