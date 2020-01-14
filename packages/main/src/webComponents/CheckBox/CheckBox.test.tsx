import { mountThemedComponent } from '@shared/tests/utils';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import React from 'react';

describe('CheckBox', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CheckBox />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
