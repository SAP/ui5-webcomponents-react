import { Icon } from '../../lib/Icon';
import { SegmentedButtonItem } from '../../lib/SegmentedButtonItem';
import { getEventFromCallback, mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import sinon from 'sinon';

use(matchSnapshot);

describe('SegmentedButtonItem', () => {
  it('Basic SegmentedButtonItem', () => {
    const wrapper = mountThemedComponent(
      <SegmentedButtonItem id={1} icon={<Icon src="add" />}>
        My Item
      </SegmentedButtonItem>
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Selected SegmentedButtonItem', () => {
    const wrapper = mountThemedComponent(
      // @ts-ignore
      <SegmentedButtonItem id={1} icon={<Icon src="add" />} selected>
        My Item
      </SegmentedButtonItem>
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('SegmentedButtonItem Icon Only', () => {
    const wrapper = mountThemedComponent(<SegmentedButtonItem id={1} icon={<Icon src="add" />} />);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('SegmentedButtonItem Disabled', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(
      <SegmentedButtonItem id={1} icon={<Icon src="add" />} enabled={false} onClick={callback} />
    );
    wrapper.simulate('click');
    expect(wrapper.debug()).to.matchSnapshot();
    expect(callback.called).to.equal(false);
  });

  it('SegmentedButtonItem onClick', () => {
    const callback = sinon.spy();
    const wrapper = mountThemedComponent(<SegmentedButtonItem id={1} icon={<Icon src="add" />} onClick={callback} />);
    wrapper.simulate('click');
    expect(wrapper.debug()).to.matchSnapshot();
    expect(getEventFromCallback(callback).getParameter('selectedKey')).to.equal(1);
  });
});
