import { fireEvent, render, screen } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { MessageView } from '@ui5/webcomponents-react/dist/MessageView';
import { Message } from '@ui5/webcomponents-react/dist/Message';
import { MessageViewDomRef } from '@ui5/webcomponents-react/dist/interfaces/MessageViewDomRef';
import React, { createRef, forwardRef } from 'react';
import { ValueState } from '../../enums/ValueState';

const TestComponent = forwardRef((props, ref) => {
  return (
    <MessageView {...props} ref={ref}>
      <Message titleText="Error" type={ValueState.Error}>
        Error
      </Message>
      <Message titleText="Warning" type={ValueState.Warning}>
        Warning
      </Message>
      <Message titleText="Success" type={ValueState.Success}>
        Success
      </Message>
      <Message titleText="Information" type={ValueState.Information}>
        Information
      </Message>
      <Message titleText="None" type={ValueState.None}>
        None
      </Message>
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
        <Message titleText="Error" type={ValueState.Error}>
          Error
        </Message>
      </MessageView>
    );

    expect(screen.queryAllByText('All')).toHaveLength(0);
  });

  it('navigate to details and back to list', () => {
    const ref = createRef<MessageViewDomRef>();
    render(<TestComponent ref={ref} />);

    fireEvent.click(screen.getByText('Error').parentElement.parentElement.parentElement);

    expect(screen.queryAllByText('Error')).toHaveLength(3); // list, details page header and children

    ref.current.navigateBack();

    expect(screen.queryAllByText('Error')).toHaveLength(1); // list
  });

  createPassThroughPropsTest(MessageView);
});
