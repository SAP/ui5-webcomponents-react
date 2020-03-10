import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';
import { FilterItem } from '@ui5/webcomponents-react/lib/FilterItem';
import { FilterType } from '@ui5/webcomponents-react/lib/FilterType';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React, { useEffect, useState } from 'react';
import {
  CheckBox,
  CustomListItem,
  DatePicker,
  MultiComboBox,
  Option,
  Select,
  StandardListItem,
  Text,
  ValueState
} from '../..';
import { FilterGroupItem } from '../FilterGroupItem';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];
const filterItems = [
  { text: 'Text 1', key: '1' },
  { text: 'Text 2', key: '2' }
];

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

const renderSearch = () => {
  return (
    <Input
      placeholder={'Search'}
      onSubmit={() => {
        console.log('search');
      }}
    />
  );
};

export const renderStory = () => {
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDelayedLoading(false);
    }, 2000);
  }, []);

  return (
    <FilterBar
      renderSearch={renderSearch}
      renderVariants={renderVariants}
      useToolbar={boolean('useToolbar', true)}
      // considerGroupName
      // filterContainerWidth={'200rem'}
      // activeFiltersCount={'X'}
      showClearOnFB
      showRestoreOnFB
      showGo
      showGoOnFB={true}
      showFilterConfiguration={true}
      showDialogSearch
      showClearButton
      showRestoreButton
    >
      <FilterGroupItem label="INPUT">
        <Input placeholder="TESTTESTTEST" />
      </FilterGroupItem>
      <FilterGroupItem label="with group title" groupName="testgroup" mandatory visible={false}>
        <Switch />
      </FilterGroupItem>
      <FilterGroupItem label="SELECT w/ selected" loading={delayedLoading}>
        <Select>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="SELECT w/o selected" groupName="testgroup">
        <Select
          disabled={boolean('disabled', false)}
          valueState={select('valueState', ValueState, null)}
          onChange={(e) => console.log(e.parameters.selectedOption.dataset)}
        >
          <Option data-key="Test 1" selected icon="add">
            Test 1
          </Option>
          <Option data-key="Test 2" icon="add">
            Test 2
          </Option>
          <Option data-key="Test 3" icon="add">
            Test 3
          </Option>
          <Option data-key="Test 4" icon="add">
            Test 4
          </Option>
          <Option data-key="Test 5" icon="add">
            Test 5
          </Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="MultBox w/ selected" groupName="testgroup">
        <MultiComboBox>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option selected>Option 4</Option>
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="MultBox w/o selected" visibleInFilterBar={false} groupName="test group 2" mandatory>
        <MultiComboBox>
          <Option>
            <Text>asd</Text>
          </Option>
          <Option>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem
        label="MultBox StandardListItem w/ selected"
        visibleInFilterBar={false}
        groupName="test group 2"
        mandatory
      >
        <MultiComboBox>
          <StandardListItem selected>Selection 1</StandardListItem>
          <StandardListItem>Selection 2</StandardListItem>
          <StandardListItem>Selection 3</StandardListItem>
          <StandardListItem>Selection 4</StandardListItem>
          <StandardListItem>Selection 5</StandardListItem>
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem
        label="MultBox CustomListItem w/ selected"
        visibleInFilterBar={false}
        groupName="test group 2"
        mandatory
      >
        <MultiComboBox>
          <CustomListItem>Selection 1</CustomListItem>
          <CustomListItem selected>Selection 1</CustomListItem>
          <CustomListItem>Selection 1</CustomListItem>
          <CustomListItem>Selection 1</CustomListItem>
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="Date Picker" visibleInFilterBar={false} groupName="test group 2" mandatory>
        <DatePicker />
      </FilterGroupItem>
      {/*<FilterGroupItem*/}
      {/*  label="CheckBox"*/}
      {/*  visibleInFilterBar={false}*/}
      {/*  groupName="Check Group"*/}
      {/*  mandatory*/}
      {/*  style={{ width: '400px' }}*/}
      {/*>*/}
      {/*  <div style={{ display: 'flex' }}>*/}
      {/*    <CheckBox text="Check this" />*/}
      {/*    <CheckBox text="Check this" />*/}
      {/*    <CheckBox text="Check this" />*/}
      {/*  </div>*/}
      {/*</FilterGroupItem>*/}
    </FilterBar>
  );
};
renderStory.story = {
  name: 'Default'
};

// export const renderStory = () => {
//   return (
//     <FilterBar renderSearch={renderSearch} renderVariants={renderVariants} useToolbar={boolean('useToolbar', true)}>
//       <FilterItem
//         onChange={(e) => alert(e.getParameter('selectedItem').key)}
//         filterItems={filterItems}
//         label="Classification"
//         key="classification"
//         type={FilterType.Select}
//         loading={boolean('loading', false)}
//       />
//       <FilterItem
//         key={'filter2'}
//         type={FilterType.Custom}
//         label={'Custom Filter 1'}
//         changeEventName={'onClick'}
//         valueParamName={'state'}
//       >
//         <Switch />
//       </FilterItem>
//       <FilterItem
//         onChange={action('onChange')}
//         filterItems={filterItems}
//         style={{
//           maxWidth: '200px'
//         }}
//         label="Multi"
//         key="Multi"
//         type={FilterType.MultiSelect}
//         loading={boolean('loading', false)}
//       />
//     </FilterBar>
//   );
// };
// renderStory.story = {
//   name: 'Default'
// };

export default {
  title: '3 Components / FilterBar',
  component: FilterBar,
  parameters: {
    subcomponents: { FilterItem }
  }
};
