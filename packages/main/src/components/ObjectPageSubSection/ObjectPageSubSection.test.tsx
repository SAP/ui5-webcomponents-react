import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { ObjectPageSubSection } from '@ui5/webcomponents-react/lib/ObjectPageSubSection';
import React from 'react';

describe('ObjectPageSubSection', () => {
  test('Render without Crashing', () => {
    const { asFragment } = render(<ObjectPageSubSection id="test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('No ID should throw', () => {
    const renderer = () => render(<ObjectPageSubSection title="test" />);
    expect(renderer).toThrow();
  });

  createPassThroughPropsTest(ObjectPageSubSection);
});
