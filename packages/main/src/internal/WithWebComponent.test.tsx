import { Button } from '@ui5/webcomponents-react/lib/Button';
import { mount } from 'enzyme';
import React from 'react';
import { spy } from 'sinon';

describe('withWebComponent', () => {
  test('Unmount Event Handlers correctly after prop update', () => {
    const callback = spy();
    // eslint-disable-next-line react/jsx-no-bind
    const wrapper = mount(<Button onClick={(...args) => callback(...args)} />);
    const component = wrapper
      .find('ui5-button')
      .first()
      .instance();

    // @ts-ignore
    component.click();
    expect(callback.callCount).toEqual(1);
    wrapper.setProps({
      onClick: (...args) => callback(...args)
    });
    wrapper.update();
    // @ts-ignore
    component.click();
    expect(callback.callCount).toEqual(2);
  });

  test('Bind new event handler', () => {
    const callback = spy();
    const wrapper = mount(<Button onClick={callback} />);
    const component = wrapper
      .find('ui5-button')
      .first()
      .instance();
    // @ts-ignore
    component.fireEvent('click');
    expect(callback.callCount).toEqual(1);

    const anotherCallback = spy();
    wrapper.setProps({
      onClick: anotherCallback
    });
    wrapper.update();
    // @ts-ignore
    component.fireEvent('click');
    expect(callback.callCount).toEqual(1);
    expect(anotherCallback.callCount).toEqual(1);
  });
});
