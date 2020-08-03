import { createPassThroughPropsTest, getEventFromCallback } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';
import sinon from 'sinon';
import { act } from 'react-dom/test-utils';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];

describe('VariantManagement', () => {
  test('Render without crashing', () => {
    const wrapper = mount(<VariantManagement variantItems={variantItems} selectedKey="1" />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Render without crashing - disabled', () => {
    const wrapper = mount(<VariantManagement variantItems={variantItems} disabled />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test.skip('With suggestions', () => {
    const callback = sinon.spy();
    const wrapper = mount(<VariantManagement onSelect={callback} variantItems={variantItems} />, {
      attachTo: document.body.appendChild(document.createElement('div'))
    });

    wrapper.find('ui5-button').first().instance().fireEvent('click');

    act(() => {
      wrapper.find('ui5-li').last().instance().fireItemPress({});
    });

    expect(wrapper.render()).toMatchSnapshot();
    expect(getEventFromCallback(callback).detail.selectedItem).toEqual(variantItems[1]);
    wrapper.unmount();
  });

  createPassThroughPropsTest(VariantManagement, { variantItems });
});
