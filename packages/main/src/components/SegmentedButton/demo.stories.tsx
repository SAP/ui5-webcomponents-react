import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Icon } from '../../lib/Icon';
import { SegmentedButton } from '../../lib/SegmentedButton';
import { SegmentedButtonItem } from '../../lib/SegmentedButtonItem';

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

storiesOf('Components | SegmentedButton', module).add('Default', renderStory);
