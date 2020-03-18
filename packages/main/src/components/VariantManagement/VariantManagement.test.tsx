import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];

describe('VariantManagement', () => {
  test('Render without crashing', () => {
    const wrapper = mount(<VariantManagement variantItems={variantItems} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  // it('With suggestions', () => {
  //   const callback = sinon.spy();
  //   const wrapper = mount(<VariantManagement onSelect={callback} variantItems={variantItems} />);
  //
  //   console.log('find button', wrapper.find(Button));
  //
  //
  //
  //   // @ts-ignore
  //   (wrapper.find(Button).first().prop('onPress') as any)({target: {}});
  //
  //
  //   wrapper.update();
  //
  //   const listItem = wrapper
  //   // @ts-ignore
  //     .find(ListItem.InnerComponent)
  //     .last()
  //     .find('li');
  //   listItem.simulate('click');
  //
  //   expect(wrapper.debug()).to.matchSnapshot();
  //   expect(getEventFromCallback(callback).getParameter('selectedItem')).to.equal(variantItems[1]);
  //
  //
  // });

  createPassThroughPropsTest(VariantManagement, { variantItems });
});
