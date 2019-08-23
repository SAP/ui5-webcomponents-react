import React from 'react';
import { Panel } from '../../lib/Panel';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Panel', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Panel />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
