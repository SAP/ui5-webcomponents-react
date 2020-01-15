import { mountThemedComponent } from '@shared/tests/utils';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React from 'react';

describe('ToggleButton', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ToggleButton />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
