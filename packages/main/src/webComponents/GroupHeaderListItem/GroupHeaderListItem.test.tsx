import { mountThemedComponent } from '@shared/tests/utils';
import { GroupHeaderListItem } from '@ui5/webcomponents-react/lib/GroupHeaderListItem';
import React from 'react';

describe('GroupHeaderListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<GroupHeaderListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
