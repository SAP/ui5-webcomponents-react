import React from 'react';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { mountThemedComponent } from '@shared/tests/utils';

describe('MultiComboBox', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MultiComboBox />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
