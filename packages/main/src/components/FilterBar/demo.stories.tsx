import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';
import { FilterGroupItem } from '@ui5/webcomponents-react/lib/FilterGroupItem';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];

const renderVariants = () => {
  return (
    <VariantManagement
      style={{ width: '300px', height: 'auto' }}
      initialSelectedKey="2"
      variantItems={variantItems}
      onSelect={(e) => {
        console.log(e.getParameter('selectedItem').key);
      }}
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

export const renderDefaultStory = () => {
  return (
    <FilterBar
      renderSearch={renderSearch}
      renderVariants={renderVariants}
      useToolbar={boolean('useToolbar', true)}
      filterBarExpanded={boolean('filterBarExpanded', true)}
      loading={boolean('loading', false)}
      considerGroupName={boolean('considerGroupName', false)}
      filterContainerWidth={text('auto', undefined)}
      activeFiltersCount={number('activeFiltersCount', undefined)}
      showClearOnFB={boolean('showClearOnFB', false)}
      showRestoreOnFB={boolean('showRestoreOnFB', false)}
      showGo={boolean('showGo', false)}
      showGoOnFB={boolean('showGoOnFB', false)}
      showFilterConfiguration={boolean('showFilterConfiguration', false)}
      showSearchOnFiltersDialog={boolean('showSearchOnFiltersDialog', false)}
      showClearButton={boolean('showClearButton', false)}
      showRestoreButton={boolean('showRestoreButton', false)}
      onToggleFilters={action('onToggleFilters')}
      onFiltersDialogOpen={action('onFiltersDialogOpen')}
      onFiltersDialogClose={action('onFiltersDialogClose')}
      onFiltersDialogSave={action('onFiltersDialogSave')}
      onFiltersDialogClear={action('onFiltersDialogClear')}
      onClear={action('onClear')}
      onFiltersDialogSelectionChange={action('onFiltersDialogSelectionChange')}
      onFiltersDialogSearch={action('onFiltersDialogSearch')}
      onGo={action('onGo')}
      onRestore={action('onRestore')}
    >
      <FilterGroupItem label="Classification" key="classification" loading={boolean('FilterGroupItem: loading', false)}>
        <Select>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem key={'filter2'} label={'Custom Filter 1'} loading={boolean('FilterGroupItem: loading', false)}>
        <Switch />
      </FilterGroupItem>
      <FilterGroupItem label="Multi" key="Multi" loading={boolean('FilterGroupItem: loading', false)}>
        <MultiComboBox>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option selected>Option 4</Option>
        </MultiComboBox>
      </FilterGroupItem>
    </FilterBar>
  );
};
renderDefaultStory.story = {
  name: 'Default'
};

export const renderStoryWithFiltersDialog = () => {
  return (
    <FilterBar
      renderSearch={renderSearch}
      renderVariants={renderVariants}
      useToolbar={boolean('useToolbar', true)}
      filterBarExpanded={boolean('filterBarExpanded', true)}
      loading={boolean('loading', false)}
      considerGroupName={boolean('considerGroupName', true)}
      filterContainerWidth={text('width', '12rem')}
      activeFiltersCount={number('activeFiltersCount', 0)}
      showClearOnFB={boolean('showClearOnFB', true)}
      showRestoreOnFB={boolean('showRestoreOnFB', true)}
      showGo={boolean('showGo', true)}
      showGoOnFB={boolean('showGoOnFB', true)}
      showFilterConfiguration={boolean('showFilterConfiguration', true)}
      showSearchOnFiltersDialog={boolean('showSearchOnFiltersDialog', true)}
      showClearButton={boolean('showClearButton', true)}
      showRestoreButton={boolean('showRestoreButton', true)}
      onToggleFilters={action('onToggleFilters')}
      onFiltersDialogOpen={action('onFiltersDialogOpen')}
      onFiltersDialogClose={action('onFiltersDialogClose')}
      onFiltersDialogSave={action('onFiltersDialogSave')}
      onFiltersDialogClear={action('onFiltersDialogClear')}
      onClear={action('onClear')}
      onFiltersDialogSelectionChange={action('onFiltersDialogSelectionChange')}
      onFiltersDialogSearch={action('onFiltersDialogSearch')}
      onGo={action('onGo')}
      onRestore={action('onRestore')}
    >
      <FilterGroupItem label="Input" loading={boolean('FilterGroupItem: loading', false)}>
        <Input placeholder="Placeholder" />
      </FilterGroupItem>
      <FilterGroupItem
        label="Switch"
        groupName={text('FilterGroupItem: groupName', 'Custom Group')}
        loading={boolean('FilterGroupItem: loading', true)}
      >
        <Switch />
      </FilterGroupItem>
      <FilterGroupItem label="SELECT w/ initial selected" loading={boolean('FilterGroupItem: loading', true)}>
        <Select>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem
        label="SELECT w/o initial selected"
        groupName={text('FilterGroupItem: groupName', 'Custom Group')}
      >
        <Select>
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
      <FilterGroupItem
        label="MultBox w/ initial selected"
        groupName="Group 1"
        loading={boolean('FilterGroupItem: loading', true)}
      >
        <MultiComboBox>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option selected>Option 4</Option>
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem
        label="MultBox w/o initial selected"
        groupName="Group 2"
        mandatory={boolean('FilterGroupItem: mandatory', true)}
      >
        <MultiComboBox>
          <Option>
            <Text>asd</Text>
          </Option>
          <Option>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="MultBox StandardListItem w/ initial selected" groupName="Group 1">
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
        groupName="Group 2"
        mandatory={boolean('FilterGroupItem: mandatory', true)}
      >
        <MultiComboBox>
          <CustomListItem>Selection 1</CustomListItem>
          <CustomListItem selected>Selection 1</CustomListItem>
          <CustomListItem>Selection 1</CustomListItem>
          <CustomListItem>Selection 1</CustomListItem>
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="Date Picker" groupName="Group 2" mandatory={boolean('FilterGroupItem: mandatory', true)}>
        <DatePicker />
      </FilterGroupItem>
    </FilterBar>
  );
};
renderStoryWithFiltersDialog.story = {
  name: 'With Filters Dialog'
};

export default {
  title: 'Components / FilterBar',
  component: FilterBar,
  parameters: {
    subcomponents: { FilterGroupItem }
  }
};
