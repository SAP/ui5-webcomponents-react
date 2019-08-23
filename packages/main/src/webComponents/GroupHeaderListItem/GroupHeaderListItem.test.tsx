import React from 'react';
import { GroupHeaderListItem } from '../../lib/GroupHeaderListItem';
import { mountThemedComponent } from '@shared/tests/utils';

describe('GroupHeaderListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<GroupHeaderListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
