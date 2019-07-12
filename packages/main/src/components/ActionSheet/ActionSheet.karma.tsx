import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React, { createRef, RefObject } from 'react';
import { Ui5PopoverDomRef } from '../../interfaces/Ui5PopoverDomRef';
import { ActionSheet } from '../../lib/ActionSheet';
import { Button } from '../../lib/Button';

use(matchSnapshot);

describe('ActionSheet', () => {
  it('Render without Crashing', () => {
    const button = <Button />;
    const wrapper = mountThemedComponent(<ActionSheet openBy={button} />);
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('Test Legacy Ref', () => {
    let legacyRef = null;

    const ref = (el) => {
      legacyRef = el;
    };
    const button = <Button />;
    mountThemedComponent(<ActionSheet ref={ref} openBy={button} />);
    expect(legacyRef.tagName).to.equal('UI5-POPOVER');
  });

  it('Ref object', () => {
    const ref: RefObject<Ui5PopoverDomRef> = createRef();
    const button = <Button />;
    mountThemedComponent(<ActionSheet ref={ref} openBy={button} />);
    expect((ref.current as any).tagName).to.equal('UI5-POPOVER');
  });

  // it('Click Handler', () => {
  //   // @ts-ignore
  //   const callback = sinon.spy();
  //   const wrapper = mountThemedComponent(
  //     // @ts-ignore
  //     <ActionSheet openBy={<Button />}>
  //       // @ts-ignore
  //       <Button onClick={callback}>Test</Button>
  //     </ActionSheet>
  //   );
  //   // (wrapper.find('Button').last().prop('onPress') as any)({target: {}});
  //   wrapper.find('div').first().simulate('click');
  //   wrapper.update();
  //   wrapper.find('Button').last().simulate('click');
  //   // (wrapper.find('Button').last().prop('onPress') as any)({target: {}});
  //   expect(callback.called).to.equal(true);
  // });
  //
  // it('Close by outside click', () => {
  //   const callback = sinon.spy();
  //   const wrapper = mountThemedComponent(
  //     // @ts-ignore
  //     <ActionSheet openBy={<Button>Test</Button>}>
  //       // @ts-ignore
  //       <Button onClick={callback}>Test</Button>
  //     </ActionSheet>
  //   );
  //   wrapper
  //     .find('Button')
  //     .first()
  //     .simulate('click');
  //   wrapper.update();
  //   // @ts-ignore
  //   const component = wrapper.find('ActionSheet').instance();
  //   // @ts-ignore
  //   expect(component.state.open).to.equal(true);
  //
  //   // @ts-ignore
  //   component.onPopoverClosed();
  //   wrapper.update();
  //   // @ts-ignore
  //   expect(component.state.open).to.equal(false);
  // });
});
