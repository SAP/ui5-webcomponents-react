import { render } from '@shared/tests';
import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';
import React from 'react';

describe('TextArea', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<TextArea />);
    expect(asFragment()).toMatchSnapshot();
  });
});
