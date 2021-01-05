import { fireEvent, render, screen } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { DatePicker } from '@ui5/webcomponents-react/lib/DatePicker';
import { FilterBar } from '@ui5/webcomponents-react/lib/FilterBar';
import { FilterGroupItem } from '@ui5/webcomponents-react/lib/FilterGroupItem';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/lib/MultiComboBoxItem';
import { ComboBox } from '@ui5/webcomponents-react/lib/ComboBox';
import { ComboBoxItem } from '@ui5/webcomponents-react/lib/ComboBoxItem';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';
import { act } from 'react-dom/test-utils';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];

const variants = <VariantManagement variantItems={variantItems} />;
const search = <Input placeholder={'Search'} />;

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
    const { asFragment } = render(
      <FilterBar
        search={search}
        variants={variants}
        useToolbar={true}
        filterBarExpanded={true}
        loading={false}
        considerGroupName={true}
        filterContainerWidth="12rem"
        activeFiltersCount={1337}
        showClearOnFB={true}
        showRestoreOnFB={true}
        showGo={true}
        showGoOnFB={true}
        showFilterConfiguration={true}
        showSearchOnFiltersDialog={true}
        showClearButton={true}
        showRestoreButton={true}
      >
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
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
  });

  it('Hide FilterBar', () => {
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
    fireEvent.click(screen.getByText('Hide Filter Bar'));
    expect(screen.getByText('Show Filter Bar')).toBeVisible();
    expect(asFragment()).toMatchSnapshot();
  });

  it.skip('Toggle Filters Dialog', () => {
    const { asFragment } = render(
      <FilterBar
        search={search}
        variants={variants}
        useToolbar={true}
        filterBarExpanded={true}
        loading={false}
        considerGroupName={true}
        filterContainerWidth="12rem"
        activeFiltersCount={1337}
        showClearOnFB={true}
        showRestoreOnFB={true}
        showGo={true}
        showGoOnFB={true}
        showFilterConfiguration={true}
        showSearchOnFiltersDialog={true}
        showClearButton={true}
        showRestoreButton={true}
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
      //@ts-ignore
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
      //@ts-ignore
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
      //@ts-ignore
      filtersDialogBtns(4).prop('onClick')();
    });
    asFragment.update();
    expect(asFragment.find('ui5-dialog').exists()).toBeFalsy();
  });

  it('Group Filter Items mounted in Dialog', () => {
    const { asFragment } = render(
      <FilterBar
        search={search}
        showClearOnFB={true}
        showRestoreOnFB={true}
        showFilterConfiguration={true}
        showSearchOnFiltersDialog={true}
        showClearButton={true}
        showRestoreButton={true}
      >
        <FilterGroupItem label="INPUT">
          <Input placeholder="Placeholder" value="123123" />
        </FilterGroupItem>
        <FilterGroupItem label="SWITCH">
          <Switch checked={true} />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT" required>
          <Select>
            <Option selected={true}>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>,
      { attachTo: document.body.appendChild(document.createElement('div')) }
    );

    fireEvent.click(screen.getByText('Filters'));

    const [selectFilterBar, selectFilterDialog] = screen.getAllByText('SELECT');
    expect(selectFilterDialog).toHaveAttribute('required', 'true');
    expect(
      selectFilterDialog.parentNode.parentNode.parentNode.parentNode.querySelector('ui5-checkbox')
    ).toHaveAttribute('disabled', 'true');
  });

  it('Filter Dialog Search', () => {
    render(
      <FilterBar showFilterConfiguration showSearchOnFiltersDialog>
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
    const filterButton = screen.getByText('Filters');
    fireEvent.click(filterButton);
    const searchField = screen.getByPlaceholderText('Search for Filters');

    expect(screen.getAllByText('Filter1').length).toBe(2);
    expect(screen.getAllByText('Filter2').length).toBe(2);
    expect(screen.getAllByText('Filter3').length).toBe(2);
    expect(screen.queryByText('Group1')).toBeInTheDocument();
    expect(screen.queryByText('Group2')).toBeInTheDocument();
    expect(screen.queryByText('Basic')).toBeInTheDocument();

    fireEvent.input(searchField, { target: { value: 'Filter1' } });
    expect(screen.getAllByText('Filter1').length).toBe(2);
    expect(screen.getAllByText('Filter2').length).toBe(1);
    expect(screen.getAllByText('Filter3').length).toBe(1);
    expect(screen.queryByText('Group1')).toBeInTheDocument();
    expect(screen.queryByText('Group2')).not.toBeInTheDocument();
    expect(screen.queryByText('Basic')).not.toBeInTheDocument();

    fireEvent.input(searchField, { target: { value: 'Nothing to be found' } });
    expect(screen.getAllByText('Filter1').length).toBe(1);
    expect(screen.getAllByText('Filter2').length).toBe(1);
    expect(screen.getAllByText('Filter3').length).toBe(1);
    expect(screen.queryByText('Group1')).not.toBeInTheDocument();
    expect(screen.queryByText('Group2')).not.toBeInTheDocument();
    expect(screen.queryByText('Basic')).not.toBeInTheDocument();

    fireEvent.input(searchField, { target: { value: 'Filter2' } });
    expect(screen.getAllByText('Filter1').length).toBe(1);
    expect(screen.getAllByText('Filter2').length).toBe(2);
    expect(screen.getAllByText('Filter3').length).toBe(1);
    expect(screen.queryByText('Group1')).not.toBeInTheDocument();
    expect(screen.queryByText('Group2')).toBeInTheDocument();
    expect(screen.queryByText('Basic')).not.toBeInTheDocument();

    fireEvent.input(searchField, { target: { value: '' } });
    expect(screen.getAllByText('Filter1').length).toBe(2);
    expect(screen.getAllByText('Filter2').length).toBe(2);
    expect(screen.getAllByText('Filter3').length).toBe(2);
    expect(screen.queryByText('Group1')).toBeInTheDocument();
    expect(screen.queryByText('Group2')).toBeInTheDocument();
    expect(screen.queryByText('Basic')).toBeInTheDocument();
  });

  it('fire events', () => {
    const onToggleFilters = jest.fn();
    const onFiltersDialogSave = jest.fn();
    const onFiltersDialogClear = jest.fn();
    const onFiltersDialogCancel = jest.fn();
    const onFiltersDialogOpen = jest.fn();
    const onFiltersDialogClose = jest.fn();
    const onFiltersDialogSelectionChange = jest.fn();
    const onFiltersDialogSearch = jest.fn();
    const onClear = jest.fn();
    const onGo = jest.fn();
    const onRestore = jest.fn();
    const { rerender } = render(
      <FilterBar
        tooltip="FilterBar-Test"
        showFilterConfiguration
        showSearchOnFiltersDialog
        showClearOnFB
        showGoOnFB
        showClearButton
        showRestoreButton
        showGo
        showRestoreOnFB
        onToggleFilters={onToggleFilters}
        onClear={onClear}
        onGo={onGo}
        onRestore={onRestore}
        onFiltersDialogOpen={onFiltersDialogOpen}
        onFiltersDialogClear={onFiltersDialogClear}
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

    const dialogClearButton = screen.getAllByText('Clear')[1];
    fireEvent.click(dialogClearButton);
    expect(onFiltersDialogClear).toHaveBeenCalledTimes(1);

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
    expect(onFiltersDialogSave).toHaveBeenCalledTimes(1);
    expect(onFiltersDialogClose).toHaveBeenCalledTimes(4);

    rerender(
      <FilterBar
        tooltip="FilterBar-Test"
        showFilterConfiguration
        showSearchOnFiltersDialog
        showClearOnFB
        showGoOnFB
        showGo={false}
        showClearButton
        showRestoreButton
        showRestoreOnFB
        onToggleFilters={onToggleFilters}
        onClear={onClear}
        onGo={onGo}
        onRestore={onRestore}
        onFiltersDialogOpen={onFiltersDialogOpen}
        onFiltersDialogClear={onFiltersDialogClear}
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
    expect(onFiltersDialogSave).toHaveBeenCalledTimes(2);
    expect(onFiltersDialogClose).toHaveBeenCalledTimes(5);
  });

  createPassThroughPropsTest(FilterBar);
});
