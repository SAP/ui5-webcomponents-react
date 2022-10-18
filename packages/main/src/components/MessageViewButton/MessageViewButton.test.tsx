import { render, screen } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React from 'react';
import { MessageViewButton, ValueState } from '../..';

describe('MessageViewButton', () => {
  test.each([
    [ValueState.Error, 'error'],
    [ValueState.Success, 'sys-enter-2'],
    [ValueState.Warning, 'alert'],
    [ValueState.Information, 'information'],
    [ValueState.None, 'information'],
    [undefined, 'error']
  ])(`type '%s`, (type, expectedIcon) => {
    const { getByTestId } = render(<MessageViewButton type={type} data-testid={type ?? 'undefined'} />);
    expect(getByTestId(type ?? 'undefined')).toHaveAttribute('icon', expectedIcon);
  });
  test('counter', () => {
    const { getByTestId, rerender } = render(<MessageViewButton data-testid="btn" />);
    expect(getByTestId('btn')).toBeEmptyDOMElement();
    rerender(<MessageViewButton data-testid="btn" counter={1} />);
    expect(getByTestId('btn')).toBeEmptyDOMElement();
    rerender(<MessageViewButton data-testid="btn" counter={2} />);
    expect(getByTestId('btn')).toHaveTextContent('2');
  });
  createCustomPropsTest(MessageViewButton);
});
