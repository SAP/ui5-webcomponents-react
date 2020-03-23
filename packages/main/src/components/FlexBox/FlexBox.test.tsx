import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import * as React from 'react';
import sinon from 'sinon';

describe('FlexBox', () => {
  test('JustifyContent: End', () => {
    const wrapper = mount(
      <FlexBox justifyContent={FlexBoxJustifyContent.End}>
        <span>Test 1</span>
      </FlexBox>
    );
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).justifyContent).toEqual('flex-end');
  });

  test('Height and Width', () => {
    const wrapper = mount(
      <FlexBox height="1337px" width="42px">
        <span>Test 1</span>
      </FlexBox>
    );
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).height).toEqual('1337px');
    expect(window.getComputedStyle(node).width).toEqual('42px');
  });

  test('Display: Inline', () => {
    const wrapper = mount(
      <FlexBox displayInline>
        <span>Test 1</span>
      </FlexBox>
    );
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).display).toEqual('inline-flex');
  });

  test('with Custom Class Names and Style', () => {
    const wrapper = mount(
      <FlexBox className="testClass" style={{ backgroundColor: '#000' }}>
        <span>Test 1</span>
      </FlexBox>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('pass through click handler', () => {
    const callback = sinon.spy();
    const wrapper = mount(
      // @ts-ignore
      <FlexBox onClick={callback}>
        <span>Test 1</span>
      </FlexBox>
    );
    wrapper.simulate('click');
    expect(callback.called).toBe(true);
  });

  createPassThroughPropsTest(FlexBox);
});
