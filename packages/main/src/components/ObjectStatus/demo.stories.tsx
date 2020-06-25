import '@ui5/webcomponents-icons/dist/icons/sys-cancel';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const onlyText = (props) => <ObjectStatus state={props.state}>Object Status</ObjectStatus>;
onlyText.storyName = 'with Text only';

export const withIcon = (props) => (
  <ObjectStatus state={props.state} icon={<Icon name="sys-cancel" />}>
    Object Status
  </ObjectStatus>
);
withIcon.storyName = 'with Text and Icon';

export const withDefaultIcon = (props) => (
  <ObjectStatus state={props.state} showDefaultIcon={props.showDefaultIcon}>
    Default Icon Status
  </ObjectStatus>
);
withDefaultIcon.storyName = 'with Default Icon';

export const withIconOnly = (props) => <ObjectStatus icon={<Icon name="sys-cancel" />} state={props.state} />;
withIconOnly.storyName = 'with Icon only';

export default {
  title: 'Components / ObjectStatus',
  component: ObjectStatus,
  argTypes: {
    ...createSelectArgTypes({ state: ValueState }),
    ref: {
      type: null
    }
  },
  args: {
    state: ValueState.Success,
    showDefaultIcon: true
  }
};
