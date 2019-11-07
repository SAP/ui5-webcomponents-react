import { mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';

describe('CheckBox', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<CheckBox />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
