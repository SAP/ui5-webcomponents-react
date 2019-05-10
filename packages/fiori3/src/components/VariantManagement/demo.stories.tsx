import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { VariantManagement } from './index';
import { PlacementType } from '@fiori-for-react/core/enums/PlacementType';

import { TitleLevel } from '../../enums/TitleLevel';

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

storiesOf('F4R Components | VariantManagement', module).add('Default', renderStory);
