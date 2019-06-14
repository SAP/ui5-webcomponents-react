import { PlacementType } from '../../lib/PlacementType';
import { TitleLevel } from '../../lib/TitleLevel';
import { VariantManagement } from '../../lib/VariantManagement';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

function renderStory() {
  const variantItems = [{ label: 'Variant 1', key: '1' }, { label: 'Variant 2', key: '2' }];

  return (
    <VariantManagement
      style={{ width: '300px', height: 'auto' }}
      closeOnItemSelect={boolean('closeOnItemSelect', true)}
      initialSelectedKey={'2'}
      variantItems={variantItems}
      onSelect={action('onSelect')}
      placement={select('Placement', PlacementType, PlacementType.Bottom)}
      level={select('level', TitleLevel, TitleLevel.H4)}
    />
  );
}

storiesOf('Components | VariantManagement', module).add('Default', renderStory);
