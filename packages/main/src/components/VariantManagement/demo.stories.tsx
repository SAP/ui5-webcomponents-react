import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];
export const renderStory = () => (
  <VariantManagement
    style={{ width: '300px', height: 'auto' }}
    closeOnItemSelect={boolean('closeOnItemSelect', true)}
    initialSelectedKey={text('initialSelectedKey', '2')}
    variantItems={variantItems}
    onSelect={action('onSelect')}
    placement={select('Placement', PlacementType, PlacementType.Bottom)}
    level={select('level', TitleLevel, TitleLevel.H4)}
    disabled={boolean('disabled', false)}
  />
);
renderStory.story = {
  name: 'Default'
};

export default {
  title: 'Components / VariantManagement',
  component: VariantManagement
};
