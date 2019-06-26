import { mountThemedComponent } from '@shared/tests/utils';
import UI5Button from '@ui5/webcomponents/dist/Button';
import { expect } from 'chai';
import React, { cloneElement, FC } from 'react';
import { spy } from 'sinon';
import { withWebComponent } from './withWebComponent';

describe('withWebComponent', () => {
  it('Unmount Event Handlers correctly after prop update', () => {
    let Button: FC<any> = withWebComponent(UI5Button);
    const callback = spy();
    const wrapper = mountThemedComponent(<Button onPress={(...args) => callback(...args)} />);
    const component = wrapper
      .find('ui5-button')
      .first()
      .instance();
    // @ts-ignore
    component.onclick({});
    expect(callback.callCount).to.equal(1, 'onPress handler has not been called');
    wrapper.setProps({
      children: cloneElement(wrapper.prop('children'), { onPress: (...args) => callback(...args) })
    });
    wrapper.update();
    // @ts-ignore
    component.onclick({});
    expect(callback.callCount).to.equal(2, 'onPress handler has not been called after update');
  });
});
