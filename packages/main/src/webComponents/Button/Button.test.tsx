import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { Button } from '../../lib/Button';

describe('Button', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Button />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
