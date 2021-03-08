import { render } from '@shared/tests';
import { CheckBox } from '@ui5/webcomponents-react/dist/CheckBox';
import React from 'react';

describe('CheckBox', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<CheckBox />);
    expect(asFragment()).toMatchSnapshot();
  });
});
