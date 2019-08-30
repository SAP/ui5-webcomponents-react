import React from 'react';
import { GroupHeaderListItem } from '@ui5/webcomponents-react/lib/GroupHeaderListItem';
import { mountThemedComponent } from '@shared/tests/utils';

describe('GroupHeaderListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<GroupHeaderListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
