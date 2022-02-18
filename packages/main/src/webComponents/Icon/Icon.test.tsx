import { render } from '@shared/tests';
import '@ui5/webcomponents-icons/dist/add.js';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import { Icon } from '../Icon';
import React from 'react';

describe('Icon', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<Icon name="add" />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(Icon);
  createWaitForDefineTest(Icon);
});
