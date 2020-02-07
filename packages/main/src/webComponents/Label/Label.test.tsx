import { mountThemedComponent } from '@shared/tests/utils';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';

describe('Label', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Label />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
