import { mountThemedComponent } from '@shared/tests/utils';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import React from 'react';

describe('MultiComboBox', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MultiComboBox />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
