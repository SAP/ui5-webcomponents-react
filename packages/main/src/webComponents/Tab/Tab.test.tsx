import { mountThemedComponent } from '@shared/tests/utils';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import React from 'react';

describe('Tab', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Tab />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
