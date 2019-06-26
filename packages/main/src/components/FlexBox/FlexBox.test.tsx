import { mountThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { FlexBox } from '../../lib/FlexBox';
import { FlexBoxJustifyContent } from '../../lib/FlexBoxJustifyContent';

describe('FlexBox', () => {
  test('JustifyContent: End', () => {
    const wrapper = mountThemedComponent(
      <FlexBox justifyContent={FlexBoxJustifyContent.End}>
        <span>Test 1</span>
      </FlexBox>
    );
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).justifyContent).toEqual('flex-end');
  });

  test('Height and Width', () => {
    const wrapper = mountThemedComponent(
      <FlexBox height="1337px" width="42px">
        <span>Test 1</span>
      </FlexBox>
    );
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).height).toEqual('1337px');
    expect(window.getComputedStyle(node).width).toEqual('42px');
  });

  test('Display: Inline', () => {
    const wrapper = mountThemedComponent(
      <FlexBox displayInline>
        <span>Test 1</span>
      </FlexBox>
    );
    const node = wrapper.getDOMNode();
    expect(window.getComputedStyle(node).display).toEqual('inline-flex');
  });
});
