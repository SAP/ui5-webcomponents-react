import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { AutoCloseOnOutsideClick } from './index';

describe('AutoCloseOnOutsideClick', () => {
  test('Loose Focus', () => {
    const callback = sinon.spy();

    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const wrapper = mount(
      <div id="parent">
        <AutoCloseOnOutsideClick onOutsideClick={callback}>
          <button>Inner Button</button>
        </AutoCloseOnOutsideClick>
      </div>
    );
    // @ts-ignore
    expect(wrapper.find(AutoCloseOnOutsideClick).instance().state.isContentAreaOpen).toBe(true);

    wrapper.find('button').simulate('click');
    expect(callback.called).toBe(false);

    // @ts-ignore
    expect(wrapper.find(AutoCloseOnOutsideClick).instance().state.isContentAreaOpen).toBe(true);

    // @ts-ignore
    map.mousedown({ target: document.querySelector('#parent') });
    expect(callback.called).toBe(true);
    // @ts-ignore
    expect(wrapper.find(AutoCloseOnOutsideClick).instance().state.isContentAreaOpen).toBe(false);
  });
});
