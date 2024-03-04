import React from 'react';
import { Input, MultiComboBox, Option, Select, Switch } from '../../webComponents/index.js';
import { FilterGroupItem } from '../FilterGroupItem';
import { VariantManagement } from '../VariantManagement';
import { VariantItem } from '../VariantManagement/VariantItem';
import { FilterBar } from './index.js';
import { cypressPassThroughTestsFactory, mountWithCustomTagName } from '@/cypress/support/utils';

const variants = (
  <VariantManagement data-testid="variantManagement">
    <VariantItem>Variant 1</VariantItem>
    <VariantItem selected>Variant 2</VariantItem>
  </VariantManagement>
);

describe('FilterBar.cy.tsx', () => {
  it('Toggle FilterBar filters', () => {
    const toggle = cy.spy().as('toggleSpy');
    cy.mount(
      <FilterBar onToggleFilters={toggle}>
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

    cy.findByText('Classification').should('be.visible');
    cy.get('[ui5-select]').should('be.visible');

    cy.findByText('Hide Filter Bar').click();
    cy.get('@toggleSpy').should('have.been.calledOnce');

    cy.findByText('Classification').should('not.be.visible');
    cy.get('[ui5-select]').should('not.be.visible');

    cy.findByText('Show Filter Bar').click();
    cy.get('@toggleSpy').should('have.been.calledTwice');

    cy.findByText('Classification').should('be.visible');
    cy.get('[ui5-select]').should('be.visible');

    cy.mount(
      <FilterBar onToggleFilters={toggle} hideToggleFiltersButton>
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

    cy.findByText('Hide Filter Bar').should('not.exist');
    cy.findByText('Show Filter Bar').should('not.exist');
  });

  it('Selection: FilterGroupItems in Dialog + events', () => {
    const afterOpen = cy.spy().as('afterOpenSpy');
    const open = cy.spy().as('openSpy');
    const close = cy.spy().as('closeSpy');
    const select = cy.spy().as('selectSpy');
    const cancel = cy.spy().as('cancelSpy');
    const save = cy.spy().as('saveSpy');
    const restore = cy.spy().as('restoreSpy');
    cy.mount(
      <FilterBar
        activeFiltersCount={42}
        showResetButton
        onAfterFiltersDialogOpen={afterOpen}
        onFiltersDialogOpen={open}
        onFiltersDialogSelectionChange={select}
        onFiltersDialogClose={close}
        onFiltersDialogCancel={cancel}
        onFiltersDialogSave={save}
        onRestore={restore}
      >
        <FilterGroupItem label="INPUT">
          <Input placeholder="Placeholder" value="123123" data-testid="INPUT" />
        </FilterGroupItem>
        <FilterGroupItem label="SWITCH">
          <Switch checked={true} data-testid="SWITCH" />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT" required>
          <Select data-testid="SELECT">
            <Option selected={true}>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    cy.findAllByText('INPUT').should('have.length', 1);
    cy.findAllByText('SWITCH').should('have.length', 1);
    cy.findAllByText('SELECT').should('have.length', 1);
    cy.findAllByTestId('INPUT').should('have.length', 1);
    cy.findAllByTestId('SWITCH').should('have.length', 1);
    cy.findAllByTestId('SELECT').should('have.length', 1);

    cy.findByText('Filters (42)').click();
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
      if (index !== 0) {
        cy.findByText('Filters (42)').click();
        cy.findByText('Show Values').click();
      }

      const checkboxes = cy.get('[ui5-checkbox]');
      // hidden select-all checkbox is also counted
      checkboxes.should('have.length', 4);

      checkboxes.each((item, index, arr) => {
        const wrappedItem = cy.wrap(item);
        if (index === 0) {
          wrappedItem.should('have.css', 'visibility', 'hidden');
          wrappedItem.should('not.be.visible');
        } else {
          wrappedItem.should('be.visible');
          // todo: simulated clicks don't work with internal "required selection" logic
          if (index !== arr.length - 1) {
            wrappedItem.click();
          }
        }
      });

      cy.get('@selectSpy').should('have.callCount', 2 * (index + 1));

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
        cy.findAllByText('INPUT').should('not.exist');
        cy.findAllByText('SWITCH').should('not.exist');
        cy.findAllByText('SELECT').should('exist');
        cy.findAllByTestId('INPUT').should('not.exist');
        cy.findAllByTestId('SWITCH').should('not.exist');
        cy.findAllByTestId('SELECT').should('exist');
      } else {
        if (action === 'Reset') {
          cy.get('[data-component-name="FilterBarDialogResetMessageBox"]').contains('Cancel').click();
          cy.get('@restoreSpy').should('have.callCount', 0);
          cy.findByText(action).click();
          cy.closeUi5PopupWithEsc();
          cy.get('@restoreSpy').should('have.callCount', 0);
          cy.findByText(action).click();
          cy.get('[data-component-name="FilterBarDialogResetMessageBox"]').contains('OK').click();
          cy.findByText('OK').click();
          cy.get('@saveSpy').should('have.callCount', saveCallCount);
          saveCallCount++;
        } else {
          cy.get('@cancelSpy').should('have.callCount', cancelCallCount);
          cancelCallCount++;
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
        <FilterGroupItem label="INPUT">
          <Input placeholder="Placeholder" value="123123" data-testid="INPUT" />
        </FilterGroupItem>
        <FilterGroupItem label="SWITCH">
          <Switch checked={true} data-testid="SWITCH" />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT" required>
          <Select data-testid="SELECT">
            <Option selected={true}>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    cy.findByText('Filters').click();

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
        <FilterGroupItem label="Classification" key="classification" data-testid="SELECT">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    cy.findByText('Go');
    cy.findByText('Filters');
    cy.findByText('Adapt Filters').should('not.exist');
    cy.findByText('Hide Filter Bar');
    cy.findByTestId('variantManagement');
    cy.findByTestId('SELECT');

    cy.mount(
      <FilterBar header={variants} hideToolbar={true} showGoOnFB>
        <FilterGroupItem label="Classification" key="classification" data-testid="SELECT">
          <Select>
            <Option>Option 1</Option>
            <Option selected>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );

    cy.findByText('Go');
    cy.findByText('Filters').should('not.exist');
    cy.findByText('Adapt Filters');
    cy.findByText('Hide Filter Bar').should('not.exist');
    cy.findByPlaceholderText('Search').should('not.exist');
    cy.findByTestId('variantManagement').should('not.exist');
    cy.findByTestId('SELECT');
  });

  it('addCustomCSS', () => {
    cy.mount(
      <FilterBar>
        <FilterGroupItem label="INPUT">
          <Input placeholder="Placeholder" value="123123" data-testid="INPUT" />
        </FilterGroupItem>
        <FilterGroupItem label="SWITCH" active>
          <Switch checked={true} data-testid="SWITCH" />
        </FilterGroupItem>
        <FilterGroupItem label="SELECT" required>
          <Select data-testid="SELECT">
            <Option selected={true}>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
          </Select>
        </FilterGroupItem>
      </FilterBar>
    );
    cy.findByText('Filters').click();
    cy.get('[accessible-name="Group View"]').click();

    cy.get('[data-component-name="FilterBarDialogPanelTable"]')
      .shadow()
      .within(() => {
        // no header for tables within panel
        cy.get('thead').should('have.css', 'visibility', 'collapse');
        cy.get('thead').should('not.be.visible');
        // no border for table rows within panel - `getComputedStyle` returns the default value (`separate`) for `unset`
        cy.get('table').should('have.css', 'border-collapse', 'separate');
        // no bottom border for table within panel - `getComputedStyle` sets the border-width to 0 for `none`
        cy.get('.ui5-table-root').should('have.css', 'border-bottom', '0px none rgb(29, 45, 62)');
        // no select-all checkbox (header row is hidden)
        cy.get('thead th.ui5-table-select-all-column').should('not.be.visible');
      });

    cy.get('[data-component-name="FilterBarDialogTable"]')
      .shadow()
      .within(() => {
        cy.get('thead')
          .first()
          .within(() => {
            // select-all checkbox is not displayed if no rows are defined
            cy.get('[ui5-checkbox]').should('not.exist');
          });
      });

    cy.get('[data-component-name="FilterBarDialogTableRow"]').each((item) => {
      cy.wrap(item)
        .shadow()
        .within(() => {
          // no navigated cell
          cy.get('.ui5-table-row-navigated').should('not.be.visible');
        });
    });
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
        <FilterGroupItem label="Filter1" groupName="Group1">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );
    cy.findByText('Go').click();
    cy.get('@go').should('have.been.calledOnce');

    cy.findByText('Clear').click();
    cy.get('@clear').should('have.been.calledOnce');

    cy.findByText('Restore').click();
    cy.get('@restore').should('have.been.calledOnce');
  });

  it('Dialog: search', () => {
    const onSearch = cy.spy().as('search');
    cy.mount(
      <FilterBar onFiltersDialogSearch={onSearch} activeFiltersCount={42}>
        <FilterGroupItem label="A" groupName="Group1" data-testid="a">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="AA" groupName="Group2" data-testid="aa">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
        <FilterGroupItem label="B" data-testid="b">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );

    cy.findByText('Filters (42)').click();
    cy.focused().should('have.attr', 'data-component-name', 'FilterBarDialogSearchInput');

    cy.get('[ui5-table-row]').should('have.length', 3);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('a');
    cy.get('[ui5-table-row]').should('have.length', 2);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('A');
    cy.get('[ui5-table-row]').should('have.length', 1);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('a');
    cy.get('[ui5-table-row]').should('have.length', 0);
    cy.get('@search').should('have.callCount', 3);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('{selectall}{backspace}');
    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('b');
    cy.get('[ui5-table-row]').should('have.length', 1);
    cy.get('@search').should('have.callCount', 5);

    cy.get('[accessible-name="Group View"]').click();
    cy.get('[ui5-table-row]').should('have.length', 1);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('{selectall}{backspace}');

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('a');
    cy.get('[ui5-table-row]').should('have.length', 2);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('A');
    cy.get('[ui5-table-row]').should('have.length', 1);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('a');
    cy.get('[ui5-table-row]').should('have.length', 0);

    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('{selectall}{backspace}');
    cy.get('[data-component-name="FilterBarDialogSearchInput"]').typeIntoUi5Input('b');
    cy.get('@search').should('have.callCount', 11);
  });

  it('show no colon for empty label', () => {
    cy.mount(
      <FilterBar>
        <FilterGroupItem>
          <Input />
        </FilterGroupItem>
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );

    cy.get('[show-colon="true"]').should('have.length', 1);
    cy.findByText('Filters').click();
    cy.findByText('Show Values').click();
    cy.get('[show-colon="true"]').should('have.length', 2);
  });

  it('FB search field', () => {
    cy.mount(
      <FilterBar search={<Input />}>
        <FilterGroupItem>
          <Input />
        </FilterGroupItem>
        <FilterGroupItem label="Input">
          <Input placeholder="Placeholder" />
        </FilterGroupItem>
      </FilterBar>
    );
    cy.get('[ui5-input]').each(($el, index) => {
      if (index === 0) {
        cy.wrap($el).should('be.visible').and('have.attr', 'data-component-name', 'FilterBarSearch');
      } else {
        cy.wrap($el).should('be.visible').and('not.have.attr', 'data-component-name', 'FilterBarSearch');
      }
    });
  });

  it('allow filter with single or empty children', () => {
    cy.mount(
      <FilterBar>
        <FilterGroupItem label="Single Child">
          <Select>
            <Option>Option 1</Option>
          </Select>
        </FilterGroupItem>
        <FilterGroupItem label="Empty Children">
          <MultiComboBox />
        </FilterGroupItem>
      </FilterBar>
    );
    cy.findByText('Filters').click();
    cy.findByText('Show Values').click();
    cy.get('[ui5-select]:not([title="Show Fields by Attribute"])').should('have.length', 2);
    cy.get('[ui5-multi-combobox]').should('have.length', 2);
  });

  mountWithCustomTagName(FilterBar);

  cypressPassThroughTestsFactory(FilterBar);
});
