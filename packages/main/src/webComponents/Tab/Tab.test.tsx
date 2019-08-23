import React from 'react';
import { Tab } from '../../lib/Tab';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Tab', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Tab />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
