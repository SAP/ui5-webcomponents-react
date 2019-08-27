import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import React from 'react';
import { PlacementType } from '../../lib/PlacementType';
import { TitleLevel } from '../../lib/TitleLevel';
import { VariantManagement } from '../../lib/VariantManagement';

const variantItems = [{ label: 'Variant 1', key: '1' }, { label: 'Variant 2', key: '2' }];
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
  title: 'Components | VariantManagement',
  component: VariantManagement
};
