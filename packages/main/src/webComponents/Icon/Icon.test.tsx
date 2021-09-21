import { render } from '@shared/tests';
import '@ui5/webcomponents-icons/dist/add.js';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import React from 'react';

describe('Icon', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Icon name="add" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
