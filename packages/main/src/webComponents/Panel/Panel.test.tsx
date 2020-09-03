import { render } from '@shared/tests';
import { Panel } from '@ui5/webcomponents-react/lib/Panel';
import React from 'react';

describe('Panel', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Panel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
