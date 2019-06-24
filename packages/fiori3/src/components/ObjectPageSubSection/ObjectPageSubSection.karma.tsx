import { renderThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { shallow } from 'enzyme';
import React from 'react';
import { ObjectPageSubSection } from '../../lib/ObjectPageSubSection';

use(matchSnapshot);

describe('ObjectPageSubSection', () => {
  it('Render without Crashing', () => {
    // @ts-ignore
    const wrapper = renderThemedComponent(<ObjectPageSubSection id="test" />);
    expect(wrapper.html()).to.matchSnapshot();
  });

  it('No ID should throw', () => {
    // @ts-ignore
    const renderer = () => shallow(<ObjectPageSubSection.InnerComponent title="test" classes={{}} />);
    expect(renderer).to.throw();
  });
});
