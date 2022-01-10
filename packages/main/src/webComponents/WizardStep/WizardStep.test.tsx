import { render } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import { WizardStep } from '@ui5/webcomponents-react/dist/WizardStep';
import React from 'react';

describe('WizardStep', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<WizardStep />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(WizardStep);
});
