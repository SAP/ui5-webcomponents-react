import { mountThemedComponent } from '@shared/tests/utils';
import React, { createRef, RefObject } from 'react';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';
import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';
import { Button } from '@ui5/webcomponents-react/lib/Button';

describe('ActionSheet', () => {
  test('Render without Crashing', () => {
    const button = <Button />;
    const wrapper = mountThemedComponent(<ActionSheet openBy={button} />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Test Legacy Ref', () => {
    let legacyRef = null;

    const ref = (el) => {
      legacyRef = el;
    };
    const button = <Button />;
    mountThemedComponent(<ActionSheet ref={ref} openBy={button} />);
    expect(legacyRef.tagName).toEqual('UI5-POPOVER');
  });

  test('Ref object', () => {
    const ref: RefObject<Ui5PopoverDomRef> = createRef();
    const button = <Button />;
    mountThemedComponent(<ActionSheet ref={ref} openBy={button} />);
    expect((ref.current as any).tagName).toEqual('UI5-POPOVER');
  });
});
