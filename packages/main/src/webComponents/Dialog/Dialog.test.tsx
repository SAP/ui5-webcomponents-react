import React from 'react';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Dialog', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Dialog />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
