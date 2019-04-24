import React from 'react';
import { Bar } from './index';
import { mountThemedComponent } from '@shared/tests/utils';

const createRenderLabel = (text) => () => {
  return <p>{text}</p>;
};

describe('Bar', () => {
  test('Has Fiori 3 padding', () => {
    const wrapper = mountThemedComponent(
      <Bar renderContentLeft={createRenderLabel('Test')} renderContentRight={createRenderLabel('Right')} />
    )
      .find('div')
      .at(1);
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).paddingLeft).toEqual('0.5rem');
  });
});
