import { mountThemedComponent } from '@shared/tests/utils';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import React from 'react';

describe('Card', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Card />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
