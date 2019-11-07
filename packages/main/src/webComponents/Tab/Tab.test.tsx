import React from 'react';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Tab', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Tab />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
