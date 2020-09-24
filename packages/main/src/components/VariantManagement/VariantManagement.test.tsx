import { fireEvent, render, screen, waitFor, getByText } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];

describe('VariantManagement', () => {
  test('Render without crashing', () => {
    const wrapper = render(<VariantManagement variantItems={variantItems} selectedKey="1" />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  test('Render without crashing - disabled', () => {
    const wrapper = render(<VariantManagement variantItems={variantItems} disabled />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  test.skip('With suggestions', async () => {
    const callback = jest.fn();
    const wrapper = render(<VariantManagement onSelect={callback} variantItems={variantItems} />);

    fireEvent.click(wrapper.container.querySelector('ui5-button[icon="navigation-down-arrow"]'));

    // wait for appearance
    await waitFor(() => {
      expect(screen.getByText(variantItems[1].label)).toBeVisible();
    });

    fireEvent.click(screen.getByText(variantItems[1].label));

    expect(wrapper.asFragment()).toMatchSnapshot();
    expect(callback.mock.calls[0][0].detail.selectedItem).toEqual(variantItems[1]);
    wrapper.unmount();
  });

  createPassThroughPropsTest(VariantManagement, { variantItems });
});
