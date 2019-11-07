import { getEventFromCallback, mountThemedComponent } from '@shared/tests/utils';
import { SegmentedButton } from '@ui5/webcomponents-react/lib/SegmentedButton';
import { SegmentedButtonItem } from '@ui5/webcomponents-react/lib/SegmentedButtonItem';
import React, { cloneElement } from 'react';
import sinon from 'sinon';

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

    const wrapper = mountThemedComponent(
      <SegmentedButton onItemSelected={callback}>
        <SegmentedButtonItem id="btn-1">Test</SegmentedButtonItem>
        <SegmentedButtonItem id="btn-2">Test</SegmentedButtonItem>
      </SegmentedButton>
    );
    expect(wrapper.render()).toMatchSnapshot();
    wrapper.setProps({
      children: cloneElement(wrapper.prop('children'), { selectedKey: 'btn-2' })
    });
    wrapper.update();
    expect(wrapper.render()).toMatchSnapshot();
    expect(callback.called).toBe(false);
  });
});
