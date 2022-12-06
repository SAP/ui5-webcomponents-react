import { screen, fireEvent, render, renderWithDefine, waitFor } from '@shared/tests';
import React from 'react';
import { ListMode } from '../../enums/ListMode';
import { StandardListItem } from '../../webComponents/StandardListItem';
import { SelectDialog } from './index';

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
    expect(getByText('Select Dialog')).toHaveStyle({
      gridColumnStart: 'titleStart',
      gridColumnEnd: 'titleCenter'
    });
    expect(asFragment()).toMatchSnapshot();
    rerender(
      <SelectDialog headerText="Select Dialog" headerTextAlignCenter>
        {listItems}
      </SelectDialog>
    );
    expect(getByText('Select Dialog')).toHaveStyle({
      gridArea: 'titleCenter'
    });
  });
  test('SingleSelect', async () => {
    const confirm = jest.fn();
    const afterClose = jest.fn();
    const selectionChange = jest.fn();
    const { getByText } = await renderWithDefine(
      <SelectDialog
        onConfirm={confirm}
        rememberSelections
        onAfterClose={afterClose}
        listProps={{ onSelectionChange: selectionChange }}
      >
        {listItems}
      </SelectDialog>,
      ['ui5-list', 'ui5-li']
    );
    const dialog = document.querySelector('ui5-dialog');
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
    const { getByText } = await renderWithDefine(
      <SelectDialog
        rememberSelections
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
    const dialog = document.querySelector('ui5-dialog');
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
    expect(getByText('Selected: 1')).toBeVisible();

    expect(li2).not.toHaveAttribute('selected');
    fireEvent.click(wcListItem2);
    expect(li2).toHaveAttribute('selected');
    expect(getByText('Selected: 2')).toBeVisible();

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

    expect(screen.getByText('Selected: 2')).toBeVisible();

    fireEvent.click(getByText('Clear'));
    expect(clear).toHaveBeenCalledTimes(1);
    expect(screen.queryByText('Selected: 2')).not.toBeInTheDocument();
  });

  test('Search', () => {
    const search = jest.fn();
    const input = jest.fn();
    const reset = jest.fn();
    const { getByPlaceholderText } = render(
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

  test('numberOfSelectedItems', () => {
    const { getByText } = render(<SelectDialog mode={ListMode.MultiSelect} numberOfSelectedItems={1337} />);
    expect(getByText('Selected: 1337')).toBeInTheDocument();
  });
});
