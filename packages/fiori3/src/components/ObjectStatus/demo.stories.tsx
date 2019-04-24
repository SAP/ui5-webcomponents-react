/**
 * Created by d059190 on 12.12.17
 */

import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { ValueState } from '../../enums/ValueState';
import { Icon } from '../../webComponents/Icon';
import { ObjectStatus } from './index';

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
