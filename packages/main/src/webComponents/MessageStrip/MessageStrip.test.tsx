import { mountThemedComponent } from '@shared/tests/utils';
import { MessageStrip } from '@ui5/webcomponents-react/lib/MessageStrip';
import React from 'react';

describe('MessageStrip', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<MessageStrip />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
