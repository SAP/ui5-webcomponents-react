import { act, fireEvent, render, screen } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React, { createRef, forwardRef } from 'react';
import { ValueState } from '../../enums/ValueState';
import { MessageItem } from './MessageItem';
import { MessageView, MessageViewDomRef, MessageViewPropTypes } from './index';

const TestComponent = forwardRef<MessageViewDomRef, Omit<MessageViewPropTypes, 'children'>>((props, ref) => {
  return (
    <MessageView {...props} ref={ref}>
      <MessageItem titleText="Error" type={ValueState.Error}>
        Error
      </MessageItem>
      <MessageItem titleText="Warning" type={ValueState.Warning}>
        Warning
      </MessageItem>
      <MessageItem titleText="Success" type={ValueState.Success}>
        Success
      </MessageItem>
      <MessageItem titleText="Information" type={ValueState.Information}>
        Information
      </MessageItem>
      <MessageItem titleText="None" type={ValueState.None}>
        None
      </MessageItem>
    </MessageView>
  );
});

describe('MessageView', () => {
  it('renders list view', () => {
    const { asFragment } = render(<TestComponent />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders list view with groups', () => {
    const { asFragment } = render(<TestComponent groupItems />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('render no filter when only one message type is used', () => {
    render(
      <MessageView>
        <MessageItem titleText="Error" type={ValueState.Error}>
          Error
        </MessageItem>
      </MessageView>
    );

    expect(screen.queryAllByText('All')).toHaveLength(0);
  });

  it('navigate to details and back to list', () => {
    const ref = createRef<MessageViewDomRef>();
    render(<TestComponent ref={ref} />);

    fireEvent.click(screen.getByText('Error').parentElement.parentElement.parentElement);

    expect(screen.queryAllByText('Error')).toHaveLength(3); // list, details page header and children

    act(() => {
      ref.current.navigateBack();
    });

    expect(screen.queryAllByText('Error')).toHaveLength(1); // list
  });

  createCustomPropsTest(MessageView);
});
