import { act, fireEvent, render, screen } from '@shared/tests';
import React from 'react';
import { DialogPropTypes, MessageBoxPropTypes, PopoverPropTypes, ResponsivePopoverPropTypes } from '../..';
import { Modals } from './index';

describe('Modals - static helpers', function () {
  test('showDialog', () => {
    render(null);
    const props: DialogPropTypes & { 'data-testid': string } = {
      children: 'Dialog Content',
      'data-testid': 'dialog'
    };
    act(() => {
      Modals.showDialog(props);
    });

    expect(screen.getByTestId('dialog')).toHaveAttribute('open', 'true');
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  test('showPopover', () => {
    render(<span id="opener" />);
    const props: PopoverPropTypes & { 'data-testid': string } = {
      opener: 'opener',
      children: 'Popover Content',
      'data-testid': 'popover'
    };
    act(() => {
      Modals.showPopover(props);
    });

    expect(screen.getByTestId('popover')).toHaveAttribute('open', 'true');
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });

  test('showResponsivePopover', () => {
    render(<span id="opener" />);
    const props: ResponsivePopoverPropTypes & { 'data-testid': string } = {
      opener: 'opener',
      children: 'ResponsivePopover Content',
      'data-testid': 'responsivepopover'
    };
    act(() => {
      Modals.showResponsivePopover(props);
    });

    expect(screen.getByTestId('responsivepopover')).toHaveAttribute('open', 'true');
    expect(screen.getByText('ResponsivePopover Content')).toBeInTheDocument();
  });

  test('showMessageBox', async () => {
    render(null);
    const props: MessageBoxPropTypes & { 'data-testid': string } = {
      children: 'MessageBox Content',
      'data-testid': 'messagebox'
    };
    act(() => {
      Modals.showMessageBox(props);
    });

    await screen.findByText('Confirmation');

    expect(screen.getByTestId('messagebox')).toHaveAttribute('open', 'true');
    expect(screen.getByText('MessageBox Content')).toBeInTheDocument();
  });

  test('showToast', () => {
    render(null);
    act(() => {
      Modals.showToast({
        children: 'Toast Content'
      });
    });

    expect(screen.getByText('Toast Content')).toBeInTheDocument();
  });
});

describe('Modals - hooks', function () {
  interface PropTypes {
    hookFn: any;
    modalProps: any;
  }

  const TestComponent = ({ hookFn, modalProps }: PropTypes) => {
    const hook = hookFn();

    return (
      <button
        onClick={() => {
          hook(modalProps);
        }}
      >
        Open Modal
      </button>
    );
  };

  test(Modals.useShowDialog.name, () => {
    render(
      <TestComponent
        hookFn={Modals.useShowDialog}
        modalProps={{ children: 'Dialog Content', 'data-testid': 'dialog' }}
      />
    );
    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByText('Dialog Content')).toBeVisible();
    expect(screen.getByTestId('dialog')).toHaveAttribute('open');
  });

  test(Modals.useShowPopover.name, () => {
    render(
      <>
        <span id="opener" />
        <TestComponent
          hookFn={Modals.useShowPopover}
          modalProps={{ children: 'Popover Content', opener: 'opener', 'data-testid': 'popover' }}
        />
      </>
    );
    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByText('Popover Content')).toBeVisible();
    expect(screen.getByTestId('popover')).toHaveAttribute('open');
  });

  test(Modals.useShowResponsivePopover.name, () => {
    render(
      <>
        <span id="opener" />
        <TestComponent
          hookFn={Modals.useShowResponsivePopover}
          modalProps={{ children: 'ResponsivePopover Content', opener: 'opener', 'data-testid': 'responsivepopover' }}
        />
      </>
    );
    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByText('ResponsivePopover Content')).toBeVisible();
    expect(screen.getByTestId('responsivepopover')).toHaveAttribute('open');
  });

  test(Modals.useShowMessageBox.name, () => {
    render(
      <TestComponent
        hookFn={Modals.useShowMessageBox}
        modalProps={{ children: 'MessageBox Content', 'data-testid': 'messagebox' }}
      />
    );
    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByText('MessageBox Content')).toBeVisible();
    expect(screen.getByTestId('messagebox')).toHaveAttribute('open');
  });

  test(Modals.useShowToast.name, () => {
    render(
      <TestComponent hookFn={Modals.useShowToast} modalProps={{ children: 'Toast Content', 'data-testid': 'toast' }} />
    );
    fireEvent.click(screen.getByText('Open Modal'));
    expect(screen.getByText('Toast Content')).toBeInTheDocument();
  });
});
