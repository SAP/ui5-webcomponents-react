import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import React from 'react';

const createRenderLabel = (text) => () => {
  return <p>{text}</p>;
};

describe('Bar', () => {
  test('Renders with default Props', () => {
    expect(mount(<Bar />).render()).toMatchSnapshot();
  });

  test('Render all content', () => {
    const wrapper = mount(
      <Bar
        contentLeft={<div>Content Left</div>}
        contentMiddle={<div>Content Middle</div>}
        contentRight={<div>Content Right</div>}
      />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Render all content', () => {
    const text1 = 'Content Left';
    const text2 = 'Content Middle';
    const text3 = 'Content Right';

    const wrapper = mount(
      <Bar contentLeft={<div>{text1}</div>} contentMiddle={<div>{text2}</div>} contentRight={<div>{text3}</div>} />
    );
    expect(wrapper.text()).toContain(text1);
    expect(wrapper.text()).toContain(text2);
    expect(wrapper.text()).toContain(text3);
  });

  test('Has Fiori 3 padding', () => {
    const wrapper = mount(
      <Bar renderContentLeft={createRenderLabel('Test')} renderContentRight={createRenderLabel('Right')} />
    )
      .find('div')
      .at(1);
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).paddingLeft).toEqual('0.5rem');
  });

  createPassThroughPropsTest(Bar);
});
