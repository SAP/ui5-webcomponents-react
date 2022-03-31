import { render, screen } from '@shared/tests';
import React from 'react';
import { Modals } from './index';
import { version } from 'react-dom/package.json';

describe('Modals', function () {
  if (version.startsWith('18')) {
    return;
  }
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  test('showDialog', () => {
    Modals.showDialog({
      children: 'Dialog Content',
      'data-testid': 'dialog'
    });

    jest.runOnlyPendingTimers();

    expect(screen.getByTestId('dialog')).toHaveAttribute('open', 'true');
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  test('showPopover', () => {
    render(<span id="opener" />);
    Modals.showPopover({
      opener: 'opener',
      children: 'Popover Content',
      'data-testid': 'popover'
    });

    jest.runOnlyPendingTimers();

    expect(screen.getByTestId('popover')).toHaveAttribute('open', 'true');
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
  });

  test('showResponsivePopover', () => {
    render(<span id="opener" />);
    Modals.showResponsivePopover({
      opener: 'opener',
      children: 'ResponsivePopover Content',
      'data-testid': 'responsivepopover'
    });

    jest.runOnlyPendingTimers();

    expect(screen.getByTestId('responsivepopover')).toHaveAttribute('open', 'true');
    expect(screen.getByText('ResponsivePopover Content')).toBeInTheDocument();
  });

  test('showMessageBox', async () => {
    Modals.showMessageBox({
      children: 'MessageBox Content',
      'data-testid': 'messagebox'
    });

    await screen.findByText('Confirmation');

    jest.runOnlyPendingTimers();

    expect(screen.getByTestId('messagebox')).toHaveAttribute('open', 'true');
    expect(screen.getByText('MessageBox Content')).toBeInTheDocument();
  });

  test('showToast', () => {
    Modals.showToast({
      children: 'Toast Content'
    });

    jest.runOnlyPendingTimers();

    expect(screen.getByText('Toast Content')).toBeInTheDocument();
  });
});
