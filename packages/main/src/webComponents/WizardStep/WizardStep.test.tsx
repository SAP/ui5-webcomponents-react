import { render } from '@shared/tests';
import { createCustomPropsTest, createWaitForDefineTest } from '@shared/tests/utils';
import React from 'react';
import { WizardStep } from './index';

describe('WizardStep', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<WizardStep />);
    expect(asFragment()).toMatchSnapshot();
  });
  createCustomPropsTest(WizardStep);
  createWaitForDefineTest(WizardStep);
});
