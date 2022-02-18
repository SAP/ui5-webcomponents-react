import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { ViewSettingsDialog } from './index';

describe('ViewSettingsDialog', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ViewSettingsDialog />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ViewSettingsDialog);
  createWaitForDefineTest(ViewSettingsDialog);
});
