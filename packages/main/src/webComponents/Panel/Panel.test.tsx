import { mountThemedComponent } from '@shared/tests/utils';
import { Panel } from '@ui5/webcomponents-react/lib/Panel';
import React from 'react';

describe('Panel', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Panel />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
