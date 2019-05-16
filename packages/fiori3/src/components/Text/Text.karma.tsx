import { Text } from '../../lib/Text';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';

use(matchSnapshot);

describe('Text', () => {
  let appRoot: HTMLElement;

  before(() => {
    appRoot = document.createElement('div');
    document.body.appendChild(appRoot);
  });

  after(() => {
    document.body.removeChild(appRoot);
  });

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
    const wrapper = mountThemedComponent(<Text width="300px">Test</Text>, {}, { attachTo: appRoot });
    // console.log(window.getComputedStyle(wrapper.getDOMNode()));

    // document.find('body').append(wrapper.getDOMNode());
    expect(window.getComputedStyle(wrapper.getDOMNode()).width).to.equal('300px');
  });
});
