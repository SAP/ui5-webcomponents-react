import { useId, useState } from 'react';
import {
  Input,
  MultiComboBox,
  MultiInput,
  Option,
  RatingIndicator,
  Select,
  StepInput,
  Switch,
  Token
} from '../../webComponents/index.js';
import { FilterGroupItem } from '../FilterGroupItem/index.js';
import { VariantManagement } from '../VariantManagement/index.js';
import { VariantItem } from '../VariantManagement/VariantItem.js';
import type { FilterBarPropTypes } from './index.js';
import { FilterBar } from './index.js';
import { cypressPassThroughTestsFactory, mountWithCustomTagName } from '@/cypress/support/utils';

const variants = (
  <VariantManagement data-testid="variantManagement">
    <VariantItem>Variant 1</VariantItem>
    <VariantItem selected>Variant 2</VariantItem>
  </VariantManagement>
);

describe('FilterBar.cy.tsx', () => {
  // for some reason this test has to be invoked first, as otherwise assertions after `realHover` will sometimes fail even with delay
  it('reorder', () => {
    const save = cy.spy().as('saveSpy');
    const reorder = cy.spy().as('reorderSpy');
    cy.mount(<FilterBarWithReordering onFiltersDialogSave={save} onReorder={reorder} />);

    cy.get('[ui5-label]').eq(0).should('have.text', 'StepInput');
    cy.get('[ui5-label]').eq(1).should('have.text', 'RatingIndicator');
    cy.get('[ui5-label]').eq(2).should('have.text', 'MultiInput');
    cy.get('[ui5-label]').eq(3).should('have.text', 'Input');
    cy.get('[ui5-label]').eq(4).should('have.text', 'Switch');

    cy.get('[text="Filters"]').click({ force: true });
    cy.get('[ui5-dialog]').should('have.attr', 'open');
    cy.wait(200);
    cy.get('[data-text="SELECT w/ initial selected"]').as('notSelected');
    cy.get('[data-text="MultiInput"]').as('multiInputRow');
    cy.get('[data-text="StepInput"]').as('stepInputRow');
    // active icon should be displayed if not hovered or focused
    cy.get('@multiInputRow').find('[name="circle-task-2"]').should('be.visible');
    // if no row was focused before, show reorder buttons on hover, but only for visible filters (selected rows)
    cy.get('@multiInputRow').realHover();
    cy.get('@multiInputRow').find('[data-component-name="FilterBarDialogTableCellReorderBtns"]').should('be.visible');
    cy.get('@multiInputRow').find('[name="circle-task-2"]').should('not.be.visible');
    cy.get('@notSelected').realHover();
    cy.get('@notSelected').find('[data-component-name="FilterBarDialogTableCellReorderBtns"]').should('not.be.visible');
    cy.get('@notSelected').find('[name="circle-task-2"]').should('not.exist');
    cy.realPress('Tab');
    cy.get('@multiInputRow').realHover();
    // don't show reorder buttons if a row was focused before
    cy.get('@multiInputRow').find('[name="circle-task-2"]').should('be.visible');
    cy.get('@multiInputRow')
      .find('[data-component-name="FilterBarDialogTableCellReorderBtns"]')
      .should('not.be.visible');
    cy.focused().should('have.attr', 'data-text', 'StepInput');
    cy.focused().find('[data-component-name="FilterBarDialogTableCellReorderBtns"]').should('be.visible');

    // reorder via keyboard
    cy.get('[ui5-table-row]').eq(0).should('have.attr', 'data-text', 'StepInput');
    cy.realPress(['Meta', 'ArrowDown']);
    cy.get('[ui5-table-row]').eq(0).should('have.attr', 'data-text', 'RatingIndicator');
    cy.get('[ui5-table-row]').eq(1).should('have.attr', 'data-text', 'StepInput');
    cy.realPress(['Meta', 'End']);
    cy.get('[ui5-table-row]').eq(0).should('have.attr', 'data-text', 'RatingIndicator');
    cy.get('[ui5-table-row]').eq(1).should('have.attr', 'data-text', 'MultiInput');
    cy.get('[ui5-table-row]').eq(5).should('have.attr', 'data-text', 'StepInput');
    cy.realPress(['Meta', 'ArrowUp']);
    cy.get('[ui5-table-row]').eq(5).should('have.attr', 'data-text', 'SELECT w/ initial selected');
    cy.get('[ui5-table-row]').eq(4).should('have.attr', 'data-text', 'StepInput');
    cy.realPress(['Meta', 'Home']);
    cy.get('[ui5-table-row]').eq(0).should('have.attr', 'data-text', 'StepInput');
    cy.get('[ui5-table-row]').eq(1).should('have.attr', 'data-text', 'RatingIndicator');

    // reorder via button click
    cy.get('[ui5-table-row]').eq(0).should('have.attr', 'data-text', 'StepInput');
    cy.get('@stepInputRow').find('[data-component-name="FilterBarDialogReorderBtnTop"]').as('topBtn');
    cy.get('@topBtn').should('have.attr', 'disabled', 'disabled');
    cy.get('@stepInputRow').find('[data-component-name="FilterBarDialogReorderBtnUp"]').as('upBtn');
    cy.get('@upBtn').should('have.attr', 'disabled', 'disabled');
    cy.get('@stepInputRow').find('[data-component-name="FilterBarDialogReorderBtnDown"]').as('downBtn');
    cy.get('@downBtn').should('not.have.attr', 'disabled');
    cy.get('@stepInputRow').find('[data-component-name="FilterBarDialogReorderBtnBottom"]').as('bottomBtn');
    cy.get('@bottomBtn').should('not.have.attr', 'disabled');

    cy.get('@downBtn').realClick();
    cy.get('[ui5-table-row]').eq(0).should('have.attr', 'data-text', 'RatingIndicator');
    cy.get('[ui5-table-row]').eq(1).should('have.attr', 'data-text', 'StepInput');
    cy.get('@stepInputRow').realClick();
    cy.get('@bottomBtn').realClick();
    cy.get('[ui5-table-row]').eq(0).should('have.attr', 'data-text', 'RatingIndicator');
    cy.get('[ui5-table-row]').eq(1).should('have.attr', 'data-text', 'MultiInput');
    cy.get('[ui5-table-row]').eq(5).should('have.attr', 'data-text', 'StepInput');

    cy.get('@stepInputRow').find('[data-component-name="FilterBarDialogReorderBtnTop"]').as('topBtn');
    cy.get('@topBtn').should('not.have.attr', 'disabled');
    cy.get('@stepInputRow').find('[data-component-name="FilterBarDialogReorderBtnUp"]').as('upBtn');
    cy.get('@upBtn').should('not.have.attr', 'disabled');
    cy.get('@stepInputRow').find('[data-component-name="FilterBarDialogReorderBtnDown"]').as('downBtn');
    cy.get('@downBtn').should('have.attr', 'disabled', 'disabled');
    cy.get('@stepInputRow').find('[data-component-name="FilterBarDialogReorderBtnBottom"]').as('bottomBtn');
    cy.get('@bottomBtn').should('have.attr', 'disabled', 'disabled');

    cy.get('@stepInputRow').realClick();
    cy.get('@upBtn').realClick();
    cy.get('[ui5-table-row]').eq(5).should('have.attr', 'data-text', 'SELECT w/ initial selected');
    cy.get('[ui5-table-row]').eq(4).should('have.attr', 'data-text', 'StepInput');
    cy.get('@stepInputRow').realClick();
    cy.get('@topBtn').realClick();
    cy.get('[ui5-table-row]').eq(0).should('have.attr', 'data-text', 'StepInput');
    cy.get('[ui5-table-row]').eq(1).should('have.attr', 'data-text', 'RatingIndicator');

    // check if keyboard nav still works
    cy.wait(100);
    cy.realPress('End');
    cy.focused().should('have.attr', 'data-text', 'SELECT w/ initial selected');
    cy.realPress('ArrowUp');
    cy.focused().should('have.attr', 'data-text', 'Switch');
    cy.realPress('Home');
    cy.focused().should('have.attr', 'data-text', 'StepInput');
    cy.realPress('ArrowDown');
    cy.focused().should('have.attr', 'data-text', 'RatingIndicator');

    // reset behavior
    cy.realPress(['Meta', 'End']);
    cy.get('[ui5-table-row]').eq(5).should('have.attr', 'data-text', 'RatingIndicator');
    cy.findByText('Reset').realClick();
    cy.get('[data-component-name="FilterBarDialogResetMessageBox"]').should('have.attr', 'open');
    cy.wait(100);
    cy.get('[data-action="OK"]').realClick();
    cy.get('[data-component-name="FilterBarDialogResetMessageBox"]').should('not.exist');
    cy.get('[ui5-table-row]').eq(1).should('have.attr', 'data-text', 'RatingIndicator');

    // event
    cy.focused().parent().should('have.attr', 'data-component-name', 'FilterBarDialogSaveBtn');
    cy.realPress(['Shift', 'Tab']);
    cy.focused().should('have.attr', 'data-text', 'RatingIndicator');
    cy.realPress(['Meta', 'End']);
    cy.get('[ui5-table-row]').eq(5).should('have.attr', 'data-text', 'RatingIndicator');
    cy.findByText('OK').realClick();
    cy.get('@saveSpy').should('have.been.calledOnce');

    cy.get('[ui5-label]').eq(0).should('have.text', 'StepInput');
    cy.get('[ui5-label]').eq(1).should('have.text', 'MultiInput');
    cy.get('[ui5-label]').eq(2).should('have.text', 'Input');
    cy.get('[ui5-label]').eq(3).should('have.text', 'Switch');
    cy.get('[ui5-label]').eq(4).should('have.text', 'RatingIndicator');
  });

  it('Toggle FilterBar filters', () => {
    const toggle = cy.spy().as('toggleSpy');
    cy.mount(
      <FilterBar onToggleFilters={toggle}>
        <FilterGroupItem label="Classification" key="classification" filterKey="classification">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    cy.findByText('Classification').should('be.visible');
    cy.get('[ui5-select]').should('be.visible');

    cy.get('[text="Hide Filter Bar"]').click({ force: true });
    cy.get('@toggleSpy').should('have.been.calledOnce');

    cy.findByText('Classification').should('not.be.visible');
    cy.get('[ui5-select]').should('not.be.visible');

    cy.get('[text="Show Filter Bar"]').click({ force: true });
    cy.get('@toggleSpy').should('have.been.calledTwice');

    cy.findByText('Classification').should('be.visible');
    cy.get('[ui5-select]').should('be.visible');

    cy.mount(
      <FilterBar onToggleFilters={toggle} hideToggleFiltersButton>
        <FilterGroupItem label="Classification" key="classification" filterKey="classification">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    cy.findByText('Hide Filter Bar').should('not.exist');
    cy.findByText('Show Filter Bar').should('not.exist');
  });

  it('Selection: FilterGroupItems in Dialog + events', () => {
    const TestComp = (props: Omit<FilterBarPropTypes, 'children'>) => {
      const [selectedFilters, setSelectedFilters] = useState('');
      const [closeTrigger, setCloseTrigger] = useState('');
      const [savedVisibleFilters, setSavedVisibleFilters] = useState('');
      const {
        onAfterFiltersDialogOpen,
        onFiltersDialogOpen,
        onFiltersDialogSelectionChange,
        onFiltersDialogClose,
        onFiltersDialogCancel,
        onFiltersDialogSave,
        onRestore
      } = props;

      const handleDialogOpen = (e) => {
        onFiltersDialogOpen(e);
      };

      const handleOnAfterDialogOpen = (e) => {
        onAfterFiltersDialogOpen(e);
      };

      const handleSelectionChange = (e) => {
        setSelectedFilters(Array.from(e.selectedFilterKeys).join(' '));
        onFiltersDialogSelectionChange(e);
      };

      const handleDialogClose = (e) => {
        setCloseTrigger(e);
        onFiltersDialogClose(e);
      };

      const handleCancel = (e) => {
        onFiltersDialogCancel(e);
      };

      const handleSave = (e) => {
        setSavedVisibleFilters(e.detail.selectedFilterKeys.join(' '));
        onFiltersDialogSave(e);
      };

      const handleRestore = (e) => {
        onRestore(e);
      };

      return (
        <>
          <FilterBar
            {...props}
            onAfterFiltersDialogOpen={handleOnAfterDialogOpen}
            onFiltersDialogOpen={handleDialogOpen}
            onFiltersDialogSelectionChange={handleSelectionChange}
            onFiltersDialogClose={handleDialogClose}
            onFiltersDialogCancel={handleCancel}
            onFiltersDialogSave={handleSave}
            onRestore={handleRestore}
          >
            <FilterGroupItem label="INPUT" filterKey="0">
              <Input placeholder="Placeholder" value="123123" data-testid="INPUT" />
            </FilterGroupItem>
            <FilterGroupItem label="SWITCH" filterKey="1">
              <Switch checked={true} data-testid="SWITCH" />
            </FilterGroupItem>
            <FilterGroupItem label="SELECT" required filterKey="2">
              <Select data-testid="SELECT">
                <Option selected={true}>Option 1</Option>
                <Option>Option 2</Option>
                <Option>Option 3</Option>
                <Option>Option 4</Option>
              </Select>
            </FilterGroupItem>
          </FilterBar>
          <hr />
          <span>Selected: </span>
          <span data-testid="selected">{selectedFilters}</span>
          <br />
          <span>Close Trigger: </span>
          <span data-testid="close-trigger">{closeTrigger}</span>
          <br />
          <span>Saved Filters: </span>
          <span data-testid="saved-filters">{savedVisibleFilters}</span>
        </>
      );
    };

    const afterOpen = cy.spy().as('afterOpenSpy');
    const open = cy.spy().as('openSpy');
    const close = cy.spy().as('closeSpy');
    const select = cy.spy().as('selectSpy');
    const cancel = cy.spy().as('cancelSpy');
    const save = cy.spy().as('saveSpy');
    const restore = cy.spy().as('restoreSpy');
    cy.mount(
      <TestComp
        activeFiltersCount={42}
        showResetButton
        onAfterFiltersDialogOpen={afterOpen}
        onFiltersDialogOpen={open}
        onFiltersDialogSelectionChange={select}
        onFiltersDialogClose={close}
        onFiltersDialogCancel={cancel}
        onFiltersDialogSave={save}
        onRestore={restore}
      />
    );

    cy.findAllByText('INPUT').should('have.length', 1);
    cy.findAllByText('SWITCH').should('have.length', 1);
    cy.findAllByText('SELECT').should('have.length', 1);
    cy.findAllByTestId('INPUT').should('have.length', 1);
    cy.findAllByTestId('SWITCH').should('have.length', 1);
    cy.findAllByTestId('SELECT').should('have.length', 1);

    cy.get('[text="Filters (42)"]').click({ force: true });
    cy.get('@openSpy').should('have.been.calledOnce');
    cy.get('@afterOpenSpy').should('have.been.calledOnce');

    cy.findAllByText('INPUT').should('have.length', 2);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 2);
    cy.findAllByTestId('INPUT').should('have.length', 1);
    cy.findAllByTestId('SWITCH').should('have.length', 1);
    cy.findAllByTestId('SELECT').should('have.length', 1);

    cy.findByText('Show Values').click();

    cy.findAllByText('INPUT').should('have.length', 2);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 2);
    cy.findAllByTestId('INPUT').should('have.length', 2);
    cy.findAllByTestId('SWITCH').should('have.length', 2);
    cy.findAllByTestId('SELECT').should('have.length', 2);

    let saveCallCount = 1;
    let cancelCallCount = 1;

    ['Cancel', 'Reset', 'ESC', 'OK'].forEach((action, index) => {
      // is already open when entering loop the first time
      if (index !== 0) {
        cy.get('[text="Filters (42)"]').click({ force: true });
        cy.findByText('Show Values').click();
      }

      const checkboxes = cy.get('[ui5-checkbox]');
      checkboxes.should('have.length', 4);

      let selected = '2';
      checkboxes.each((item, index, arr) => {
        const wrappedItem = cy.wrap(item);
        wrappedItem.should('be.visible');

        wrappedItem.click();

        if (index === 0) {
          // select-all: deselect all - only required is checked
          wrappedItem.should('not.have.attr', 'checked');
          cy.findByTestId('selected').should('have.text', selected);
          const requiredItem = cy.wrap(arr[arr.length - 1]);
          requiredItem.should('have.attr', 'checked');
        } else if (index !== arr.length - 1) {
          wrappedItem.should('have.attr', 'checked');
          selected += ` ${index - 1}`;
          cy.findByTestId('selected').should('have.text', selected);
        } else {
          // is sometimes not selected, seems to be related to the click target and cypress
          // wrappedItem.should('have.attr', 'checked');
          cy.findByTestId('selected').should('have.text', selected);
        }
      });

      cy.get('@selectSpy').should('have.callCount', 3 * (index + 1));

      cy.findAllByText('INPUT').should('have.length', 2);
      cy.findAllByText('SWITCH').should('have.length', 2);
      cy.findAllByText('SELECT').should('have.length', 2);
      cy.findAllByTestId('INPUT').should('have.length', 2);
      cy.findAllByTestId('SWITCH').should('have.length', 2);
      cy.findAllByTestId('SELECT').should('have.length', 2);

      if (action === 'ESC') {
        cy.closeUi5PopupWithEsc();
      } else {
        cy.findByText(action).click();
      }
      if (action === 'OK') {
        cy.get('@saveSpy').should('have.callCount', saveCallCount);
        saveCallCount++;
        cy.findByTestId('close-trigger').should('have.text', 'okButtonPressed');
        cy.findByTestId('saved-filters').should('have.text', '0 1 2');
      } else {
        if (action === 'Reset') {
          cy.get('[data-component-name="FilterBarDialogResetMessageBox"]').contains('Cancel').click();
          cy.get('@restoreSpy').should('have.callCount', 0);
          cy.findByText(action).click();
          cy.closeUi5PopupWithEsc();
          cy.focused().parent().should('have.attr', 'data-component-name', 'FilterBarDialogSaveBtn');
          cy.get('@restoreSpy').should('have.callCount', 0);
          cy.findByText(action).click();
          cy.get('[data-component-name="FilterBarDialogResetMessageBox"]').contains('OK').click();
          cy.focused().parent().should('have.attr', 'data-component-name', 'FilterBarDialogSaveBtn');
          cy.findByText('OK').click();
          cy.get('@saveSpy').should('have.callCount', saveCallCount);
          saveCallCount++;
        } else {
          cy.get('@cancelSpy').should('have.callCount', cancelCallCount);
          cancelCallCount++;
          if (action === 'ESC') {
            cy.findByTestId('close-trigger').should('have.text', 'escPressed');
          } else {
            cy.findByTestId('close-trigger').should('have.text', 'cancelButtonPressed');
          }
        }
        cy.findAllByText('INPUT').should('exist');
        cy.findAllByText('SWITCH').should('exist');
        cy.findAllByText('SELECT').should('exist');
        cy.findAllByTestId('INPUT').should('exist');
        cy.findAllByTestId('SWITCH').should('exist');
        cy.findAllByTestId('SELECT').should('exist');
      }
      // dialog should be closed
      cy.findByText('Filters').should('not.exist');
      cy.get('@closeSpy').should('have.callCount', index + 1);
    });
  });

  // todo selection, group + list view
  it('Dialog search', () => {
    cy.mount(
      <FilterBar>
        <FilterGroupItem label="INPUT" filterKey="0">
          <Input placeholder="Placeholder" value="123123" data-testid="INPUT" />
        </FilterGroupItem>
        <FilterGroupItem label="SWITCH" filterKey="1">
          <Switch checked={true} data-testid="SWITCH" />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT" required filterKey="2">
          <Select data-testid="SELECT">
            <Option selected={true}>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    cy.get('[text="Filters"]').click({ force: true });

    cy.findAllByText('INPUT').should('have.length', 2);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 2);

    cy.findByPlaceholderText('Search for filters').typeIntoUi5Input('S{enter}');

    cy.findAllByText('INPUT').should('have.length', 1);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 2);

    cy.findByPlaceholderText('Search for filters').typeIntoUi5Input('W{enter}', { force: true });

    cy.findAllByText('INPUT').should('have.length', 1);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 1);

    cy.findByPlaceholderText('Search for filters').shadow().find('[ui5-icon]').click();

    cy.findAllByText('INPUT').should('have.length', 2);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 2);
  });

  it('toolbar', () => {
    cy.mount(
      <FilterBar header={variants} hideToolbar={false} showGoOnFB>
        <FilterGroupItem label="Classification" key="classification" data-testid="SELECT" filterKey="0">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    cy.get('[text="Go"]');
    cy.get('[text="Filters"]');
    cy.get('[text="Adapt Filters"]').should('not.exist');
    cy.get('[text="Hide Filter Bar"]');
    cy.findByTestId('variantManagement');
    cy.findByTestId('SELECT');

    cy.mount(
      <FilterBar header={variants} hideToolbar={true} showGoOnFB>
        <FilterGroupItem label="Classification" key="classification" data-testid="SELECT" filterKey="0">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    cy.get('[text="Go"]');
    cy.get('[text="Filters"]').should('not.exist');
    cy.get('[text="Adapt Filters"]');
    cy.get('[text="Hide Filter Bar"]').should('not.exist');
    cy.findByPlaceholderText('Search').should('not.exist');
    cy.findByTestId('variantManagement').should('not.exist');
    cy.findByTestId('SELECT');
  });

  it('addCustomCSS', () => {
    cy.mount(
      <FilterBar>
        <FilterGroupItem label="INPUT" filterKey="0">
          <Input placeholder="Placeholder" value="123123" data-testid="INPUT" />
        </FilterGroupItem>
        <FilterGroupItem label="SWITCH" active filterKey="1">
          <Switch checked={true} data-testid="SWITCH" />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT" required filterKey="2">
          <Select data-testid="SELECT">
            <Option selected={true}>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );
    cy.get('[text="Filters"]').click({ force: true });
    cy.get('[accessible-name="Group View"]').click();

    cy.get('[data-component-name="FilterBarDialogGroupTableHeaderRow"]')
      .shadow()
      .find('[ui5-table-header-cell]')
      .should('have.css', 'visibility', 'hidden');

    cy.get('[data-component-name="FilterBarDialogTable"][data-is-grouped]')
      .shadow()
      .find('#nodata-row')
      .should('have.css', 'display', 'none');

    cy.get('[data-component-name="FilterBarDialogTable"]')
      .shadow()
      .find('#table')
      .should('have.css', 'grid-template-columns', '44px 436px 160px');

    cy.get('[data-component-name="FilterBarDialogPanelTable"]')
      .shadow()
      .find('#table')
      .should('have.css', 'grid-template-columns', '44px 436px 160px');
  });

  it('fire FilterBar events', () => {
    const onClear = cy.spy().as('clear');
    const onGo = cy.spy().as('go');
    const onRestore = cy.spy().as('restore');
    cy.mount(
      <FilterBar
        showClearOnFB
        showGoOnFB
        showRestoreOnFB
        onClear={onClear}
        onGo={onGo}
        onRestore={onRestore}
        activeFiltersCount={42}
      >
        <FilterGroupItem label="Filter1" groupName="Group1" filterKey="0">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );
    cy.get('[text="Go"]').click({ force: true });
    cy.get('@go').should('have.been.calledOnce');

    cy.get('[text="Clear"]').click({ force: true });
    cy.get('@clear').should('have.been.calledOnce');

    cy.get('[text="Restore"]').click({ force: true });
    cy.get('@restore').should('have.been.calledOnce');
  });

  it('Dialog: search', () => {
    const onSearch = cy.spy().as('search');
    cy.mount(
      <FilterBar onFiltersDialogSearch={onSearch} activeFiltersCount={42}>
        <FilterGroupItem label="A" groupName="Group1" data-testid="a" filterKey="0">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="AA" groupName="Group2" data-testid="aa" filterKey="0">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="B" data-testid="b" filterKey="0">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );

    cy.get('[text="Filters (42)"]').click({ force: true });
    cy.get('[data-component-name="FilterBarDialogSearchInput"]').should('have.attr', 'focused');

    cy.get('[ui5-table-row]').should('have.length', 3);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('a');
    cy.get('[ui5-table-row]').should('have.length', 2);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('A');
    cy.get('[ui5-table-row]').should('have.length', 1);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('a');
    cy.get('[ui5-table-row]').should('have.id', 'nodata-row').should('have.length', 1);
    cy.get('@search').should('have.callCount', 3);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('{selectall}{backspace}');
    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('b');
    cy.get('[ui5-table-row]').should('have.length', 1);
    cy.get('@search').should('have.callCount', 5);

    cy.get('[accessible-name="Group View"]').click();
    cy.get('[ui5-table-row]').should('have.length', 2);
    cy.get('[ui5-table-row]').eq(0).should('have.id', 'nodata-row');

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('{selectall}{backspace}');

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('a');
    cy.get('[ui5-table-row]').should('have.length', 3);
    cy.get('[ui5-table-row]').eq(0).should('have.id', 'nodata-row');

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('A');
    cy.get('[ui5-table-row]').should('have.length', 2);
    cy.get('[ui5-table-row]').eq(0).should('have.id', 'nodata-row');

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('a');
    cy.get('[ui5-table-row]').should('have.length', 1);
    cy.get('[ui5-table-row]').eq(0).should('have.id', 'nodata-row');

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('{selectall}{backspace}');
    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('b');
    cy.get('@search').should('have.callCount', 11);
  });

  it('show no colon for empty label', () => {
    cy.mount(
      <FilterBar>
        <FilterGroupItem filterKey="0">
          <Input />
        </FilterGroupItem>
        <FilterGroupItem label="Input" filterKey="0">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );

    cy.get('[show-colon]').should('have.length', 1);
    cy.get('[text="Filters"]').click({ force: true });
    cy.findByText('Show Values').click();
    cy.get('[show-colon]').should('have.length', 2);
  });

  it('FB search field', () => {
    cy.mount(
      <FilterBar search={<Input data-testid="FilterBarSearch" />}>
        <FilterGroupItem filterKey="0">
          <Input />
        </FilterGroupItem>
        <FilterGroupItem label="Input" filterKey="1">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );
    cy.get('[ui5-input]').each(($el, index) => {
      if (index === 0) {
        cy.wrap($el).should('be.visible').and('have.attr', 'data-testid', 'FilterBarSearch');
      } else {
        cy.wrap($el).should('be.visible').and('not.have.attr', 'data-testid', 'FilterBarSearch');
      }
    });
  });

  it('allow filter with single or empty children', () => {
    cy.mount(
      <FilterBar>
        <FilterGroupItem label="Single Child" filterKey="0">
          <Select>
            <Option>Option 1</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="Empty Children" filterKey="1">
          <MultiComboBox />
        </FilterGroupItem>
      </FilterBar>
    );
    cy.get('[text="Filters"]').click({ force: true });
    cy.findByText('Show Values').click();
    cy.get('[ui5-select]:not([title="Show Filters by Attribute"])').should('have.length', 2);
    cy.get('[ui5-multi-combobox]').should('have.length', 2);
  });

  it('hidden & hiddenInFilterBar', () => {
    cy.mount(
      <FilterBar>
        <FilterGroupItem label="undefined" filterKey="0">
          <StepInput />
        </FilterGroupItem>
        <FilterGroupItem label="false" hidden filterKey="1">
          <StepInput />
        </FilterGroupItem>
        <FilterGroupItem label="true" hidden={false} filterKey="2">
          <StepInput />
        </FilterGroupItem>
        <FilterGroupItem label="undefined undefined" filterKey="3">
          <StepInput />
        </FilterGroupItem>
        <FilterGroupItem label="false false" hidden hiddenInFilterBar filterKey="4">
          <StepInput />
        </FilterGroupItem>
        <FilterGroupItem label="true true" filterKey="4">
          <StepInput />
        </FilterGroupItem>
        <FilterGroupItem label="true false" hiddenInFilterBar filterKey="5">
          <StepInput />
        </FilterGroupItem>
        <FilterGroupItem label="undefined true" hiddenInFilterBar={false} filterKey="6">
          <StepInput />
        </FilterGroupItem>
        <FilterGroupItem label="undefined false" hiddenInFilterBar filterKey="7">
          <StepInput />
        </FilterGroupItem>
      </FilterBar>
    );

    cy.findByText('undefined').should('be.visible');
    cy.findByText('false').should('not.exist');
    cy.findByText('true').should('be.visible');
    cy.findByText('undefined undefined').should('be.visible');
    cy.findByText('false false').should('not.exist');
    cy.findByText('true true').should('be.visible');
    cy.findByText('true false').should('not.exist');
    cy.findByText('undefined true').should('be.visible');
    cy.findByText('undefined false').should('not.exist');

    cy.get('[text="Filters"]').click({ force: true });
    cy.get('[ui5-dialog]').should('be.visible');
    cy.get('[ui5-table-row][data-text="undefined"]');
    cy.get('[ui5-table-row][data-text="undefined"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[ui5-table-row][data-text="false"]').should('not.exist');
    cy.get('[ui5-table-row][data-text="true"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[ui5-table-row][data-text="undefined undefined"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[ui5-table-row][data-text="false false"]').should('not.exist');
    cy.get('[ui5-table-row][data-text="true true"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[ui5-table-row][data-text="true false"]').should('have.attr', 'aria-selected', 'false');
    cy.get('[ui5-table-row][data-text="undefined true"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[ui5-table-row][data-text="undefined false"]').should('have.attr', 'aria-selected');
  });

  mountWithCustomTagName(FilterBar);

  cypressPassThroughTestsFactory(FilterBar);
});

