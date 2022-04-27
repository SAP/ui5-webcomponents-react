import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import '@ui5/webcomponents-icons/dist/add.js';
import React from 'react';
import { Icon } from '../Icon';

describe('Icon', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Icon name="add" />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Icon);
  createWaitForDefineTest(Icon);
});
