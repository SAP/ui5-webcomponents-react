import React from 'react';
import { Label } from '../../lib/Label';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Label', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Label />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
