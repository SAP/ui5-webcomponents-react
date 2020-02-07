import { mountThemedComponent } from '@shared/tests/utils';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import React from 'react';

describe('CustomListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CustomListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
