import React from 'react';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Popover', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Popover />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
