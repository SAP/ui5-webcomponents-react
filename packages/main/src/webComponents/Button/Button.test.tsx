import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { Button } from '@ui5/webcomponents-react/lib/Button';

describe('Button', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Button />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
