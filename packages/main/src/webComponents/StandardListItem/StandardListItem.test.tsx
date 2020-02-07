import { mountThemedComponent } from '@shared/tests/utils';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import React from 'react';

describe('StandardListItem', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<StandardListItem />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
