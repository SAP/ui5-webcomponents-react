import { render, fireEvent, screen } from '@shared/tests';
import {
  setCustomElementsScopingSuffix,
  setCustomElementsScopingRules
} from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import React from 'react';
import { Bar } from '../webComponents/Bar';
import { Button } from '../webComponents/Button';
import { Dialog } from '../webComponents/Dialog';

describe('withWebComponent', () => {
  test('Unmount Event Handlers correctly after prop update', () => {
    const callback = jest.fn();

    const { rerender, unmount } = render(<Button onClick={callback}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(callback).toHaveBeenCalledTimes(1);

    const newCallback = jest.fn();
    rerender(<Button onClick={newCallback}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(callback).toHaveBeenCalledTimes(1);
    expect(newCallback).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Click Me'));
    expect(newCallback).toHaveBeenCalledTimes(2);

    rerender(<Button>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(callback).toHaveBeenCalledTimes(1);
    expect(newCallback).toHaveBeenCalledTimes(2);

    unmount();
  });

  test('Slots accept both Fragment and regular nodes', () => {
    const callbackFooter1 = jest.fn();
    const callbackFooter2 = jest.fn();

    const { rerender } = render(
      <Dialog footer={<Button onClick={callbackFooter1}>Footer Button 1</Button>}>My Dialog Content</Dialog>
    );

    fireEvent.click(screen.getByText('Footer Button 1'));
    expect(callbackFooter1).toHaveBeenCalledTimes(1);

    rerender(
      <Dialog
        footer={
          <>
            <Button onClick={callbackFooter1}>Footer Button 1</Button>
            <Button onClick={callbackFooter2}>Footer Button 2</Button>
          </>
        }
      >
        My Dialog Content
      </Dialog>
    );

    fireEvent.click(screen.getByText('Footer Button 1'));
    expect(callbackFooter1).toHaveBeenCalledTimes(2);

    fireEvent.click(screen.getByText('Footer Button 2'));
    expect(callbackFooter2).toHaveBeenCalledTimes(1);
  });

  test('correct handling of boolean props', () => {
    const { rerender } = render(<Button disabled>Click Me</Button>);

    expect(screen.getByText('Click Me')).toHaveAttribute('disabled');

    rerender(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).not.toHaveAttribute('disabled');
  });

  test('conditional rendering', () => {
    const { asFragment } = render(
      <Bar
        startContent={
          <>
            {false && <span>I'm not here</span>}
            <span>I'm here!</span>
          </>
        }
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('destruct fragments in slots', () => {
    const { asFragment } = render(
      <Bar
        startContent={
          <>
            {false && <span>I'm not here</span>}
            <span>I'm here!</span>
            <>
              {false && <span>I'm not here</span>}
              <span>I'm here nested level 1!</span>
              <>
                {false && <span>I'm not here</span>}
                <span>I'm here nested level 2!</span>
                <>
                  <span>I'm the only child of a fragment in level 3!</span>
                </>
              </>
            </>
            <>
              <span>I'm the only child of a fragment in level 1!</span>
            </>
            <>{false && <span>I'm an empty fragment</span>}</>
            <>
              <span>I'm the only child of a fragment in level 1!</span>
              {[<span key="0">I'm in an array inside of a fragment!</span>, <span key="1">Me too!</span>]}
            </>
          </>
        }
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('scoping', () => {
    setCustomElementsScopingSuffix('ui5-wcr');
    const { asFragment, rerender } = render(<Button>Scoping Test</Button>);
    expect(asFragment()).toMatchSnapshot();

    // now exclude the button
    setCustomElementsScopingRules({ include: [/^ui5-/], exclude: [/^ui5-button/] });
    rerender(<Button>Scoping Test</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
