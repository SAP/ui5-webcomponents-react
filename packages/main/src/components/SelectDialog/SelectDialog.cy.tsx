import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import { useState } from 'react';
import type { ListPropTypes, SelectDialogPropTypes } from '../..';
import { Button, SelectDialog, StandardListItem } from '../..';

const listItems = new Array(5).fill('o_O').map((_, index) => (
  <StandardListItem key={index} data-li={index} description={`description${index}`}>
    {`Product${index}`}
  </StandardListItem>
));

describe('SelectDialog', () => {
  it('Basic', () => {
    cy.mount(<SelectDialog open>{listItems}</SelectDialog>);
    cy.get('[ui5-dialog]').should('be.visible');
    cy.findByPlaceholderText('Search');
    cy.findByText('Cancel').click();
    cy.get('[ui5-dialog]').should('not.be.visible');
  });

  it('with headerText', () => {
    cy.mount(
      <SelectDialog headerText="Select Dialog" open>
        {listItems}
      </SelectDialog>
    );
    cy.findByText('Select Dialog')
      .should('have.css', 'grid-column-start', 'titleStart')
      .should('have.css', 'grid-column-end', 'titleCenter');
    cy.mount(
      <SelectDialog headerText="Select Dialog" headerTextAlignCenter open>
        {listItems}
      </SelectDialog>
    );
    cy.findByText('Select Dialog').should('have.css', 'grid-area', 'titleCenter');
  });

  it('selection', () => {
    const close = cy.spy().as('close');
    const change = cy.spy().as('change');
    const confirm = cy.spy().as('confirm');
    const TestComp = ({
      close,
      change,
      confirm,
      rememberSelections,
      mode
    }: {
      close: SelectDialogPropTypes['onAfterClose'];
      change: ListPropTypes['onSelectionChange'];
      confirm: SelectDialogPropTypes['onConfirm'];
      rememberSelections?: SelectDialogPropTypes['rememberSelections'];
      mode?: SelectDialogPropTypes['selectionMode'];
    }) => {
      const [open, setOpen] = useState(true);
      const [items, setItems] = useState(undefined);
      return (
        <>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Open
          </Button>
          <SelectDialog
            mode={mode}
            rememberSelections={rememberSelections}
            open={open}
            onConfirm={(e) => {
              setItems(e.detail.selectedItems.map((item) => item.textContent));
              confirm(e);
            }}
            onAfterClose={(e) => {
              setOpen(false);
              close(e);
            }}
            listProps={{ onSelectionChange: change }}
          >
            {listItems}
          </SelectDialog>
          Last Selected Item: {items}
        </>
      );
    };
    cy.mount(<TestComp close={close} change={change} confirm={confirm} />);
    cy.get('[ui5-dialog]').should('be.visible');
    cy.clickUi5ListItemByText('Product1');
    cy.get('[ui5-dialog]').should('not.be.visible');
    cy.findByText('Last Selected Item: Product1').should('be.visible');

    cy.findByText('Open').click();
    cy.get('[ui5-li]').each(($li) => {
      cy.wrap($li).should('not.have.attr', 'selected');
    });

    cy.mount(<TestComp close={close} change={change} confirm={confirm} rememberSelections />);
    cy.get('[ui5-dialog]').should('be.visible');
    cy.clickUi5ListItemByText('Product1');
    cy.get('[ui5-dialog]').should('not.be.visible');
    cy.findByText('Last Selected Item: Product1').should('be.visible');
    cy.findByText('Open').click();
    cy.get('[ui5-li]').each(($li) => {
      if ($li.text() === 'Product1') {
        cy.wrap($li).should('have.attr', 'selected');
      } else {
        cy.wrap($li).should('not.have.attr', 'selected');
      }
    });

    cy.get('@close').should('have.callCount', 2);
    cy.get('@confirm').should('have.callCount', 2);
    cy.get('@change').should('have.callCount', 2);

    cy.mount(<TestComp close={close} change={change} confirm={confirm} />);
    cy.findByText('Cancel').click();
    cy.findByText('Open').click();
    cy.closeUi5PopupWithEsc();

    cy.get('@close').should('have.callCount', 4);
    cy.get('@confirm').should('have.callCount', 2);
    cy.get('@change').should('have.callCount', 2);

    cy.mount(<TestComp close={close} change={change} confirm={confirm} mode={ListSelectionMode.Multiple} />);
    cy.clickUi5ListItemByText('Product1');
    cy.clickUi5ListItemByText('Product3');
    cy.get('[ui5-dialog]').should('be.visible');
    cy.findByText('Select').click();
    cy.findByText('Last Selected Item: Product1Product3').should('be.visible');

    cy.findByText('Open').click();
    cy.get('[ui5-li]').each(($li) => {
      cy.wrap($li).should('not.have.attr', 'selected');
    });

    cy.mount(
      <TestComp close={close} change={change} confirm={confirm} mode={ListSelectionMode.Multiple} rememberSelections />
    );
    cy.clickUi5ListItemByText('Product1');
    cy.clickUi5ListItemByText('Product3');
    cy.get('[ui5-dialog]').should('be.visible');
    cy.findByText('Select').click();
    cy.findByText('Last Selected Item: Product1Product3').should('be.visible');
    cy.get('[ui5-li]').each(($li) => {
      if ($li.text() === 'Product1' || $li.text() === 'Product3') {
        cy.wrap($li).should('have.attr', 'selected');
      } else {
        cy.wrap($li).should('not.have.attr', 'selected');
      }
    });

    cy.get('@close').should('have.callCount', 6);
    cy.get('@confirm').should('have.callCount', 4);
    cy.get('@change').should('have.callCount', 6);
  });

  it('Search', () => {
    const search = cy.spy().as('search');
    const input = cy.spy().as('input');
    const reset = cy.spy().as('reset');
    const TestComp = ({
      search,
      input,
      reset
    }: {
      search: SelectDialogPropTypes['onSearch'];
      input: SelectDialogPropTypes['onSearchInput'];
      reset: SelectDialogPropTypes['onSearchReset'];
    }) => {
      const [inputVal, setInputVal] = useState('');
      const [searchVal, setSearchVal] = useState('');
      return (
        <>
          <SelectDialog
            onSearch={(e) => {
              setSearchVal(e.detail.value);
              search(e);
            }}
            onSearchInput={(e) => {
              setInputVal(e.detail.value);
              input(e);
            }}
            onSearchReset={reset}
            open
          >
            {listItems}
          </SelectDialog>
          <br />
          <span data-testid="inputVal">input: {inputVal}</span>
          <br />
          <span data-testid="searchVal">search: {searchVal}</span>
        </>
      );
    };
    cy.mount(<TestComp search={search} input={input} reset={reset} />);
    cy.get('[accessible-name="Reset"][ui5-icon]').should('not.exist');
    cy.get('[ui5-input]').typeIntoUi5Input('Test');
    cy.findByTestId('inputVal').should('have.text', 'input: Test');
    cy.get('@search').should('have.callCount', 0);
    cy.get('@input').should('have.callCount', 4);
    cy.get('@reset').should('have.callCount', 0);
    cy.get('[ui5-input]').typeIntoUi5Input('{enter}');
    cy.findByTestId('searchVal').should('have.text', 'search: Test');
    cy.get('@search').should('have.callCount', 1);
    cy.get('@input').should('have.callCount', 4);
    cy.get('@reset').should('have.callCount', 0);
    cy.get('[accessible-name="Search"][ui5-icon]').click();
    cy.get('@search').should('have.callCount', 2);
    cy.get('@input').should('have.callCount', 4);
    cy.get('@reset').should('have.callCount', 0);
    cy.get('[accessible-name="Reset"][ui5-icon]').click();
    cy.get('@search').should('have.callCount', 2);
    cy.get('@input').should('have.callCount', 4);
    cy.get('@reset').should('have.callCount', 1);
    cy.get('[accessible-name="Reset"][ui5-icon]').should('not.exist');
  });

  it('confirmButtonText', () => {
    const confirm = cy.spy().as('confirm');
    cy.mount(
      <SelectDialog mode={ListSelectionMode.Multiple} confirmButtonText="Exterminate" onConfirm={confirm} open />
    );
    cy.get('[ui5-dialog]').should('be.visible');
    cy.findByText('Exterminate').click();
    cy.get('@confirm').should('have.been.calledOnce');
    cy.get('[ui5-dialog]').should('not.be.visible');
  });

  it('numberOfSelectedItems', () => {
    cy.mount(<SelectDialog mode={ListSelectionMode.Multiple} numberOfSelectedItems={1337} open />);
    cy.findByText('Selected: 1337').should('be.visible');
  });

  it('onCancel', () => {
    const cancel = cy.spy().as('cancel');
    const TestComp = ({
      cancel,
      mode
    }: {
      cancel: SelectDialogPropTypes['onCancel'];
      mode: SelectDialogPropTypes['selectionMode'];
    }) => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            Open
          </Button>
          <SelectDialog
            open={open}
            onCancel={cancel}
            onAfterClose={() => {
              setOpen(false);
            }}
            mode={mode}
          >
            {listItems}
          </SelectDialog>
        </>
      );
    };
    let callCount = 1;
    [ListSelectionMode.Single, ListSelectionMode.Multiple].forEach((mode) => {
      cy.mount(<TestComp cancel={cancel} mode={mode} />);
      cy.findByText('Open').click();
      cy.findByText('Cancel').click();
      cy.get('@cancel').should('have.callCount', callCount);
      callCount++;

      cy.findByText('Open').click();
      cy.realPress('Escape');
      cy.get('@cancel').should('have.callCount', callCount);
      callCount++;
    });
  });

  it('confirmButtonProps', () => {
    cy.mount(
      <SelectDialog
        //@ts-expect-error: design is not a valid prop - only added for testing purpose
        confirmButtonProps={{ disabled: true, design: ButtonDesign.Negative, 'data-testid': 'confirmBtn' }}
        open
        mode={ListSelectionMode.Multiple}
      />
    );
    cy.findByTestId('confirmBtn').should('be.visible').and('have.attr', 'disabled');
    cy.findByTestId('confirmBtn').should('have.attr', 'design', 'Emphasized');
  });
});
