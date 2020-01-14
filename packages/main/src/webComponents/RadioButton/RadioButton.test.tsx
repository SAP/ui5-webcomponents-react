import { mountThemedComponent } from '@shared/tests/utils';
import { RadioButton } from '@ui5/webcomponents-react/lib/RadioButton';
import React from 'react';

describe('RadioButton', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<RadioButton />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
