import React from 'react';
import { shallow } from 'enzyme';
import { ObjectPageSection } from './index';
import { renderThemedComponent } from '@shared/tests/utils';
import { matchSnapshot } from 'chai-karma-snapshot';
import { expect, use } from 'chai';
use(matchSnapshot);

describe('ObjectPageSection', () => {
  it('Renders with children', () => {
    const wrapper = renderThemedComponent(
      <ObjectPageSection id={'1'} title="Test" titleUppercase>
        This is my Text
      </ObjectPageSection>
    );
    expect(wrapper.html()).to.matchSnapshot();
  });

  it('ObjectPage w/ lowercase title', () => {
    const wrapper = renderThemedComponent(
      <ObjectPageSection id={'1'} title="Test" titleUppercase={false}>
        This is my Text
      </ObjectPageSection>
    );
    expect(wrapper.html()).to.matchSnapshot();
  });

  it('Empty Id Prop', () => {
    // @ts-ignore
    const renderer = () => shallow(<ObjectPageSection.InnerComponent />);
    expect(renderer).to.throw();
  });
});
