import { fireEvent, render, screen } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import '@ui5/webcomponents-icons/dist/add';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';
import { MessageBoxActions } from '@ui5/webcomponents-react/lib/MessageBoxActions';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import React from 'react';

const mockActionIds = (element) => {
  element.querySelectorAll('ui5-button').forEach((item, index) => {
    item.id = `${index}`;
  });
};

describe('MessageBox', () => {
  test.each([
    [MessageBoxTypes.CONFIRM, MessageBoxActions.OK],
    [MessageBoxTypes.SUCCESS, MessageBoxActions.OK],
    [MessageBoxTypes.WARNING, MessageBoxActions.OK],
    [MessageBoxTypes.ERROR, MessageBoxActions.CLOSE],
    [MessageBoxTypes.INFORMATION, MessageBoxActions.OK],
    [MessageBoxTypes.HIGHLIGHT, MessageBoxActions.OK]
  ])('%s', (type, buttonText) => {
    const callback = jest.fn();
    const { asFragment, unmount, container } = render(
      <MessageBox type={type} open onClose={callback}>
        My Message Box Content
      </MessageBox>
    );
    mockActionIds(container);
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText(buttonText));

    expect(callback.mock.calls[0][0].detail.action).toEqual(buttonText);
    unmount();
  });

  test('Confirm - Cancel', () => {
    const callback = jest.fn();
    const { asFragment, unmount, container } = render(
      <MessageBox type={MessageBoxTypes.CONFIRM} open onClose={callback}>
        Confirm
      </MessageBox>
    );
    mockActionIds(container);
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('Cancel'));

    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.CANCEL);
    unmount();
  });

  test('Show', () => {
    const callback = jest.fn();
    const { asFragment, unmount, container } = render(
      <MessageBox open onClose={callback} title="Custom" actions={[MessageBoxActions.YES, MessageBoxActions.NO]}>
        Custom
      </MessageBox>
    );
    mockActionIds(container);
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('Yes'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.YES);

    fireEvent.click(screen.getByText('No'));
    expect(callback.mock.calls).toHaveLength(2);
    expect(callback.mock.calls[1][0].detail.action).toEqual(MessageBoxActions.NO);
    unmount();
  });

  test('Success w/ custom title', () => {
    const callback = jest.fn();
    const { asFragment, unmount, container } = render(
      <MessageBox
        type={MessageBoxTypes.SUCCESS}
        open
        onClose={callback}
        title="Custom Success"
        icon={<Icon name="add" />}
      >
        Custom Success
      </MessageBox>
    );
    mockActionIds(container);
    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByText('OK'));
    expect(callback.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.OK);
    unmount();
  });

  test('Not open', () => {
    const callback = jest.fn();
    const { asFragment, unmount, container } = render(
      <MessageBox type={MessageBoxTypes.SUCCESS} open={false} onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    mockActionIds(container);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  test('No Title', () => {
    const callback = jest.fn();
    const { asFragment, unmount, container } = render(
      <MessageBox open onClose={callback}>
        No Title
      </MessageBox>
    );
    mockActionIds(container);
    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByText('Confirmation')).toBeInTheDocument();
    unmount();
  });

  test('Custom Action Text', async () => {
    const onClose = jest.fn();
    const { asFragment, unmount, container } = render(
      <MessageBox type={MessageBoxTypes.CONFIRM} actions={[MessageBoxActions.OK, 'My Custom Action']} onClose={onClose}>
        My Message Box Content
      </MessageBox>
    );
    mockActionIds(container);
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
    const { asFragment, unmount, container } = render(
      <MessageBox open onClose={callback} type="FOO_BAR">
        Unknown Type!
      </MessageBox>
    );
    mockActionIds(container);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  test('Unique ids for actions', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    const callback = jest.fn();
    const { getAllByText } = render(
      <>
        {new Array(200).fill('howdy').map((_) => (
          <MessageBox onClose={callback} open type={MessageBoxTypes.CONFIRM}>
            Content
          </MessageBox>
        ))}
      </>
    );
    const okBtns = getAllByText('OK');
    const okBtnsIds = okBtns.map((btn) => btn.id);
    expect(new Set(okBtnsIds).size).toEqual(okBtnsIds.length);
    const cancelBtns = getAllByText('Cancel');
    const cancelBtnsIds = cancelBtns.map((btn) => btn.id);
    expect(new Set(cancelBtnsIds).size).toEqual(cancelBtnsIds.length);
  });

  test('initial focus', () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const callback = jest.fn();
    const { getByText, getByTestId } = render(
      <MessageBox
        onClose={callback}
        open
        type={MessageBoxTypes.CONFIRM}
        initialFocus={MessageBoxActions.CANCEL}
        data-testid="Dialog"
      >
        Content
      </MessageBox>
    );
    const dialogInitialFocus = getByTestId('Dialog').getAttribute('initial-focus');
    const cancelBtnId = getByText('Cancel').getAttribute('id');

    expect(dialogInitialFocus).toEqual(cancelBtnId);
  });
  test('display custom header', () => {
    const { getByText, queryByText } = render(
      <MessageBox open header={<div>Custom Header</div>}>
        Content
      </MessageBox>
    );
    expect(queryByText('Confirmation')).toBeNull();
    expect(getByText('Custom Header')).toHaveTextContent('Custom Header');
  });
});
