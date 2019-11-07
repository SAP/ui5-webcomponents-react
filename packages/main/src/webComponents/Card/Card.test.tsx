import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { Card } from '@ui5/webcomponents-react/lib/Card';

describe('Card', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Card />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
