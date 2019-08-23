import React from 'react';
import { Title } from '../../lib/Title';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Title', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Title />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
