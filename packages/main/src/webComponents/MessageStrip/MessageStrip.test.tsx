import React from 'react';
import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';
import { mountThemedComponent } from '@shared/tests/utils';

describe('MessageStrip', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MessageStrip />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
