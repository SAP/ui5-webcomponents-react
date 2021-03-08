import { render } from '@shared/tests';
import { Timeline } from '@ui5/webcomponents-react/dist/Timeline';
import React from 'react';

describe('Timeline', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Timeline />);
    expect(asFragment()).toMatchSnapshot();
  });
});
