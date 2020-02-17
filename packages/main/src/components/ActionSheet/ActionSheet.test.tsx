import { createPassThroughPropsTest, mountThemedComponent } from '@shared/tests/utils';
import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import React, { createRef, RefObject } from 'react';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';
import sinon from 'sinon';

describe('ActionSheet', () => {
  test('Render without Crashing', () => {
    const button = <Button />;
    const wrapper = mountThemedComponent(
      <ActionSheet openBy={button} className="myCustomClass">
        <Button icon={'add'}>Accept</Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Button Click handler', () => {
    const callback = sinon.spy();
    const button = <Button />;
    const wrapper = mountThemedComponent(
      <ActionSheet openBy={button} className="myCustomClass">
        <Button icon={'add'} onClick={callback}>
          Accept
        </Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    );
    wrapper
      .find('ui5-button')
      .first()
      .instance()
      // @ts-ignore
      .fireEvent('click');
    wrapper.update();

    wrapper
      .find('ui5-popover ui5-button')
      .first()
      .instance()
      // @ts-ignore
      .fireEvent('click');
    expect(callback.called).toBe(true);
  });

  test('Test Legacy Ref', () => {
    let legacyRef = null;

    const ref = (el) => {
      legacyRef = el;
    };
    const button = <Button />;
    mountThemedComponent(
      <ActionSheet ref={ref} openBy={button}>
        <Button icon={'add'}>Accept</Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    );
    expect(legacyRef.tagName).toEqual('UI5-POPOVER');
  });

  test('Ref object', () => {
    const ref: RefObject<Ui5PopoverDomRef> = createRef();
    const button = <Button />;
    mountThemedComponent(<ActionSheet ref={ref} openBy={button} />);
    expect((ref.current as any).tagName).toEqual('UI5-POPOVER');
  });

  test('does not crash with other component', () => {
    const button = <Button />;
    const wrapper = mountThemedComponent(
      <ActionSheet openBy={button}>
        <Label>I should not crash</Label>
      </ActionSheet>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(ActionSheet);
});
