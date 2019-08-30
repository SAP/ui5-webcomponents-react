import { getEventFromCallback, mountThemedComponent } from '@shared/tests/utils';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';
import { SegmentedButtonItem } from '@ui5/webcomponents-react/lib/SegmentedButtonItem';

describe('SegmentedButton', () => {
  test('Selection', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(
      // @ts-ignore
      <SegmentedButton onItemSelected={callback} selectedKey="btn-1">
        <SegmentedButtonItem id="btn-1">Test</SegmentedButtonItem>
        <SegmentedButtonItem id="btn-2">Test</SegmentedButtonItem>
      </SegmentedButton>
    );
    wrapper
      .find('li')
      .last()
      .simulate('click');
    wrapper.update();
    expect(getEventFromCallback(callback).getParameter('selectedKey')).toEqual('btn-2');
  });

  test('Update Selection via API', () => {
    const callback = sinon.spy();
    const SegmentedBtn = (SegmentedButton as any).InnerComponent;
    const SegmentedBtnItem = (SegmentedButtonItem as any).InnerComponent;
    const wrapper = mount(
      <SegmentedBtn onItemSelected={callback} classes={{}}>
        <SegmentedBtnItem id="btn-1" classes={{}}>
          Test
        </SegmentedBtnItem>
        <SegmentedBtnItem id="btn-2" classes={{}}>
          Test
        </SegmentedBtnItem>
      </SegmentedBtn>
    );
    wrapper.setProps({ selectedKey: 'btn-2' });
    wrapper.update();
    expect(wrapper.state('selectedKey')).toEqual('btn-2');
    expect(callback.called).toBe(false);
  });
});
