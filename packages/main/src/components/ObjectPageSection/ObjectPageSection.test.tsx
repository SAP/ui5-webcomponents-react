import { renderThemedComponent } from '@shared/tests/utils';
import { shallow } from 'enzyme';
import React from 'react';
import { ObjectPageSection } from '../../lib/ObjectPageSection';


describe('ObjectPageSection', () => {
  test('Renders with children', () => {
    const wrapper = renderThemedComponent(
      <ObjectPageSection id={'1'} title="Test" titleUppercase>
        This is my Text
      </ObjectPageSection>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('ObjectPage w/ lowercase title', () => {
    const wrapper = renderThemedComponent(
      <ObjectPageSection id={'1'} title="Test" titleUppercase={false}>
        This is my Text
      </ObjectPageSection>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Empty Id Prop', () => {
    // @ts-ignore
    const renderer = () => shallow(<ObjectPageSection.InnerComponent />);
    expect(renderer).toThrow();
  });
});
