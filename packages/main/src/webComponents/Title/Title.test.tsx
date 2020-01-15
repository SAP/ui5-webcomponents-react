import { mountThemedComponent } from '@shared/tests/utils';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import React from 'react';

describe('Title', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Title />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
