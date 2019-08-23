import React from 'react';
import { RadioButton } from '../../lib/RadioButton';
import { mountThemedComponent } from '@shared/tests/utils';

describe('RadioButton', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<RadioButton />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
