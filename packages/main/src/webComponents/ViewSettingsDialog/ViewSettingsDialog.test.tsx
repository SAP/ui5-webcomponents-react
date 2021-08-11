import { render } from '@shared/tests';
import { ViewSettingsDialog } from '@ui5/webcomponents-react/lib/ViewSettingsDialog';
import React from 'react';

describe('ViewSettingsDialog', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ViewSettingsDialog />);
    expect(asFragment()).toMatchSnapshot();
  });
});
