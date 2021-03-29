import { render } from '@shared/tests';
import { StepInput } from '@ui5/webcomponents-react/dist/StepInput';
import React from 'react';

describe('StepInput', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<StepInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});
