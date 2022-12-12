import { fireEvent, render, screen } from '@shared/tests';
import { createChangeTagNameTest, createCustomPropsTest } from '@shared/tests/utils';
import React, { createRef } from 'react';
import { act } from 'react-dom/test-utils';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { Bar } from '../../webComponents/Bar';
import { Button } from '../../webComponents/Button';
import { ComboBox } from '../../webComponents/ComboBox';
import { ComboBoxItem } from '../../webComponents/ComboBoxItem';
import { DatePicker } from '../../webComponents/DatePicker';
import { Input } from '../../webComponents/Input';
import { MultiComboBox } from '../../webComponents/MultiComboBox';
import { MultiComboBoxItem } from '../../webComponents/MultiComboBoxItem';
import { Option } from '../../webComponents/Option';
import { Select } from '../../webComponents/Select';
import { Switch } from '../../webComponents/Switch';
import { FilterGroupItem } from '../FilterGroupItem';
import { Toolbar } from '../Toolbar';
import { VariantManagement } from '../VariantManagement';
import { VariantItem } from '../VariantManagement/VariantItem';
import { FilterBar } from './index';

const variants = (
  <VariantManagement>
    <VariantItem>Variant 1</VariantItem>
    <VariantItem selected>Variant 2</VariantItem>
  </VariantManagement>
);
const search = <Input placeholder={'Search'} />;

