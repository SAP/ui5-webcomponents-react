import { mountThemedComponent } from '@shared/tests/utils';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import React from 'react';

describe('Dialog', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Dialog />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
