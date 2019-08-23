import { getEventFromCallback, mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import sinon from 'sinon';
import { Icon } from '../../lib/Icon';
import { SegmentedButtonItem } from '../../lib/SegmentedButtonItem';

describe('SegmentedButtonItem', () => {
  test('Basic SegmentedButtonItem', () => {
    const wrapper = mountThemedComponent(
      <SegmentedButtonItem id={1} icon={<Icon src="add" />}>
        My Item
      </SegmentedButtonItem>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Selected SegmentedButtonItem', () => {
    const wrapper = mountThemedComponent(
      // @ts-ignore
      <SegmentedButtonItem id={1} icon={<Icon src="add" />} selected>
        My Item
      </SegmentedButtonItem>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('SegmentedButtonItem Icon Only', () => {
    const wrapper = mountThemedComponent(<SegmentedButtonItem id={1} icon={<Icon src="add" />} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('SegmentedButtonItem Disabled', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(
      <SegmentedButtonItem id={1} icon={<Icon src="add" />} enabled={false} onClick={callback} />
    );
    wrapper.simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
    expect(callback.called).toEqual(false);
  });

  test('SegmentedButtonItem onClick', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(<SegmentedButtonItem id={1} icon={<Icon src="add" />} onClick={callback} />);
    wrapper.simulate('click');
    expect(wrapper.render()).toMatchSnapshot();
    expect(getEventFromCallback(callback).getParameter('selectedKey')).toEqual(1);
  });
});
