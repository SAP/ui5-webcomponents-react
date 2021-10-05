import { fireEvent, getByText, render, renderWithDefine, screen, waitFor } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { VariantManagement } from '@ui5/webcomponents-react/dist/VariantManagement';
import React from 'react';
import { TitleLevel } from '../..';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';
import { VariantItem } from './VariantItem';

const TwoVariantItems = [
  <VariantItem key="0">VariantItem 1</VariantItem>,
  <VariantItem selected key="1">
    VariantItem 2
  </VariantItem>
];

describe('VariantManagement', () => {
  test('Render without crashing', () => {
    const { rerender, getByTitle, getAllByText, getByText } = render(<VariantManagement />);
    getByTitle('Select view');
    //todo
    // expect(document.body).toMatchSnapshot();
    rerender(<VariantManagement>{TwoVariantItems}</VariantManagement>);
    getByTitle('Select view');
    expect(getAllByText('VariantItem 2')).toHaveLength(2);
    getByText('VariantItem 1');
    //todo
    // expect(document.body).toMatchSnapshot();
  });

  test('Selection', async () => {
    const cb = jest.fn((e) => e.detail);
    const { getByTitle, getAllByText, getByText } = await renderWithDefine(
      <VariantManagement onSelect={cb} showCancelButton>
        {TwoVariantItems}
      </VariantManagement>,
      ['ui5-li']
    );
    const wcListItem = screen.getByText('VariantItem 1');
    await waitFor(() => wcListItem.shadowRoot.querySelector('li'));
    const li = wcListItem.shadowRoot.querySelector('li');

    const popover: Ui5PopoverDomRef = document.querySelector('ui5-responsive-popover');
    const btn = getByTitle('Select view');
    const heading = getAllByText('VariantItem 2')[0];
    const closeBtn = getByText('Cancel');

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
    //todo
    // expect(document.body).toMatchSnapshot();
    expect(cb.mock.results[0].value.selectedVariant.children).toBe('VariantItem 1');
    expect(cb.mock.results[0].value.selectedVariant.variantItem).toBeInTheDocument();

    // close popover
    fireEvent.click(closeBtn);
    expect(popover.isOpen()).toBeFalsy();
    // open by clicking on heading
    fireEvent.click(getAllByText('VariantItem 1')[0]);
    expect(popover.isOpen()).toBeTruthy();
    fireEvent.click(closeBtn);
    expect(popover.isOpen()).toBeFalsy();
  });

  test('Disabled', () => {
    const { container, getByTitle } = render(<VariantManagement disabled>{TwoVariantItems}</VariantManagement>);

    const btn = getByTitle('Select view');
    const headingContainer = container.children[0];

    expect(headingContainer).toHaveClass('VariantManagement-disabled');
    expect(btn).toHaveAttribute('disabled', 'true');
    // todo
    // expect(document.body).toMatchSnapshot();
  });

  test('Close on item selection', async () => {
    const { getByTitle, rerender } = await renderWithDefine(
      <VariantManagement closeOnItemSelect>{TwoVariantItems}</VariantManagement>,
      ['ui5-li']
    );
    const wcListItem = screen.getByText('VariantItem 1');
    await waitFor(() => wcListItem.shadowRoot.querySelector('li'));
    const li = wcListItem.shadowRoot.querySelector('li');

    const popover: Ui5PopoverDomRef = document.querySelector('ui5-responsive-popover');
    const btn = getByTitle('Select view');
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
    const { getByTitle, rerender, getByText, queryByText } = await renderWithDefine(
      <VariantManagement dirtyState>{variantItems}</VariantManagement>,
      ['ui5-li']
    );
    const wcListItem = screen.getByText('VariantItem 3');
    await waitFor(() => wcListItem.shadowRoot.querySelector('li'));
    const li = wcListItem.shadowRoot.querySelector('li');

    getByText('*');
    getByText('Save');
    //todo
    // expect(document.body).toMatchSnapshot();

    const popover: Ui5PopoverDomRef = document.querySelector('ui5-responsive-popover');
    const btn = getByTitle('Select view');
    fireEvent.click(btn);
    expect(popover.isOpen()).toBeTruthy();
    fireEvent.click(li);
    expect(queryByText('Save')).toBeNull();

    rerender(
      <VariantManagement dirtyState dirtyStateText="Dirty state">
        {variantItems}
      </VariantManagement>
    );
    //todo
    // expect(document.body).toMatchSnapshot();
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
    rerender(<VariantManagement showCancelButton>{TwoVariantItems}</VariantManagement>);
    getByText('Cancel');
  });

  test('In error state', () => {
    render(<VariantManagement inErrorState>{TwoVariantItems}</VariantManagement>);
    expect(document.querySelector('ui5-illustrated-message')).toBeInTheDocument();
    // todo
    // expect(document.body).toMatchSnapshot();
  });

  test('Headings customization', async () => {
    const { getAllByText, getByTitle } = await renderWithDefine(
      <VariantManagement titleText="Popover Heading" level={TitleLevel.H1}>
        {TwoVariantItems}
      </VariantManagement>,
      ['ui5-responsive-popover']
    );
    const btn = getByTitle('Select view');
    fireEvent.click(btn);
    const popover: Ui5PopoverDomRef = document.querySelector('ui5-responsive-popover');
    await waitFor(() => popover.shadowRoot.querySelector('h2'));
    const popoverHeading = popover.shadowRoot.querySelector('h2');
    expect(popoverHeading).toHaveTextContent('Popover Heading');
    expect(getAllByText('VariantItem 2')[0]).toHaveAttribute('level', 'H1');
    //todo
    // expect(document.body).toMatchSnapshot();
  });

  test('Save As', () => {
    const cb = jest.fn((e) => e.detail);
    const { getByText } = render(<VariantManagement onSaveAs={cb}>{TwoVariantItems}</VariantManagement>);
    const saveAsBtn = getByText('Save As');
    fireEvent.click(saveAsBtn);
    const inputField = document.querySelector('ui5-input');
    const checkboxes = document.querySelectorAll('ui5-checkbox');
    expect(inputField).toHaveValue('VariantItem 2');
    checkboxes.forEach((item: HTMLInputElement) => {
      expect(item.checked).toBeFalsy();
      fireEvent.change(item, { target: { checked: true } });
    });
    fireEvent.change(inputField, { target: { value: 'Updated!' } });
    expect(inputField).toHaveValue('Updated!');
    checkboxes.forEach((item: HTMLInputElement) => {
      expect(item.checked).toBeTruthy();
    });
    const saveBtn = getByText('Save');
    fireEvent.click(saveBtn);
    expect(cb).toHaveBeenCalledTimes(1);

    expect(cb.mock.results[0].value.children).toBe('Updated!');
    expect(cb.mock.results[0].value.isDefault).toBeTruthy();
    expect(cb.mock.results[0].value.global).toBeTruthy();
    expect(cb.mock.results[0].value.applyAutomatically).toBeTruthy();
    expect(cb.mock.results[0].value.variantItem).toBeInTheDocument();
  });

  createPassThroughPropsTest(VariantManagement);
});
