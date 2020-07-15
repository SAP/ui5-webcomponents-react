import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';
import { FilterGroupItem } from '@ui5/webcomponents-react/lib/FilterGroupItem';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/lib/MultiComboBoxItem';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];

export const renderDefaultStory = (props) => {
  return (
    <FilterBar
      search={<Input placeholder={'Search'} />}
      variants={<VariantManagement selectedKey="2" variantItems={variantItems} />}
      useToolbar={props.useToolbar}
      filterBarExpanded={props.filterBarExpanded}
      loading={props.loading}
      considerGroupName={props.considerGroupName}
      filterContainerWidth={props.auto}
      activeFiltersCount={props.activeFiltersCount}
      showClearOnFB={props.showClearOnFB}
      showRestoreOnFB={props.showRestoreOnFB}
      showGo={props.showGo}
      showGoOnFB={props.showGoOnFB}
      showFilterConfiguration={props.showFilterConfiguration}
      showSearchOnFiltersDialog={props.showSearchOnFiltersDialog}
      showClearButton={props.showClearButton}
      showRestoreButton={props.showRestoreButton}
      onToggleFilters={props.onToggleFilters}
      onFiltersDialogOpen={props.onFiltersDialogOpen}
      onFiltersDialogClose={props.onFiltersDialogClose}
      onFiltersDialogSave={props.onFiltersDialogSave}
      onFiltersDialogClear={props.onFiltersDialogClear}
      onClear={props.onClear}
      onFiltersDialogSelectionChange={props.onFiltersDialogSelectionChange}
      onFiltersDialogSearch={props.onFiltersDialogSearch}
      onGo={props.onGo}
      onRestore={props.onRestore}
    >
      <FilterGroupItem label="Input" loading={props.loading} visibleInFilterBar={props.visibleInFilterBar}>
        <Input placeholder="Placeholder" />
      </FilterGroupItem>
      <FilterGroupItem label="Switch" groupName={props.groupName} loading={props.loading} visible={props.visible}>
        <Switch />
      </FilterGroupItem>
      <FilterGroupItem label="SELECT w/ initial selected" loading={props.loading}>
        <Select>
          <Option>Option 1</Option>
          <Option selected>Option 2</Option>
          <Option>Option 3</Option>
          <Option>Option 4</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="SELECT w/o initial selected" groupName={props.groupName}>
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
      <FilterGroupItem label="MultBox w/ initial selected" groupName="Group 1" loading={props.loading}>
        <MultiComboBox>
          <MultiComboBoxItem text="MultiComboBoxItem 1" />
          <MultiComboBoxItem selected text="MultiComboBoxItem 2" />
          <MultiComboBoxItem text="MultiComboBoxItem 3" />
          <MultiComboBoxItem selected text="MultiComboBoxItem 4" />
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="MultBox w/o initial selected" groupName="Group 2" required={props.required}>
        <MultiComboBox>
          <MultiComboBoxItem text="MultiComboBoxItem 1" />
          <MultiComboBoxItem text="MultiComboBoxItem 2" />
          <MultiComboBoxItem text="MultiComboBoxItem 3" />
          <MultiComboBoxItem text="MultiComboBoxItem 4" />
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="Date Picker" groupName="Group 2" required={props.required}>
        <DatePicker />
      </FilterGroupItem>
    </FilterBar>
  );
};
renderDefaultStory.storyName = 'Default';

export default {
  title: 'Components / FilterBar',
  component: FilterBar,
  parameters: {
    subcomponents: { FilterGroupItem }
  },
  args: {
    useToolbar: true,
    filterBarExpanded: true,
    considerGroupName: false,
    filterContainerWidth: '13rem',
    activeFiltersCount: 0,
    showClearOnFB: false,
    showRestoreOnFB: false,
    showGo: false,
    showGoOnFB: false,
    showFilterConfiguration: false,
    showSearchOnFiltersDialog: false,
    showClearButton: false,
    showRestoreButton: false,
    visibleInFilterBar: true,
    groupName: 'Custom Group',
    visible: true,
    required: false
  }
};
