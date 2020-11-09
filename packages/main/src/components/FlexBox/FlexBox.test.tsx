import { createPassThroughPropsTest } from '@shared/tests/utils';
import { render, screen } from '@shared/tests';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import * as React from 'react';

describe('FlexBox', () => {
  test('JustifyContent: End', () => {
    render(
      <FlexBox justifyContent={FlexBoxJustifyContent.End} data-testid="flexbox">
        <span>Test 1</span>
      </FlexBox>
    );

    expect(window.getComputedStyle(screen.getByTestId('flexbox')).justifyContent).toEqual('flex-end');
  });

  test('Height and Width', () => {
    render(
      <FlexBox style={{ height: '1337px', width: '42px' }} data-testid="flexbox">
        <span>Test 1</span>
      </FlexBox>
    );
    expect(window.getComputedStyle(screen.getByTestId('flexbox')).height).toEqual('1337px');
    expect(window.getComputedStyle(screen.getByTestId('flexbox')).width).toEqual('42px');
  });

  test('Display: Inline', () => {
    render(
      <FlexBox displayInline data-testid="flexbox">
        <span>Test 1</span>
      </FlexBox>
    );
    expect(window.getComputedStyle(screen.getByTestId('flexbox')).display).toEqual('inline-flex');
  });

  test('with Custom Class Names and Style', () => {
    const { asFragment } = render(
      <FlexBox className="testClass" style={{ backgroundColor: '#000' }}>
        <span>Test 1</span>
      </FlexBox>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(FlexBox);
});
