import { mountThemedComponent } from '@shared/tests/utils';
import UI5Button from '@ui5/webcomponents/dist/Button';
import React, { cloneElement, FC } from 'react';
import { spy } from 'sinon';
import { withWebComponent } from './withWebComponent';

describe('withWebComponent', () => {
  test('Unmount Event Handlers correctly after prop update', () => {
    const Button: FC<any> = withWebComponent(UI5Button);
    const callback = spy();
    // eslint-disable-next-line react/jsx-no-bind
    const wrapper = mountThemedComponent(<Button onClick={(...args) => callback(...args)} />);
    const component = wrapper
      .find('ui5-button')
      .first()
      .instance();
    // @ts-ignore
    component.fireEvent('click');
    expect(callback.callCount).toEqual(1);
    wrapper.setProps({
      children: cloneElement(wrapper.prop('children'), { onClick: (...args) => callback(...args) })
    });
    wrapper.update();
    // @ts-ignore
    component.fireEvent('click');
    expect(callback.callCount).toEqual(2);
  });

  test('Bind new event handler', () => {
    const Button: FC<any> = withWebComponent(UI5Button);
    const callback = spy();
    const wrapper = mountThemedComponent(<Button onClick={callback} />);
    const component = wrapper
      .find('ui5-button')
      .first()
      .instance();
    // @ts-ignore
    component.fireEvent('click');
    expect(callback.callCount).toEqual(1);

    const anotherCallback = spy();
    wrapper.setProps({
      children: cloneElement(wrapper.prop('children'), { onClick: anotherCallback })
    });
    wrapper.update();
    // @ts-ignore
    component.fireEvent('click');
    expect(callback.callCount).toEqual(1);
    expect(anotherCallback.callCount).toEqual(1);
  });
});