// todo update tests
describe('FilterBar', () => {
  it('Render without crashing - default props', () => {
    const { asFragment } = render(
      <FilterBar>
        <FilterGroupItem label="Classification" key="classification">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render without crashing - w/ filter dialog', () => {
    const inputRef = createRef<Ui5DomRef>();
    const { asFragment } = render(
      <FilterBar
        search={search}
        header={variants}
        hideToolbar={false}
        filterBarCollapsed={false}
        considerGroupName={true}
        filterContainerWidth="12rem"
        activeFiltersCount={1337}
        showClearOnFB={true}
        showRestoreOnFB={true}
        showGoOnFB={true}
        hideFilterConfiguration={false}
      >
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" ref={inputRef} />
        </FilterGroupItem>
        <FilterGroupItem label="Switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="ComboBox">
          <ComboBox>
            <ComboBoxItem text="ComboBoxItem1" />
            <ComboBoxItem text="ComboBoxItem2" />
          </ComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected">
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
        <FilterGroupItem label="MultBox" groupName="Group 2" required>
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2" required>
          <DatePicker />
        </FilterGroupItem>
      </FilterBar>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(inputRef.current.tagName).toBe('UI5-INPUT');
  });

  // todo test with cypress
  it.skip('Toggle Filters Dialog', () => {
    const { asFragment } = render(
      <FilterBar
        search={search}
        header={variants}
        considerGroupName={true}
        filterContainerWidth="12rem"
        activeFiltersCount={1337}
        showClearOnFB={true}
        showRestoreOnFB={true}
        showGoOnFB={true}
      >
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Switch">
          <Switch />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/ initial selected">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="SELECT w/o initial selected">
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
        <FilterGroupItem label="MultBox" groupName="Group 2" required>
          <MultiComboBox>
            <MultiComboBoxItem text="MultiComboBoxItem 1" />
            <MultiComboBoxItem text="MultiComboBoxItem 2" />
            <MultiComboBoxItem text="MultiComboBoxItem 3" />
            <MultiComboBoxItem text="MultiComboBoxItem 4" />
          </MultiComboBox>
        </FilterGroupItem>
        <FilterGroupItem label="Date Picker" groupName="Group 2" required>
          <DatePicker />
        </FilterGroupItem>
      </FilterBar>,
      { attachTo: document.body.appendChild(document.createElement('div')) }
    );
    const openFiltersDialogBtn = asFragment.find(Toolbar).find(Button).at(5);

    act(() => {
      openFiltersDialogBtn.prop('onClick')();
    });
    asFragment.update();
    expect(asFragment.find('ui5-dialog').exists()).toBeTruthy();
    expect(asFragment()).toMatchSnapshot();
    const filtersDialogBtns = (index) => asFragment.find(Bar).find(Button).at(index);
    act(() => {
      filtersDialogBtns(0).prop('onClick')();
    });
    asFragment.update();
    expect(asFragment.find('ui5-dialog').exists()).toBeFalsy();
    expect(asFragment.render()).toMatchSnapshot();
    act(() => {
      openFiltersDialogBtn.prop('onClick')();
    });
    asFragment.update();
    expect(asFragment.find('ui5-dialog').exists()).toBeTruthy();
    act(() => {
      filtersDialogBtns(3).prop('onClick')();
    });
    asFragment.update();
    expect(asFragment.find('ui5-dialog').exists()).toBeFalsy();
    act(() => {
      openFiltersDialogBtn.prop('onClick')();
    });
    asFragment.update();
    expect(asFragment.find('ui5-dialog').exists()).toBeTruthy();
    act(() => {
      filtersDialogBtns(4).prop('onClick')();
    });
    asFragment.update();
    expect(asFragment.find('ui5-dialog').exists()).toBeFalsy();
  });

  // todo test remaining events with cypress
  it.skip('fire events', () => {
    const onToggleFilters = jest.fn();
    const onFiltersDialogSave = jest.fn();
    const onFiltersDialogCancel = jest.fn();
    const onFiltersDialogOpen = jest.fn();
    const onFiltersDialogClose = jest.fn();
    const onClear = jest.fn();
    const onGo = jest.fn();
    const onRestore = jest.fn();
    const onFiltersDialogSearch = jest.fn();
    const onFiltersDialogSelectionChange = jest.fn();
    const { rerender } = render(
      <FilterBar
        title="FilterBar-Test"
        showClearOnFB
        showGoOnFB
        showRestoreOnFB
        onToggleFilters={onToggleFilters}
        onClear={onClear}
        onGo={onGo}
        onRestore={onRestore}
        onFiltersDialogOpen={onFiltersDialogOpen}
        onFiltersDialogSave={onFiltersDialogSave}
        onFiltersDialogCancel={onFiltersDialogCancel}
        onFiltersDialogClose={onFiltersDialogClose}
        onFiltersDialogSearch={onFiltersDialogSearch}
        onFiltersDialogSelectionChange={onFiltersDialogSelectionChange}
      >
        <FilterGroupItem label="Filter1" groupName="Group1">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Filter2" groupName="Group2">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Filter3">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );

    const toggleButton = screen.getByText('Hide Filter Bar');
    const filterArea = screen.getByTitle('FilterBar-Test').children[1];
    expect(filterArea).toHaveClass('FilterBar-filterAreaOpen');
    fireEvent.click(toggleButton);
    expect(onToggleFilters).toHaveBeenCalledTimes(1);
    expect(filterArea).toHaveClass('FilterBar-filterAreaClosed');
    fireEvent.click(toggleButton);
    expect(onToggleFilters).toHaveBeenCalledTimes(2);
    expect(filterArea).toHaveClass('FilterBar-filterAreaOpen');

    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);
    expect(onClear).toHaveBeenCalledTimes(1);

    const goButton = screen.getByText('Go');
    fireEvent.click(goButton);
    expect(onGo).toHaveBeenCalledTimes(1);

    const restoreButton = screen.getByText('Restore');
    fireEvent.click(restoreButton);
    expect(onRestore).toHaveBeenCalledTimes(1);

    const filterButton = screen.getByText('Filters');
    fireEvent.click(filterButton);
    expect(onFiltersDialogOpen).toHaveBeenCalledTimes(1);

    const searchField = screen.getByPlaceholderText('Search for Filters');
    fireEvent.input(searchField, { target: { value: 'some input' } });
    fireEvent.input(searchField, { target: { value: '' } });
    expect(onFiltersDialogSearch).toHaveBeenCalledTimes(2);

    expect(filterArea.children.length).toBe(3);
    const dialogCheckbox1 = screen.getAllByRole('checkbox')[0];
    const dialogCheckbox2 = screen.getAllByRole('checkbox')[1];
    fireEvent.change(dialogCheckbox1, { target: { checked: false } });
    fireEvent.change(dialogCheckbox2, { target: { checked: false } });
    expect(onFiltersDialogSelectionChange).toHaveBeenCalledTimes(2);

    const dialogSaveButton = screen.getByText('Save');
    fireEvent.click(dialogSaveButton);
    expect(onFiltersDialogSave).toHaveBeenCalledTimes(1);
    expect(onFiltersDialogClose).toHaveBeenCalledTimes(1);
    expect(filterArea.children.length).toBe(1);

    fireEvent.click(filterButton);

    const dialogCancelButton = screen.getByText('Cancel');
    fireEvent.click(dialogCancelButton);
    expect(onFiltersDialogCancel).toHaveBeenCalledTimes(1);
    expect(onFiltersDialogSave).toHaveBeenCalledTimes(1);
    expect(onFiltersDialogClose).toHaveBeenCalledTimes(2);

    fireEvent.click(filterButton);

    fireEvent.keyDown(document.getElementsByTagName('ui5-dialog')[0], { key: 'Escape', code: 'Escape' });
    expect(onFiltersDialogSave).toHaveBeenCalledTimes(1);
    expect(onFiltersDialogClose).toHaveBeenCalledTimes(3);

    fireEvent.click(filterButton);

    const dialogGoButton = screen.getAllByText('Go')[1];
    fireEvent.click(dialogGoButton);
    expect(onGo).toHaveBeenCalledTimes(2);
    expect(onFiltersDialogSave).toHaveBeenCalledTimes(2);
    expect(onFiltersDialogClose).toHaveBeenCalledTimes(4);

    rerender(
      <FilterBar
        title="FilterBar-Test"
        showClearOnFB
        showGoOnFB
        showRestoreOnFB
        onToggleFilters={onToggleFilters}
        onClear={onClear}
        onGo={onGo}
        onRestore={onRestore}
        onFiltersDialogOpen={onFiltersDialogOpen}
        onFiltersDialogSelectionChange={onFiltersDialogSelectionChange}
        onFiltersDialogSearch={onFiltersDialogSearch}
        onFiltersDialogSave={onFiltersDialogSave}
        onFiltersDialogCancel={onFiltersDialogCancel}
        onFiltersDialogClose={onFiltersDialogClose}
      >
        <FilterGroupItem label="Filter1" groupName="Group1">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Filter2" groupName="Group2">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="Filter3">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );

    fireEvent.click(filterButton);

    fireEvent.keyDown(document.getElementsByTagName('ui5-dialog')[0], { key: 'Escape', code: 'Escape' });
    expect(onFiltersDialogSave).toHaveBeenCalledTimes(3);
    expect(onFiltersDialogClose).toHaveBeenCalledTimes(5);
  });

  createChangeTagNameTest(FilterBar);

  createCustomPropsTest(FilterBar);
});
