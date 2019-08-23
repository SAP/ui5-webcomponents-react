import React from 'react';
import { CustomListItem } from '../../lib/CustomListItem';
import { mountThemedComponent } from '@shared/tests/utils';

describe('CustomListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CustomListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
