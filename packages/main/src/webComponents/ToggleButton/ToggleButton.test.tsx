import React from 'react';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import { mountThemedComponent } from '@shared/tests/utils';

describe('ToggleButton', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<ToggleButton />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
