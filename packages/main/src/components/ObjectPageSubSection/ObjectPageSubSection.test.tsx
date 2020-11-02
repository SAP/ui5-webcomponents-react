import { createPassThroughPropsTest } from '@shared/tests/utils';
import { ObjectPageSubSection } from '@ui5/webcomponents-react/lib/ObjectPageSubSection';
import { render } from '@shared/tests';
import React from 'react';

describe('ObjectPageSubSection', () => {
  test('Render without Crashing', () => {
    // @ts-ignore
    const { asFragment } = render(<ObjectPageSubSection id="test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('No ID should throw', () => {
    // @ts-ignore
    const renderer = () => shallow(<ObjectPageSubSection.InnerComponent title="test" classes={{}} />);
    expect(renderer).toThrow();
  });

  createPassThroughPropsTest(ObjectPageSubSection);
});
