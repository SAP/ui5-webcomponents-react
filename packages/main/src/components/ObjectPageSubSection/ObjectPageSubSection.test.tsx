import { createPassThroughPropsTest, renderThemedComponent } from '@shared/tests/utils';
import { ObjectPageSubSection } from '@ui5/webcomponents-react/lib/ObjectPageSubSection';
import { shallow } from 'enzyme';
import React from 'react';

describe('ObjectPageSubSection', () => {
  test('Render without Crashing', () => {
    // @ts-ignore
    const wrapper = renderThemedComponent(<ObjectPageSubSection id="test" />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('No ID should throw', () => {
    // @ts-ignore
    const renderer = () => shallow(<ObjectPageSubSection.InnerComponent title="test" classes={{}} />);
    expect(renderer).toThrow();
  });

  createPassThroughPropsTest(ObjectPageSubSection);
});
