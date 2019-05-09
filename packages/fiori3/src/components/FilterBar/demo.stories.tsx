import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { FilterBar } from './index';
import { VariantManagement } from '../VariantManagement';
import { FilterItem } from '../FilterItem';
import { PlacementType } from '@fiori-for-react/core/enums/PlacementType';
import { TitleLevel } from '@fiori-for-react/core';
import { FilterType } from '../../enums/FilterType';
import { CheckBox } from '../../webComponents/CheckBox';
import { Select } from '../../webComponents/Select';
import { Switch } from '../../webComponents/Switch';

const flavours = [];
for (let i = 1; i <= 9; i++) {
  flavours.push(i);
}
const variantItems = [{ label: 'Variant 1', key: '1' }, { label: 'Variant 2', key: '2' }];
const filterItems = [{ text: 'Text 1', key: '1' }, { text: 'Text 2', key: '2' }];

const renderVariants = () => {
  return (
    <VariantManagement
      style={{ width: '300px', height: 'auto' }}
      closeOnItemSelect={boolean('closeOnItemSelect', true)}
      initialSelectedKey={'2'}
      variantItems={variantItems}
      onSelect={(e) => {
        console.log(e.getParameter('selectedItem').key);
      }}
      placement={select('Placement', PlacementType, PlacementType.Bottom)}
      level={select('level', TitleLevel, TitleLevel.H6)}
    />
  );
};

function renderStory() {
  return (
    <FilterBar renderVariants={renderVariants}>
      <FilterItem
        onChange={(e) => alert(e.getParameter('selectedItem').key)}
        filterItems={filterItems}
        label="Classification"
        key="classification"
        type={FilterType.Select}
      />
      <FilterItem
        onChange={(e) => alert(e.getParameter('selectedItem').key)}
        filterItems={filterItems}
        label="Classification"
        key="classification"
        type={FilterType.Select}
      />
      <FilterItem
        onChange={(e) => alert(e.getParameter('selectedItem').key)}
        filterItems={filterItems}
        label="Classification"
        key="classification"
        type={FilterType.Select}
      />
      <FilterItem
        onChange={(e) => alert(e.getParameter('selectedItem').key)}
        filterItems={filterItems}
        label="Classification"
        key="classification"
        type={FilterType.Select}
      />
      <FilterItem
        onChange={(e) => alert(e.getParameter('selectedItem').key)}
        filterItems={filterItems}
        label="Classification"
        key="classification"
        type={FilterType.Select}
      />
      <FilterItem
        onChange={(e) => alert(e.getParameter('selectedItem').key)}
        filterItems={filterItems}
        label="Classification"
        key="classification"
        type={FilterType.Select}
      />
      <FilterItem
        onChange={(e) => alert(e.getParameter('selectedItem').key)}
        filterItems={filterItems}
        label="Classification"
        key="classification"
        type={FilterType.Select}
      />
      <FilterItem
        key={'filter2'}
        type={FilterType.Custom}
        label={'Custom Filter 1'}
        changeEventName={'onClick'}
        valueParamName={'state'}
      >
        <Switch />
      </FilterItem>
    </FilterBar>
  );
}

storiesOf('F4R Components | FilterBar', module).add('Default', renderStory);
