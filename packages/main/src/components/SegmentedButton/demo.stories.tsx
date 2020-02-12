import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';
import { SegmentedButtonItem } from '@ui5/webcomponents-react/lib/SegmentedButtonItem';
import React from 'react';

export const renderStory = () => {
  return (
    <SegmentedButton
      disabled={boolean('disabled', false)}
      onItemSelected={action('onItemSelected')}
      selectedKey={number('SelectedKey', 1)}
    >
      <SegmentedButtonItem id={1} icon={<Icon name="world" />} />
      <SegmentedButtonItem id={2} icon={<Icon name="world" />}>
        Button 2
      </SegmentedButtonItem>
      <SegmentedButtonItem id={3} width="300px">
        Button 3
      </SegmentedButtonItem>
    </SegmentedButton>
  );
};
renderStory.story = {
  name: 'Default'
};

export default {
  title: 'Components / SegmentedButton',
  component: SegmentedButton,
  parameters: {
    subcomponents: { SegmentedButtonItem }
  }
};
