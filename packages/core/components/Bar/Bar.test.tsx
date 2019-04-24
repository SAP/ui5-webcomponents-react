// tslint:disable jsx-no-lambda
import React from 'react';
import { Bar } from './index';
import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';

describe('Bar', () => {
  test('Renders with default Props', () => {
    expect(renderThemedComponent(<Bar />)).toMatchSnapshot();
  });

  test('Render all content', () => {
    const wrapper = renderThemedComponent(
      <Bar
        renderContentLeft={() => <div>Content Left</div>}
        renderContentMiddle={() => <div>Content Middle</div>}
        renderContentRight={() => <div>Content Right</div>}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Render all content', () => {
    const text1 = 'Content Left';
    const text2 = 'Content Middle';
    const text3 = 'Content Right';

    const wrapper = mountThemedComponent(
      <Bar
        renderContentLeft={() => <div>{text1}</div>}
        renderContentMiddle={() => <div>{text2}</div>}
        renderContentRight={() => <div>{text3}</div>}
      />
    );
    expect(wrapper.text()).toContain(text1);
    expect(wrapper.text()).toContain(text2);
    expect(wrapper.text()).toContain(text3);
  });
});
