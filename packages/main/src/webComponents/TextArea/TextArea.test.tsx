import React from 'react';
import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';
import { mountThemedComponent } from '@shared/tests/utils';

describe('TextArea', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<TextArea />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
