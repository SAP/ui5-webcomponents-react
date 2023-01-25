import { fireEvent, render, renderWithDefine, screen, waitFor, within } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import { DialogDomRef } from '../../webComponents/Dialog';
import { PopoverDomRef } from '../../webComponents/Popover';
import { VariantItem } from './VariantItem';
import { VariantManagement } from './index';

const TwoVariantItems = [
  <VariantItem key="0">VariantItem 1</VariantItem>,
  <VariantItem selected key="1">
    VariantItem 2
  </VariantItem>
];

describe('VariantManagement', () => {
  test('Selection', async () => {
    const cb = jest.fn((e) => e.detail);
    const { getAllByText, container } = await renderWithDefine(
      <VariantManagement onSelect={cb}>{TwoVariantItems}</VariantManagement>,
      ['ui5-li']
    );
    const wcListItem = screen.getByText('VariantItem 1');
    await waitFor(() => wcListItem.shadowRoot.querySelector('li'));
    const li = wcListItem.shadowRoot.querySelector('li');

    const popover: PopoverDomRef = document.querySelector('ui5-responsive-popover');
    const btn = container.querySelector('.ui5-content-density-compact');
    const heading = getAllByText('VariantItem 2')[0];

    // initial selected Item
    expect(heading).toHaveTextContent('VariantItem 2');
    // open popover
    expect(popover.isOpen()).toBeFalsy();
    fireEvent.click(btn);
    expect(popover.isOpen()).toBeTruthy();
    // select list-item
    fireEvent.click(li);
    expect(cb).toHaveBeenCalledTimes(1);
    expect(getAllByText('VariantItem 1')).toHaveLength(2);
    expect(getAllByText('VariantItem 2')).toHaveLength(1);

    expect(cb.mock.results[0].value.selectedVariant.children).toBe('VariantItem 1');
    expect(cb.mock.results[0].value.selectedVariant.variantItem).toBeInTheDocument();

    popover.close();
    // open by clicking on heading
    fireEvent.click(getAllByText('VariantItem 1')[0]);
    expect(popover.isOpen()).toBeTruthy();
  });

  test('Disabled', () => {
    const { container } = render(<VariantManagement disabled>{TwoVariantItems}</VariantManagement>);

    const btn = container.querySelector('.ui5-content-density-compact');
    const headingContainer = container.children[0];

    expect(headingContainer).toHaveClass('VariantManagement-disabled');
    expect(btn).toHaveAttribute('disabled', 'true');
  });

  test('Close on item selection', async () => {
    const { rerender, container } = await renderWithDefine(
      <VariantManagement closeOnItemSelect>{TwoVariantItems}</VariantManagement>,
      ['ui5-li']
    );
    const wcListItem = screen.getByText('VariantItem 1');
    await waitFor(() => wcListItem.shadowRoot.querySelector('li'));
    const li = wcListItem.shadowRoot.querySelector('li');

    const popover: PopoverDomRef = document.querySelector('ui5-responsive-popover');
    const btn = container.querySelector('.ui5-content-density-compact');
    fireEvent.click(btn);
    expect(popover.isOpen()).toBeTruthy();
    fireEvent.click(li);
    expect(popover.isOpen()).toBeFalsy();

    rerender(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    fireEvent.click(btn);
    expect(popover.isOpen()).toBeTruthy();
    fireEvent.click(li);
    expect(popover.isOpen()).toBeTruthy();
  });

  test('Dirty state', async () => {
    const variantItems = [
      ...TwoVariantItems,
      <VariantItem key="2" readOnly>
        VariantItem 3
      </VariantItem>
    ];
    const cb = jest.fn((e) => e.detail);
    const { container, rerender, getByText, queryByText } = await renderWithDefine(
      <VariantManagement dirtyState onSave={cb}>
        {variantItems}
      </VariantManagement>,
      ['ui5-li']
    );
    const wcListItem = screen.getByText('VariantItem 3');
    await waitFor(() => wcListItem.shadowRoot.querySelector('li'));
    const li = wcListItem.shadowRoot.querySelector('li');

    getByText('*');
    const saveBtn = getByText('Save');
    fireEvent.click(saveBtn);
    expect(cb).toHaveBeenCalledTimes(1);
    expect(cb.mock.results[0].value.children).toBe('VariantItem 2');
    expect(cb.mock.results[0].value.variantItem).toBeInTheDocument();

    const popover: PopoverDomRef = document.querySelector('ui5-responsive-popover');
    const btn = container.querySelector('.ui5-content-density-compact');
    fireEvent.click(btn);
    expect(popover.isOpen()).toBeTruthy();
    fireEvent.click(li);
    expect(queryByText('Save')).toBeNull();

    rerender(
      <VariantManagement dirtyState dirtyStateText="Dirty state">
        {variantItems}
      </VariantManagement>
    );

    getByText('Dirty state');
    rerender(<VariantManagement>{variantItems}</VariantManagement>);
    expect(queryByText('*')).toBeNull();
    expect(queryByText('Dirty state')).toBeNull();
  });

  test('Show/Hide buttons', () => {
    const { getByText, queryByText, rerender } = render(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    getByText('Save As');
    getByText('Manage');

    rerender(<VariantManagement hideSaveAs>{TwoVariantItems}</VariantManagement>);
    getByText('Manage');
    expect(queryByText('Save As')).toBeNull();
    rerender(<VariantManagement hideManageVariants>{TwoVariantItems}</VariantManagement>);
    getByText('Save As');
    expect(queryByText('Manage')).toBeNull();
  });

  test('In error state', () => {
    render(<VariantManagement inErrorState>{TwoVariantItems}</VariantManagement>);
    expect(document.querySelector('ui5-illustrated-message')).toBeInTheDocument();
  });

  test('Show search input', () => {
    const variantItems = [
      ...TwoVariantItems,
      ...new Array(8)
        .fill(':)')
        .map((_, index) => <VariantItem key={index + 3}>{`VariantItem ${index + 3}`}</VariantItem>)
    ];
    const { rerender, getByPlaceholderText, queryByPlaceholderText } = render(
      <VariantManagement>{variantItems}</VariantManagement>
    );
    const input = getByPlaceholderText('Search');
    fireEvent.input(input, { target: { value: 'VariantItem 10' } });
    expect(document.querySelectorAll('ui5-li')).toHaveLength(1);

    const [_a, ...rest] = variantItems;
    rerender(<VariantManagement>{rest}</VariantManagement>);
    expect(queryByPlaceholderText('Search')).toBeNull();
  });

  test('Show only favorite', () => {
    const variantItems = [
      <VariantItem key="0">VariantItem 1</VariantItem>,
      <VariantItem key="1">VariantItem 2</VariantItem>,
      <VariantItem favorite selected key="2">
        Favorite VariantItem
      </VariantItem>,
      <VariantItem isDefault key="3">
        Default VariantItem
      </VariantItem>
    ];
    const { rerender, queryByText, getAllByText, getByText } = render(
      <VariantManagement showOnlyFavorites>{variantItems}</VariantManagement>
    );
    expect(queryByText('VariantItem 1')).toBeNull();
    expect(queryByText('VariantItem 2')).toBeNull();
    expect(getAllByText('Favorite VariantItem')).toHaveLength(2);
    getByText('Default VariantItem');

    rerender(<VariantManagement>{variantItems}</VariantManagement>);
    getByText('VariantItem 1');
    getByText('VariantItem 2');
    expect(getAllByText('Favorite VariantItem')).toHaveLength(2);
    getByText('Default VariantItem');
  });

  test('Hide variant props', () => {
    const { getByText } = render(
      <VariantManagement hideApplyAutomatically hideSetAsDefault hideShare hideCreatedBy>
        {TwoVariantItems}
      </VariantManagement>
    );
    const saveAsBtn = getByText('Save As');
    fireEvent.click(saveAsBtn);
    expect(document.querySelectorAll('ui5-checkbox')).toHaveLength(0);

    const cancelBtn = getByText('Cancel');
    expect(document.querySelector('ui5-dialog')).toBeInTheDocument();
    fireEvent.click(cancelBtn);

    const manageBtn = getByText('Manage');
    fireEvent.click(manageBtn);
    const table = screen.getByRole('table');
    expect(within(table).queryByText('Sharing')).toBeNull();
    expect(within(table).queryByText('Default')).toBeNull();
    expect(within(table).queryByText('ApplyAutomatically')).toBeNull();
    expect(within(table).queryByText('Created By')).toBeNull();
  });

  test('Save As', () => {
    const cb = jest.fn((e) => e.detail);
    const { getByText, queryByText } = render(<VariantManagement onSaveAs={cb}>{TwoVariantItems}</VariantManagement>);
    const saveAsBtn = getByText('Save As');

    fireEvent.click(saveAsBtn);
    const dialog: DialogDomRef = document.querySelector('ui5-dialog');
    expect(dialog).toHaveAttribute('header-text', 'Save View');
    expect(dialog.isOpen()).toBeTruthy();

    const inputField = document.querySelector('ui5-input');
    const checkboxes = document.querySelectorAll('ui5-checkbox');
    const saveBtn = getByText('Save');
    expect(inputField).toHaveValue('VariantItem 2');
    checkboxes.forEach((item: HTMLInputElement) => {
      expect(item.checked).toBeFalsy();
      fireEvent.change(item, { target: { checked: true } });
    });

    // invalid entries
    fireEvent.input(inputField, { target: { value: '' } });
    fireEvent.click(saveBtn);
    expect(dialog).toBeInTheDocument();
    expect(inputField).toHaveAttribute('value-state', 'Error');
    getByText('Please specify a view name');

    fireEvent.input(inputField, { target: { value: 'VariantItem 1' } });
    fireEvent.click(saveBtn);
    expect(dialog).toBeInTheDocument();
    expect(inputField).toHaveAttribute('value-state', 'Error');
    getByText('A file with this name already exists');

    // valid entry & save
    fireEvent.input(inputField, { target: { value: 'Updated!' } });
    expect(inputField).toHaveValue('Updated!');
    checkboxes.forEach((item: HTMLInputElement) => {
      expect(item.checked).toBeTruthy();
    });

    fireEvent.click(saveBtn);
    expect(queryByText('Please specify a view name.')).toBeNull();
    expect(queryByText('A file with this name already exists.')).toBeNull();
    expect(cb).toHaveBeenCalledTimes(1);
    expect(dialog).not.toBeInTheDocument();
    expect(cb.mock.results[0].value.children).toBe('Updated!');
    expect(cb.mock.results[0].value.isDefault).toBeTruthy();
    expect(cb.mock.results[0].value.global).toBeTruthy();
    expect(cb.mock.results[0].value.applyAutomatically).toBeTruthy();
    expect(cb.mock.results[0].value.variantItem).toBeInTheDocument();

    // cancel click
    fireEvent.click(saveAsBtn);
    const cancelBtn = getByText('Cancel');
    expect(document.querySelector('ui5-dialog')).toBeInTheDocument();
    fireEvent.click(cancelBtn);
    expect(document.querySelector('ui5-dialog')).not.toBeInTheDocument();
  });

  test('Manage Views - render variants', () => {
    const variantItems = [
      { rowId: 'Default VariantItem', props: {} },
      { rowId: 'LabelReadOnly', props: { labelReadOnly: true } },
      { rowId: 'Favorite', props: { favorite: true } },
      { rowId: 'Favorite & isDefault', props: { favorite: true, isDefault: true } },
      { rowId: 'IsDefault', props: { isDefault: true } },
      { rowId: 'HideDelete', props: { hideDelete: true } },
      { rowId: 'HideDelete - false & global - true', props: { hideDelete: false, global: true } },
      { rowId: 'Global', props: { global: true } },
      { rowId: 'Apply Automatically (List item)', props: { applyAutomatically: true } },
      { rowId: 'Author', props: { author: 'author' } },
      {
        rowId: 'All props',
        props: {
          labelReadOnly: true,
          favorite: true,
          isDefault: true,
          hideDelete: true,
          global: true,
          applyAutomatically: true,
          author: 'bla'
        }
      }
    ];
    const { getByText, rerender } = render(
      <VariantManagement>
        {variantItems.map((item, index) => (
          <VariantItem key={index} {...item.props}>
            {item.rowId}
          </VariantItem>
        ))}
      </VariantManagement>
    );
    const manageBtn = getByText('Manage');
    fireEvent.click(manageBtn);
    const dialog: DialogDomRef = document.querySelector('ui5-dialog');
    const table = screen.getByRole('table');
    expect(dialog).toHaveAttribute('header-text', 'Manage Views');
    expect(dialog.isOpen()).toBeTruthy();

    const manageViewsRowTest = (variantItems, showOnlyFavorites) => {
      variantItems.forEach((item) => {
        const { rowId, props } = item;
        const { favorite, labelReadOnly, isDefault, hideDelete, global, applyAutomatically, author } = props;
        const row = table.querySelector(`ui5-table-row[data-id="${rowId}"]`);
        if (showOnlyFavorites) {
          if (labelReadOnly) {
            if (favorite || isDefault) {
              expect(screen.getAllByText(rowId)).toHaveLength(2);
            } else {
              expect(screen.getAllByText(rowId)).toHaveLength(1);
            }
          } else {
            if (favorite || isDefault) {
              expect(screen.getAllByText(rowId)).toHaveLength(1);
              expect(row.querySelector('ui5-input')).toHaveValue(rowId);
            } else {
              expect(screen.queryByText(rowId)).toBeNull();
              expect(row.querySelector('ui5-input')).toHaveValue(rowId);
            }
          }
        } else {
          if (labelReadOnly) {
            expect(screen.getAllByText(rowId)).toHaveLength(2);
          } else {
            expect(screen.getAllByText(rowId)).toHaveLength(1);
            expect(row.querySelector('ui5-input')).toHaveValue(rowId);
          }
        }

        if (showOnlyFavorites) {
          if (isDefault) {
            expect(row.querySelector(`ui5-icon[name="favorite"]`)).not.toHaveAttribute('title', 'Selected as Favorite');
            expect(row.querySelector(`ui5-icon[name="favorite"]`)).not.toHaveAttribute(
              'title',
              'Unselected as Favorite'
            );
          } else {
            if (favorite) {
              expect(row.querySelector(`ui5-icon[name="favorite"]`)).toHaveAttribute('title', 'Selected as Favorite');
            } else {
              expect(row.querySelector(`ui5-icon[name="unfavorite"]`)).toHaveAttribute(
                'title',
                'Unselected as Favorite'
              );
            }
          }
        }

        if (hideDelete) {
          expect(row.querySelector(`ui5-button`)).not.toBeInTheDocument();
        } else {
          if (global && hideDelete !== false) {
            expect(row.querySelector(`ui5-button`)).not.toBeInTheDocument();
          } else {
            expect(row.querySelector(`ui5-button`)).toHaveAttribute('title', 'Delete view');
          }
        }

        if (applyAutomatically) {
          expect(row.querySelector(`ui5-checkbox`)).toHaveAttribute('checked', 'true');
        } else {
          expect(row.querySelector(`ui5-checkbox`)).not.toHaveAttribute('checked', 'true');
        }

        if (author) {
          screen.getByText(author);
        }
      });
    };
    manageViewsRowTest(variantItems, false);
    rerender(
      <VariantManagement showOnlyFavorites>
        {variantItems.map((item, index) => (
          <VariantItem key={index} {...item.props}>
            {item.rowId}
          </VariantItem>
        ))}
      </VariantManagement>
    );
    manageViewsRowTest(variantItems, true);
  });

  test('Delete variants', () => {
    const cb = jest.fn((e) => e.detail);
    const { getByText } = render(
      <VariantManagement onSaveManageViews={cb}>
        {[
          ...TwoVariantItems,
          <VariantItem isDefault key="2">
            VariantItem 3
          </VariantItem>
        ]}
      </VariantManagement>
    );
    const manageBtn = getByText('Manage');
    fireEvent.click(manageBtn);
    const saveBtn = screen.getByText('Save');

    const row1DeleteBtn = screen.getAllByTitle('Delete view')[0];
    const row2DeleteBtn = screen.getAllByTitle('Delete view')[1];
    fireEvent.click(row1DeleteBtn);
    fireEvent.click(row2DeleteBtn);

    fireEvent.click(saveBtn);
    expect(cb).toHaveBeenCalledTimes(1);

    expect(cb.mock.results[0].value.deletedVariants[0].children).toBe('VariantItem 1');
    expect(cb.mock.results[0].value.deletedVariants[1].children).toBe('VariantItem 2');
    expect(document.querySelector('ui5-dialog')).not.toBeInTheDocument();
  });

  test('Manage Views input validation', () => {
    const cb = jest.fn((e) => e.detail);
    const { getByText } = render(
      <VariantManagement onSaveManageViews={cb}>
        {[
          ...TwoVariantItems,
          <VariantItem isDefault key="2">
            VariantItem 3
          </VariantItem>
        ]}
      </VariantManagement>
    );
    const manageBtn = getByText('Manage');
    fireEvent.click(manageBtn);
    const saveBtn = screen.getByText('Save');

    fireEvent.input(screen.getAllByPlaceholderText('View')[0], { target: { value: 'Updated!' } });
    fireEvent.input(screen.getAllByPlaceholderText('View')[1], { target: { value: 'Updated!' } });
    fireEvent.input(screen.getAllByPlaceholderText('View')[2], { target: { value: 'Updated!' } });
    fireEvent.click(saveBtn);
    expect(cb).toHaveBeenCalledTimes(0);
    fireEvent.input(screen.getAllByPlaceholderText('View')[0], { target: { value: '1' } });
    fireEvent.click(saveBtn);
    expect(cb).toHaveBeenCalledTimes(0);
    fireEvent.input(screen.getAllByPlaceholderText('View')[1], { target: { value: '2' } });
    fireEvent.click(saveBtn);
    expect(cb).toHaveBeenCalledTimes(0);
  });

  createCustomPropsTest(VariantManagement);
});
