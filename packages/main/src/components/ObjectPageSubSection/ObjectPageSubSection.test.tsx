import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { ObjectPageSubSection } from '@ui5/webcomponents-react/dist/ObjectPageSubSection';
import React from 'react';

describe('ObjectPageSubSection', () => {
  test('Render without Crashing', () => {
    const { asFragment } = render(<ObjectPageSubSection id="test">Content</ObjectPageSubSection>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('No ID should throw', () => {
    const renderer = () => render(<ObjectPageSubSection heading="test">Content</ObjectPageSubSection>);
    expect(renderer).toThrow();
  });

  createPassThroughPropsTest(ObjectPageSubSection);
});
