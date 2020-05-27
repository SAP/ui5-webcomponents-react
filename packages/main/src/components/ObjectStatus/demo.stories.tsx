import { boolean, select } from '@storybook/addon-knobs';
import '@ui5/webcomponents-icons/dist/icons/sys-cancel';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export const onlyText = () => (
  <ObjectStatus state={select('state', ValueState, ValueState.Success)}>Object Status</ObjectStatus>
);
onlyText.storyName = 'with Text only';

export const withIcon = () => (
  <ObjectStatus state={select('state', ValueState, ValueState.Success)} icon={<Icon name="sys-cancel" />}>
    Object Status
  </ObjectStatus>
);
withIcon.storyName = 'with Text and Icon';

export const withDefaultIcon = () => (
  <ObjectStatus
    state={select('state', ValueState, ValueState.Success)}
    showDefaultIcon={boolean('showDefaultIcon', true)}
  >
    Default Icon Status
  </ObjectStatus>
);
withDefaultIcon.storyName = 'with Default Icon';

export const withIconOnly = () => (
  <ObjectStatus icon={<Icon name="sys-cancel" />} state={select('state', ValueState, ValueState.Success)} />
);
withIconOnly.storyName = 'with Icon only';

export default {
  title: 'Components / ObjectStatus',
  component: ObjectStatus
};