function FilterBarWithReordering(props: Partial<FilterBarPropTypes>) {
  const uniqueId = useId();
  const [orderedFilterKeys, setOrderedFilterKeys] = useState(['0', '1', '2', '3', '4', '5']);

  const handleFiltersDialogSave: FilterBarPropTypes['onFiltersDialogSave'] = (e) => {
    props.onFiltersDialogSave(e);
    setOrderedFilterKeys(e.detail.reorderedFilterKeys);
  };
  return (
    <FilterBar {...props} onFiltersDialogSave={handleFiltersDialogSave} enableReordering showResetButton>
      {orderedFilterKeys.map((filterKey) => {
        switch (filterKey) {
          case '0':
            return (
              <FilterGroupItem filterKey="0" key={`${uniqueId}-0`} label="StepInput" required>
                <StepInput required />
              </FilterGroupItem>
            );
          case '1':
            return (
              <FilterGroupItem filterKey="1" key={`${uniqueId}-1`} label="RatingIndicator">
                <RatingIndicator />
              </FilterGroupItem>
            );
          case '2':
            return (
              <FilterGroupItem filterKey="2" key={`${uniqueId}-2`} label="MultiInput" active>
                <MultiInput
                  tokens={
                    <>
                      <Token text="Argentina" selected />
                      <Token text="Bulgaria" />
                      <Token text="England" />
                      <Token text="Finland" />
                    </>
                  }
                />
              </FilterGroupItem>
            );
          case '3':
            return (
              <FilterGroupItem filterKey="3" key={`${uniqueId}-3`} label="Input">
                <Input placeholder="Placeholder" />
              </FilterGroupItem>
            );
          case '4':
            return (
              <FilterGroupItem filterKey="4" key={`${uniqueId}-4`} label="Switch">
                <Switch />
              </FilterGroupItem>
            );
          case '5':
            return (
              <FilterGroupItem filterKey="5" key={`${uniqueId}-5`} label="SELECT w/ initial selected" hiddenInFilterBar>
                <Select>
                  <Option>Option 1</Option>
                  <Option selected>Option 2</Option>
                  <Option>Option 3</Option>
                  <Option>Option 4</Option>
                </Select>
              </FilterGroupItem>
            );
          default:
            return null;
        }
      })}
    </FilterBar>
  );
}
