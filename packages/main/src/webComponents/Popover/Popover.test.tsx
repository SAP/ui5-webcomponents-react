import { mountThemedComponent } from '@shared/tests/utils';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import React from 'react';

describe('Popover', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Popover />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
