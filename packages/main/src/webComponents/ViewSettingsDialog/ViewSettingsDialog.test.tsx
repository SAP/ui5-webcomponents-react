import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { ViewSettingsDialog } from './index';
import React from 'react';

describe('ViewSettingsDialog', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ViewSettingsDialog />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(ViewSettingsDialog);
});
