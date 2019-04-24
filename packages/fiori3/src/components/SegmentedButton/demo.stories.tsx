import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { SegmentedButton } from './index';
import { Icon } from '../../webComponents/Icon';
import { SegmentedButtonItem } from '../SegmentedButtonItem';

function renderStory() {
  return (
    <SegmentedButton
      enabled={boolean('enabled', true)}
      onItemSelected={action('onItemSelected')}
      selectedKey={number('SelectedKey', 1)}
    >
      <SegmentedButtonItem id={1} icon={<Icon src="world" />} />
      <SegmentedButtonItem id={2} icon={<Icon src="world" />}>
        Button 2
      </SegmentedButtonItem>
      <SegmentedButtonItem id={3}>Button 3</SegmentedButtonItem>
    </SegmentedButton>
  );
}

storiesOf('F4R Components | SegmentedButton', module).add('Default', renderStory);
