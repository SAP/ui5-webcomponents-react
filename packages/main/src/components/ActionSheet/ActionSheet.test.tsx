import { fireEvent, render, screen } from '@shared/tests';
import { createCustomPropsTest } from '@shared/tests/utils';
import React, { createRef, RefObject } from 'react';
import { Button, Label, PopoverDomRef } from '../../webComponents';
import { ActionSheet } from './index';

describe('ActionSheet', () => {
  test('Render without Crashing', () => {
    const { container } = render(
      <ActionSheet className="myCustomClass">
        <Button>Accept</Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    );

    expect(container.parentElement).toMatchSnapshot();
  });

  test('Button Click handler', () => {
    const callback = jest.fn();
    render(
      <ActionSheet className="myCustomClass">
        <Button onClick={callback}>Accept</Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    );

    fireEvent.click(screen.getByText('Accept'));

    expect(callback).toBeCalled();
  });

  test('Test Legacy Ref', () => {
    let legacyRef = null;

    const ref = (el) => {
      legacyRef = el;
    };
    render(
      <ActionSheet ref={ref}>
        <Button>Accept</Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    );
    expect(legacyRef.tagName).toEqual('UI5-RESPONSIVE-POPOVER');
  });

  test('Ref object', () => {
    const ref: RefObject<PopoverDomRef> = createRef();
    render(<ActionSheet ref={ref} />);
    expect((ref.current as any).tagName).toEqual('UI5-RESPONSIVE-POPOVER');
  });

  test('does not crash with other component', () => {
    const { container } = render(
      <ActionSheet>
        <Label>I should not crash</Label>
      </ActionSheet>
    );
    expect(container.parentElement).toMatchSnapshot();
  });

  createCustomPropsTest(ActionSheet);
});
