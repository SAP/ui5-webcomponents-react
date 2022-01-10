import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { Tab } from '@ui5/webcomponents-react/dist/Tab';
import React from 'react';

describe('Tab', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Tab />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Tab);
});
