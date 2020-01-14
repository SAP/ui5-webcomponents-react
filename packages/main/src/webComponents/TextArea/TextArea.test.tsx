import { mountThemedComponent } from '@shared/tests/utils';
import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';
import React from 'react';

describe('TextArea', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TextArea />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
