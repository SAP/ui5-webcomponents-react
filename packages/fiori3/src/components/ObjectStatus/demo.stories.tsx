import { Icon } from '../../lib/Icon';
import { ObjectStatus } from '../../lib/ObjectStatus';
import { ValueState } from '../../lib/ValueState';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('F4R Components | ObjectStatus', module)
  .add('Only Text', () => (
    <ObjectStatus state={select('state', ValueState, ValueState.Success)}>Object Status</ObjectStatus>
  ))
  .add('With Icon', () => (
    <ObjectStatus state={select('state', ValueState, ValueState.Success)} icon={<Icon src="sys-cancel" />}>
      Object Status
    </ObjectStatus>
  ))
  .add('With default Icon', () => (
    <ObjectStatus
      state={select('state', ValueState, ValueState.Success)}
      showDefaultIcon={boolean('showDefaultIcon', true)}
    >
      Default Icon Status
    </ObjectStatus>
  ))
  .add('Icon only', () => (
    <ObjectStatus icon={<Icon src="sys-cancel" />} state={select('state', ValueState, ValueState.Success)} />
  ));
