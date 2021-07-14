import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { ObjectPageSection } from '@ui5/webcomponents-react/dist/ObjectPageSection';
import React from 'react';

describe('ObjectPageSection', () => {
  test('Renders with children', () => {
    const { asFragment } = render(
      <ObjectPageSection id={'1'} heading="Test" headingUppercase>
        This is my Text
      </ObjectPageSection>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('ObjectPage w/ lowercase title', () => {
    const { asFragment } = render(
      <ObjectPageSection id={'1'} heading="Test" headingUppercase={false}>
        This is my Text
      </ObjectPageSection>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Empty Id Prop', () => {
    const renderer = () => render(<ObjectPageSection />);
    expect(renderer).toThrow();
  });

  createPassThroughPropsTest(ObjectPageSection);
});
