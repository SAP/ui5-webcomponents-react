import { mountThemedComponent } from '@shared/tests/utils';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import React from 'react';

describe('Button', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Button />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
