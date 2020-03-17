import { createPassThroughPropsTest, getEventFromCallback } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { SegmentedButtonItem } from '@ui5/webcomponents-react/lib/SegmentedButtonItem';
import React from 'react';
import sinon from 'sinon';

describe('SegmentedButtonItem', () => {
  test('Basic SegmentedButtonItem', () => {
    const wrapper = mount(
      <SegmentedButtonItem id={1} icon={<Icon name="add" />}>
        My Item
      </SegmentedButtonItem>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Selected SegmentedButtonItem', () => {
    const wrapper = mount(
      // @ts-ignore
      <SegmentedButtonItem id={1} icon={<Icon name="add" />} selected>
        My Item
      </SegmentedButtonItem>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('SegmentedButtonItem Icon Only', () => {
    const wrapper = mount(<SegmentedButtonItem id={1} icon={<Icon name="add" />} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('SegmentedButtonItem Disabled', () => {
    const callback = sinon.spy();
    const wrapper = mount(<SegmentedButtonItem id={1} icon={<Icon name="add" />} disabled onClick={callback} />);
    wrapper.simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
    expect(callback.called).toEqual(false);
  });

  test('SegmentedButtonItem onClick', () => {
    const callback = sinon.spy();
    const wrapper = mount(<SegmentedButtonItem id={1} icon={<Icon name="add" />} onClick={callback} />);
    wrapper.simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
    expect(getEventFromCallback(callback).getParameter('selectedKey')).toEqual(1);
  });

  createPassThroughPropsTest(SegmentedButtonItem);
});
