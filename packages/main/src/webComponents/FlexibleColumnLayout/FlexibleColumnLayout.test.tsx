import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { FlexibleColumnLayout } from '@ui5/webcomponents-react/dist/FlexibleColumnLayout';
import React from 'react';

describe('FlexibleColumnLayout', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<FlexibleColumnLayout />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(FlexibleColumnLayout);
});
