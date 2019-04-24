import React from 'react';
import { Text } from './index';
import { expect, use } from 'chai';
import { mountThemedComponent } from '@shared/tests/utils';
import { matchSnapshot } from 'chai-karma-snapshot';

use(matchSnapshot);

describe('Text', () => {
  it('Render Basic Text', () => {
    const wrapper = mountThemedComponent(<Text>FioriText</Text>);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('No Wrap', () => {
    const wrapper = mountThemedComponent(<Text wrapping={false}>Lorem Ipsum dolor sit amed</Text>);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Render Whitespace', () => {
    const wrapper = mountThemedComponent(<Text renderWhitespace>Lorem Ipsum dolor sit amed</Text>);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Renders correct Text', () => {
    const el = 'My Text';
    const wrapper = mountThemedComponent(<Text>{el}</Text>);
    expect(wrapper.text()).to.equal(el);
  });

  it('custom width', () => {
    const wrapper = mountThemedComponent(<Text width="300px">Test</Text>);
    // console.log(window.getComputedStyle(wrapper.getDOMNode()));

    // document.find('body').append(wrapper.getDOMNode());
    expect(window.getComputedStyle(wrapper.getDOMNode()).width).to.equal('300px');
  });
});
