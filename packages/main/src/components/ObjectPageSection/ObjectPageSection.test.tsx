import { createPassThroughPropsTest } from '@shared/tests/utils';
import { render } from '@shared/tests';
import { ObjectPageSection } from '@ui5/webcomponents-react/lib/ObjectPageSection';
import { shallow } from 'enzyme';
import React from 'react';

describe('ObjectPageSection', () => {
  test('Renders with children', () => {
    const { asFragment } = render(
      <ObjectPageSection id={'1'} title="Test" titleUppercase>
        This is my Text
      </ObjectPageSection>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('ObjectPage w/ lowercase title', () => {
    const { asFragment } = render(
      <ObjectPageSection id={'1'} title="Test" titleUppercase={false}>
        This is my Text
      </ObjectPageSection>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Empty Id Prop', () => {
    // @ts-ignore
    const renderer = () => shallow(<ObjectPageSection.InnerComponent />);
    expect(renderer).toThrow();
  });

  createPassThroughPropsTest(ObjectPageSection);
});
