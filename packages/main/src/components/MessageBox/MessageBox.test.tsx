import { fireEvent, render, screen } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import '@ui5/webcomponents-icons/dist/add';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { MessageBox } from '@ui5/webcomponents-react/dist/MessageBox';
import { MessageBoxActions } from '@ui5/webcomponents-react/dist/MessageBoxActions';
import { MessageBoxTypes } from '@ui5/webcomponents-react/dist/MessageBoxTypes';
import React from 'react';

describe('MessageBox', () => {
  test.each([
    [MessageBoxTypes.Confirm, MessageBoxActions.OK],
    [MessageBoxTypes.Success, MessageBoxActions.OK],
    [MessageBoxTypes.Warning, MessageBoxActions.OK],
    [MessageBoxTypes.Error, MessageBoxActions.Close],
    [MessageBoxTypes.Information, MessageBoxActions.OK],
    [MessageBoxTypes.Highlight, MessageBoxActions.OK]
  ])('%s', (type, buttonText) => {
    const callback = jest.fn();
    const { asFragment, unmount } = render(
      <MessageBox type={type} open onClose={callback}>
        My Message Box Content
      </MessageBox>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText(buttonText));

    expect(callback.mock.calls[0][0].detail.action).toEqual(buttonText);
    unmount();
  });

  test('Confirm - Cancel', () => {
    const callback = jest.fn();
    const { asFragment, unmount } = render(
      <MessageBox type={MessageBoxTypes.Confirm} open onClose={callback}>
        Confirm
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('Cancel'));

    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.Cancel);
    unmount();
  });

  test('Show', () => {
    const callback = jest.fn();
    const { asFragment, unmount } = render(
      <MessageBox open onClose={callback} titleText="Custom" actions={[MessageBoxActions.Yes, MessageBoxActions.No]}>
        Custom
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('Yes'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.Yes);

    fireEvent.click(screen.getByText('No'));
    expect(callback.mock.calls).toHaveLength(2);
    expect(callback.mock.calls[1][0].detail.action).toEqual(MessageBoxActions.No);
    unmount();
  });

  test('Success w/ custom title', () => {
    const callback = jest.fn();
    const { asFragment, unmount } = render(
      <MessageBox
        type={MessageBoxTypes.Success}
        open
        onClose={callback}
        titleText="Custom Success"
        icon={<Icon name="add" />}
      >
        Custom Success
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getAllByText('Custom Success')).toHaveLength(2);

    fireEvent.click(screen.getByText('OK'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.OK);
    unmount();
  });

  test('Not open', () => {
    const callback = jest.fn();
    const { asFragment, unmount } = render(
      <MessageBox type={MessageBoxTypes.Success} open={false} onClose={callback} titleText="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  test('No Title', () => {
    const callback = jest.fn();
    const { asFragment, unmount } = render(
      <MessageBox open onClose={callback}>
        No Title
      </MessageBox>
    );

    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByText('Confirmation')).toBeInTheDocument();
    unmount();
  });

  test('Custom Action Text', async () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <MessageBox type={MessageBoxTypes.Confirm} actions={[MessageBoxActions.OK, 'My Custom Action']} onClose={onClose}>
        My Message Box Content
      </MessageBox>
    );

    expect(asFragment()).toMatchSnapshot();

    const textOK = screen.getByText(MessageBoxActions.OK);
    expect(textOK).toBeInTheDocument();
    let customAction = screen.getByText('My Custom Action');
    expect(customAction).toBeInTheDocument();

    fireEvent.click(textOK);
    fireEvent.click(customAction);

    expect(onClose.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.OK);
    expect(onClose.mock.calls[1][0].detail.action).toEqual('My Custom Action');
    unmount();
  });

  test("Don't crash on unknown type", () => {
    const callback = jest.fn();
    const { asFragment, unmount } = render(
      <MessageBox open onClose={callback} type="FOO_BAR">
        Unknown Type!
      </MessageBox>
    );

    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  createPassThroughPropsTest(MessageBox);
});
