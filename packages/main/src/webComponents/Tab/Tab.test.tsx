import { render } from '@shared/tests';
import { Tab } from '@ui5/webcomponents-react/lib/Tab';
import React from 'react';

describe('Tab', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Tab />);
    expect(asFragment()).toMatchSnapshot();
  });
});
