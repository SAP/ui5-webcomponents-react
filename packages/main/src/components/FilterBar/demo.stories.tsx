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
      closeOnItemSelect={boolean('Variant: closeOnItemSelect', true)}
      initialSelectedKey={'2'}
      variantItems={variantItems}
      onSelect={(e) => {
        console.log(e.getParameter('selectedItem').key);
      }}
      placement={select('Variant: placement', PlacementType, PlacementType.Bottom)}
      level={select('Variant: level', TitleLevel, TitleLevel.H6)}
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
      loading={boolean('loading', false)}
      considerGroupName={boolean('considerGroupName', false)}
      // filterContainerWidth={'200rem'}
      // activeFiltersCount={'X'}
      showClearOnFB={boolean('showClearOnFB', true)}
      showRestoreOnFB={boolean('showRestoreOnFB', true)}
      showGo={boolean('showGo', true)}
      showGoOnFB={boolean('showGoOnFB', false)}
      showFilterConfiguration={boolean('showFilterConfiguration', true)}
      showSearchOnDialog={boolean('showSearchOnDialog', true)}
      showClearButton={boolean('showClearButton', true)}
      showRestoreButton={boolean('showRestoreButton', true)}
    >
      <FilterGroupItem label="Input" visibleInFilterBar={false}>
        <Input placeholder="Placeholder" />
      </FilterGroupItem>
      <FilterGroupItem label="Switch" groupName="Group 1" visible={false}>
        <Switch />
      </FilterGroupItem>
      <FilterGroupItem label="SELECT w/ initial selected" loading={delayedLoading} visibleInFilterBar={false}>
        <Select>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="SELECT w/o initial selected" groupName="Group 1" visibleInFilterBar={false}>
        <Select onChange={(e) => console.log(e.parameters.selectedOption.dataset)}>
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
      <FilterGroupItem label="MultBox w/ initial selected" groupName="Group 1" visibleInFilterBar={false}>
        <MultiComboBox>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option selected>Option 4</Option>
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="MultBox w/o initial selected" visibleInFilterBar={false} groupName="Group 2">
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
        label="MultBox StandardListItem w/ initial selected"
        visibleInFilterBar={false}
        groupName="Group 2"
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
        label="MultBox CustomListItem w/ initial selected"
        visibleInFilterBar={false}
        groupName="Group 2"
      >
        <MultiComboBox>
          <CustomListItem>Selection 1</CustomListItem>
          <CustomListItem selected>Selection 1</CustomListItem>
          <CustomListItem>Selection 1</CustomListItem>
          <CustomListItem>Selection 1</CustomListItem>
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="Date Picker" visibleInFilterBar={false} groupName="Group 2">
        <DatePicker />
      </FilterGroupItem>
      <FilterGroupItem label="Single Checkbox" groupName="Group 2">
        <CheckBox text="Check this" />
      </FilterGroupItem>
      <FilterGroupItem
        label="Not supported component example"
        // visibleInFilterBar={false}
        groupName="Check Group"
        style={{ width: '400px' }}
      >
        <div style={{ display: 'flex' }}>
          <CheckBox text="Check this" />
          <CheckBox text="Check this" />
          <CheckBox text="Check this" />
        </div>
      </FilterGroupItem>
      <FilterItem
        onChange={(e) => alert(e.getParameter('selectedItem').key)}
        filterItems={filterItems}
        label="Deprecated Filter Item Select"
        key="classification"
        type={FilterType.Select}
        loading={boolean('loading', false)}
      />
      <FilterItem
        key={'filter2'}
        type={FilterType.Custom}
        label="Deprecated Filter Item Custom"
        changeEventName={'onClick'}
        valueParamName={'state'}
      >
        <Switch />
      </FilterItem>
      <FilterItem
        onChange={action('onChange')}
        filterItems={filterItems}
        style={{
          maxWidth: '200px'
        }}
        label="Deprecated Filter Item MultiSelect"
        key="Multi"
        type={FilterType.MultiSelect}
        loading={boolean('loading', false)}
      />
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
