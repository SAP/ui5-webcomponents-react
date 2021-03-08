import { render } from '@shared/tests';
import { Tree } from '@ui5/webcomponents-react/dist/Tree';
import React from 'react';

describe('Tree', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Tree />);
    expect(asFragment()).toMatchSnapshot();
  });
});
