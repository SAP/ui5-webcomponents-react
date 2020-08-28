import { render } from '@shared/tests';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import React from 'react';

describe('CheckBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CheckBox />);
    expect(asFragment()).toMatchSnapshot();
  });
});
