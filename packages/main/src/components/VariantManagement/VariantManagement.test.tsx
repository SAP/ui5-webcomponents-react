import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { VariantManagement } from '../../lib/VariantManagement';

const variantItems = [{ label: 'Variant 1', key: '1' }, { label: 'Variant 2', key: '2' }];

describe('VariantManagement', () => {
  test('Render without crashing', () => {
    const wrapper = mountThemedComponent(<VariantManagement variantItems={variantItems} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  // it('With suggestions', () => {
  //   const callback = sinon.spy();
  //   const wrapper = mountThemedComponent(<VariantManagement onSelect={callback} variantItems={variantItems} />);
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
});
