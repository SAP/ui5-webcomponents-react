import { Input, Option, Select, Switch } from '../../webComponents';
import { FilterGroupItem } from '../FilterGroupItem';
import { VariantManagement } from '../VariantManagement';
import { VariantItem } from '../VariantManagement/VariantItem';
import { FilterBar } from './index';

const variants = (
  <VariantManagement data-testid="variantManagement">
    <VariantItem>Variant 1</VariantItem>
    <VariantItem selected>Variant 2</VariantItem>
  </VariantManagement>
);

const search = <Input placeholder={'Search'} />;

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
    cy.get('ui5-select').should('be.visible');

    cy.findByText('Hide Filter Bar').click();
    cy.get('@toggleSpy').should('have.been.calledOnce');

    cy.findByText('Classification').should('not.be.visible');
    cy.get('ui5-select').should('not.be.visible');

    cy.findByText('Show Filter Bar').click();
    cy.get('@toggleSpy').should('have.been.calledTwice');

    cy.findByText('Classification').should('be.visible');
    cy.get('ui5-select').should('be.visible');

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

  it('Selection: FilterGroupItems in Dialog', () => {
    const afterOpen = cy.spy().as('afterOpenSpy');
    const open = cy.spy().as('openSpy');
    const select = cy.spy().as('selectSpy');
    cy.mount(
      <FilterBar
        onAfterFiltersDialogOpen={afterOpen}
        onFiltersDialogOpen={open}
        onFiltersDialogSelectionChange={select}
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

    cy.findByText('Filters').click();
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

    const checkboxes = cy.get('ui5-checkbox');
    // hidden select-all checkbox is also counted
    checkboxes.should('have.length', 4);

    checkboxes.each((item, index, arr) => {
      if (index === 0) {
        cy.get(item).should('not.be.visible');
      } else {
        cy.get(item).should('be.visible');
        // todo: simulated clicks don't work with internal "required selection" logic
        if (index !== arr.length - 1) {
          cy.get(item).click();
        }
      }
    });

    cy.get('@selectSpy').should('have.been.calledTwice');

    cy.findAllByText('INPUT').should('have.length', 2);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 2);
    cy.findAllByTestId('INPUT').should('have.length', 2);
    cy.findAllByTestId('SWITCH').should('have.length', 2);
    cy.findAllByTestId('SELECT').should('have.length', 2);

    cy.findByText('OK').click();

    cy.findAllByText('INPUT').should('not.exist');
    cy.findAllByText('SWITCH').should('not.exist');
    cy.findAllByText('SELECT').should('exist');
    cy.findAllByTestId('INPUT').should('not.exist');
    cy.findAllByTestId('SWITCH').should('not.exist');
    cy.findAllByTestId('SELECT').should('exist');
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

    cy.findByPlaceholderText('Search for filters').shadow().find('input').type('S');
    cy.findByPlaceholderText('Search for filters').trigger('input');

    cy.findAllByText('INPUT').should('have.length', 1);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 2);

    cy.findByPlaceholderText('Search for filters').shadow().find('input').type('W', { force: true });
    cy.findByPlaceholderText('Search for filters').trigger('input');

    cy.findAllByText('INPUT').should('have.length', 1);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 1);

    cy.findByPlaceholderText('Search for filters').shadow().find('ui5-icon').click();

    cy.findAllByText('INPUT').should('have.length', 2);
    cy.findAllByText('SWITCH').should('have.length', 2);
    cy.findAllByText('SELECT').should('have.length', 2);
  });

  it('toolbar', () => {
    cy.mount(
      <FilterBar search={search} header={variants} hideToolbar={false} showGoOnFB>
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
    cy.findByPlaceholderText('Search');
    cy.findByTestId('variantManagement');
    cy.findByTestId('SELECT');

    cy.mount(
      <FilterBar search={search} header={variants} hideToolbar={true} showGoOnFB>
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

  it.only('addCustomCSS', () => {
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
        cy.get('.ui5-table-root').should('have.css', 'border-bottom', '0px none rgb(50, 54, 58)');
        // no select-all checkbox (header row is hidden)
        cy.get('thead th.ui5-table-select-all-column').should('not.be.visible');
      });

    cy.get('[data-component-name="FilterBarDialogTable"]')
      .shadow()
      .within(() => {
        cy.get('thead').within(() => {
          // select-all checkbox is not displayed if no rows are defined
          cy.get('[ui5-checkbox]').should('not.exist');
        });
      });

    cy.get('[data-component-name="FilterBarDialogTableRow"]')
      .shadow()
      .within(() => {
        // no navigated cell
        cy.get('.ui5-table-row-navigated').should('not.be.visible');
      });
  });
});
