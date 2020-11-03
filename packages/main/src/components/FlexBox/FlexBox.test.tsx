import { createPassThroughPropsTest } from '@shared/tests/utils';
import { render } from '@shared/tests';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import * as React from 'react';

describe('FlexBox', () => {
  test('JustifyContent: End', () => {
    const { asFragment } = render(
      <FlexBox justifyContent={FlexBoxJustifyContent.End}>
        <span>Test 1</span>
      </FlexBox>
    );
    const node = asFragment.getDOMNode();
    expect(window.getComputedStyle(node).justifyContent).toEqual('flex-end');
  });

  test('Height and Width', () => {
    const { asFragment } = render(
      <FlexBox style={{ height: '1337px', width: '42px' }}>
        <span>Test 1</span>
      </FlexBox>
    );
    const node = asFragment.getDOMNode();
    expect(window.getComputedStyle(node).height).toEqual('1337px');
    expect(window.getComputedStyle(node).width).toEqual('42px');
  });

  test('Display: Inline', () => {
    const { asFragment } = render(
      <FlexBox displayInline>
        <span>Test 1</span>
      </FlexBox>
    );
    const node = asFragment.getDOMNode();
    expect(window.getComputedStyle(node).display).toEqual('inline-flex');
  });

  test('with Custom Class Names and Style', () => {
    const { asFragment } = render(
      <FlexBox className="testClass" style={{ backgroundColor: '#000' }}>
        <span>Test 1</span>
      </FlexBox>
    );
    expect(asFragment.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(FlexBox);
});
