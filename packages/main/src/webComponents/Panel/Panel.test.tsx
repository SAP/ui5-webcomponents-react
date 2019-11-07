import React from 'react';
import { Panel } from '@ui5/webcomponents-react/lib/Panel';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Panel', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Panel />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
