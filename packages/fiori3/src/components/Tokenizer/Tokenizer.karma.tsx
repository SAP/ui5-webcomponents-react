import { Icon } from '@lib/Icon';
import { Tokenizer } from '@lib/Tokenizer';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React, { cloneElement } from 'react';
import * as sinon from 'sinon';
import { Token } from '../Token';

use(matchSnapshot);

const items = [
  {
    key: '1',
    text: 'Test 1'
  },
  {
    key: '2',
    text: 'Test 2'
  },
  {
    key: '3',
    text: 'Test 3'
  }
];

const tokenChangeCallback = (e) => {
  e.getParameter('removeTokensById')(items);
};

describe('Tokenizer', () => {
  it('Render without crashing', () => {
    const wrapper = mountThemedComponent(<Tokenizer items={items} />);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('No Items', () => {
    const wrapper = mountThemedComponent(<Tokenizer />);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Read Only + fix width', () => {
    const wrapper = mountThemedComponent(<Tokenizer items={items} width="300px" editable={false} />);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Passing renderToken + press delete token', () => {
    const callback = sinon.spy();

    const wrapper = mountThemedComponent(
      <Tokenizer
        items={items}
        onTokenChange={tokenChangeCallback}
        renderToken={(item) => (
          // @ts-ignore
          <Token onTokenDelete={callback} key={item.key} id={item.key as string}>
            {item.text as string}
          </Token>
        )}
      />
    );
    wrapper
      .find(Token)
      .first()
      .find(Icon)
      .simulate('click');

    wrapper.update();
    expect(callback.called).to.equal(true);
  });

  it('Trigger componentDidUpdate', () => {
    const wrapper = mountThemedComponent(<Tokenizer items={items} />);
    wrapper.setProps({
      children: cloneElement(wrapper.props().children, {
        items: [
          {
            key: '1',
            text: 'Test 1'
          }
        ]
      })
    });
    // @ts-ignore
    expect(wrapper.find('Tokenizer').instance().props.items.length).to.equal(1);
  });

  it('drag and drop', () => {
    const wrapper = mountThemedComponent(<Tokenizer items={items} />);
    const point = {
      pageX: 300,
      pageY: 350
    };
    const tokenizer = wrapper.find(Tokenizer);
    tokenizer.simulate('mousedown', {
      touches: [point]
    });
    tokenizer.simulate('mousedown', point);

    tokenizer.simulate('mousemove', {
      buttons: 1
    });

    tokenizer.simulate('mousemove', {
      originalEvent: {
        which: 1
      }
    });

    tokenizer.simulate('mousemove', {
      pressure: true
    });

    wrapper.update();
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
