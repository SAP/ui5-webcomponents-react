import { fireEvent, render, renderWithDefine, waitFor } from '@shared/tests';
import { SelectDialog } from '@ui5/webcomponents-react/dist/SelectDialog';
import { DialogDomRef } from '@ui5/webcomponents-react/dist/Dialog';
import { StandardListItem } from '@ui5/webcomponents-react/dist/StandardListItem';
import { ListMode } from '@ui5/webcomponents-react/dist/ListMode';
import React from 'react';

const listItems = new Array(5).fill('o_O').map((_, index) => (
  <StandardListItem key={index} data-li={index} description={`description${index}`}>
    {`Product${index}`}
  </StandardListItem>
));

// test `rememberSelection` and clear behavior somehow
describe('SelectDialog', () => {
  test('Basic', () => {
    const { asFragment, getByPlaceholderText, getByText } = render(<SelectDialog />);
    getByPlaceholderText('Search');
    getByText('Cancel');
    expect(asFragment()).toMatchSnapshot();
  });
  test('with children', () => {
    const { asFragment, getByText } = render(<SelectDialog>{listItems}</SelectDialog>);
    const li1 = getByText('Product0');
    expect(li1).toHaveAttribute('description', 'description0');
    const li2 = getByText('Product4');
    expect(li2).toHaveAttribute('description', 'description4');
    expect(asFragment()).toMatchSnapshot();
  });
  test('with headerText', () => {
    const { asFragment, getByText, rerender } = render(
      <SelectDialog headerText="Select Dialog">{listItems}</SelectDialog>
    );
    expect(getByText('Select Dialog')).toHaveAttribute('slot', 'startContent');
    expect(asFragment()).toMatchSnapshot();
    rerender(
      <SelectDialog headerText="Select Dialog" headerTextAlignCenter>
        {listItems}
      </SelectDialog>
    );
    expect(getByText('Select Dialog')).not.toHaveAttribute('slot', 'startContent');
  });
  test('SingleSelect', async () => {
    const confirm = jest.fn();
    const afterClose = jest.fn();
    const selectionChange = jest.fn();
    const { getByText } = await renderWithDefine(
      <SelectDialog onConfirm={confirm} onAfterClose={afterClose} listProps={{ onSelectionChange: selectionChange }}>
        {listItems}
      </SelectDialog>,
      ['ui5-li']
    );
    const dialog = document.querySelector('ui5-dialog') as DialogDomRef;
    dialog.show();
    const li = getByText('Product1');
    await waitFor(() => li.shadowRoot.querySelector('li'));
    const wcListItem = li.shadowRoot.querySelector('li');
    expect(li).not.toHaveAttribute('selected');
    fireEvent.click(wcListItem);
    expect(li).toHaveAttribute('selected');
    expect(confirm).toHaveBeenCalledTimes(1);
    expect(afterClose).toHaveBeenCalledTimes(1);
    expect(selectionChange).toHaveBeenCalledTimes(1);
    expect(dialog.isOpen()).toBeFalsy();
  });

  test('MultiSelect', async () => {
    const confirm = jest.fn();
    const afterClose = jest.fn();
    const selectionChange = jest.fn();
    const clear = jest.fn();
    const { asFragment, getByText } = await renderWithDefine(
      <SelectDialog
        showClearButton
        mode={ListMode.MultiSelect}
        onConfirm={confirm}
        onAfterClose={afterClose}
        onClear={clear}
        listProps={{ onSelectionChange: selectionChange }}
      >
        {listItems}
      </SelectDialog>,
      ['ui5-li']
    );
    const dialog = document.querySelector('ui5-dialog') as DialogDomRef;
    dialog.show();

    const li = getByText('Product1');
    await waitFor(() => li.shadowRoot.querySelector('li'));
    const wcListItem = li.shadowRoot.querySelector('li');
    const li2 = getByText('Product2');
    await waitFor(() => li2.shadowRoot.querySelector('li'));
    const wcListItem2 = li2.shadowRoot.querySelector('li');

    expect(li).not.toHaveAttribute('selected');
    fireEvent.click(wcListItem);
    expect(li).toHaveAttribute('selected');
    getByText('Selected: 1');

    expect(li2).not.toHaveAttribute('selected');
    fireEvent.click(wcListItem2);
    expect(li2).toHaveAttribute('selected');
    getByText('Selected: 2');

    expect(confirm).not.toHaveBeenCalled();
    expect(afterClose).not.toHaveBeenCalled();
    expect(selectionChange).toHaveBeenCalledTimes(2);
    expect(dialog.isOpen()).toBeTruthy();

    fireEvent.click(getByText('Select'));

    expect(confirm).toHaveBeenCalledTimes(1);
    expect(afterClose).toHaveBeenCalledTimes(1);
    expect(selectionChange).toHaveBeenCalledTimes(2);
    expect(dialog.isOpen()).toBeFalsy();

    dialog.show();

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Clear'));
    expect(clear).toHaveBeenCalledTimes(1);
  });

  test('Search', () => {
    const search = jest.fn();
    const input = jest.fn();
    const reset = jest.fn();
    const { getByPlaceholderText, getByTitle } = render(
      <SelectDialog onSearch={search} onSearchInput={input} onSearchReset={reset}>
        {listItems}
      </SelectDialog>
    );
    const searchField = getByPlaceholderText('Search');
    fireEvent.input(searchField, { target: { value: 'Test' } });
    expect(input).toHaveBeenCalledTimes(1);
    expect(search).not.toHaveBeenCalled();
    // fireEvent.keyUp(searchField, { key: 'Enter', code: 'Enter' });
    // expect(search).toHaveBeenCalledTimes(1);
    // fireEvent.click(getByTitle('Search'));
    // expect(search).toHaveBeenCalledTimes(2);
  });

  test('confirmButtonText', () => {
    const { getByText, asFragment } = render(
      <SelectDialog mode={ListMode.MultiSelect} confirmButtonText="Exterminate" />
    );
    getByText('Exterminate');
    expect(asFragment()).toMatchSnapshot();
  });
});
