import { createPassThroughPropsTest } from '@shared/tests/utils';
import { fireEvent, render, screen } from '@shared/tests';
import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';
import { MessageBoxActions } from '@ui5/webcomponents-react/lib/MessageBoxActions';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import React from 'react';

describe('MessageBox', () => {
  test('Confirm - OK', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox type={MessageBoxTypes.CONFIRM} open onClose={callback}>
        Confirm
      </MessageBox>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('OK'));

    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Confirm - Cancel', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox type={MessageBoxTypes.CONFIRM} open onClose={callback}>
        Confirm
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('Cancel'));

    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.CANCEL);
  });

  test('Success', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox type={MessageBoxTypes.SUCCESS} open onClose={callback}>
        Success
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('OK'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Warning', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox type={MessageBoxTypes.WARNING} open onClose={callback}>
        Warning
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('OK'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Error', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox type={MessageBoxTypes.ERROR} open onClose={callback}>
        Error
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('Close'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.CLOSE);
  });

  test('Information', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox type={MessageBoxTypes.INFORMATION} open onClose={callback}>
        Information
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('OK'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Show', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox open onClose={callback} title="Custom" actions={[MessageBoxActions.YES, MessageBoxActions.NO]}>
        Custom
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('Yes'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.YES);

    fireEvent.click(screen.getByText('No'));
    expect(callback.mock.calls).toHaveLength(2);
    expect(callback.mock.calls[1][0].detail.action).toEqual(MessageBoxActions.NO);
  });

  test('Success w/ custom title', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox type={MessageBoxTypes.SUCCESS} open onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('OK'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Not open', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox type={MessageBoxTypes.SUCCESS} open={false} onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('No Title', () => {
    const callback = jest.fn();
    const { asFragment } = render(
      <MessageBox open onClose={callback}>
        No Title
      </MessageBox>
    );

    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByText('Confirmation')).toBeInTheDocument();
  });

  test('Custom Action Text', async () => {
    const onClose = jest.fn();
    const { asFragment } = render(
      <MessageBox type={MessageBoxTypes.CONFIRM} actions={[MessageBoxActions.OK, 'My Custom Action']} onClose={onClose}>
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
  });

  createPassThroughPropsTest(MessageBox);
});
