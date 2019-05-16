import { Button } from '../../lib/Button';
import { mountThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import React from 'react';
import { ActionSheet } from './index';

use(matchSnapshot);

describe('ActionSheet', () => {
  it('Render without Crashing', () => {
    const button = <Button />;
    const wrapper = mountThemedComponent(<ActionSheet openBy={button} />);
    expect(wrapper.debug()).to.matchSnapshot();
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
