import { fireEvent, render, screen } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React, { createRef, RefObject } from 'react';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';

describe('ActionSheet', () => {
  test('Render without Crashing', () => {
    const ref = createRef();
    const wrapper = render(
      <ActionSheet className="myCustomClass" ref={ref}>
        <Button>Accept</Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    );

    expect(wrapper.container.parentElement).toMatchSnapshot();
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
    const ref: RefObject<Ui5PopoverDomRef> = createRef();
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

  createPassThroughPropsTest(ActionSheet);
});
