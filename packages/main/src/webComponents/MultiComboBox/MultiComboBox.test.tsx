import React from 'react';
import { MultiComboBox } from '../../lib/MultiComboBox';
import { mountThemedComponent } from '@shared/tests/utils';

describe('MultiComboBox', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MultiComboBox />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
