import React from 'react';
import { StandardListItem } from '../../lib/StandardListItem';
import { mountThemedComponent } from '@shared/tests/utils';

describe('StandardListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<StandardListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
