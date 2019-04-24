import React from 'react';
import { spy } from 'sinon';
import { expect, use } from 'chai';
import { MessageBox, MessageBoxActions, MessageBoxTypes } from './index';
import { getEventFromCallback } from '@shared/tests/utils';
import { mountThemedComponent } from '@shared/tests/utils';
import { matchSnapshot } from 'chai-karma-snapshot';

use(matchSnapshot);

describe('MessageBox', () => {
  // let appRoot: HTMLElement;
  //
  // before(() => {
  //   appRoot = document.createElement("div");
  //   document.body.appendChild(appRoot);
  // });
  //
  // after(() => {
  //   document.body.removeChild(appRoot);
  // });

  it('Confirm - OK', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.CONFIRM} visible onClose={callback}>
        Confirm - OK
      </MessageBox>,
      {}
    );
    expect(wrapper.debug()).to.matchSnapshot();

    (wrapper
      .find('Button')
      .first()
      .prop('onPress') as any)({ target: {} });
    expect(getEventFromCallback(callback).getParameter('action')).to.equal(MessageBoxActions.OK);
  });

  it('Confirm - Cancel', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.CONFIRM} visible onClose={callback}>
        Confirm - Cancel
      </MessageBox>
    );
    expect(wrapper.debug()).to.matchSnapshot();

    (wrapper
      .find('Button')
      .last()
      .prop('onPress') as any)({ target: {} });
    expect(getEventFromCallback(callback).getParameter('action')).to.equal(MessageBoxActions.CANCEL);
  });

  it('Success', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.SUCCESS} visible onClose={callback}>
        Success
      </MessageBox>
    );
    expect(wrapper.debug()).to.matchSnapshot();

    (wrapper
      .find('Button')
      .first()
      .prop('onPress') as any)({ target: {} });
    expect(getEventFromCallback(callback).getParameter('action')).to.equal(MessageBoxActions.OK);
  });

  it('Warning', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.WARNING} visible onClose={callback}>
        Warning
      </MessageBox>
    );
    expect(wrapper.debug()).to.matchSnapshot();

    (wrapper
      .find('Button')
      .first()
      .prop('onPress') as any)({ target: {} });
    expect(getEventFromCallback(callback).getParameter('action')).to.equal(MessageBoxActions.OK);
  });

  it('Error', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.ERROR} visible onClose={callback}>
        Error
      </MessageBox>
    );
    expect(wrapper.debug()).to.matchSnapshot();

    (wrapper
      .find('Button')
      .first()
      .prop('onPress') as any)({ target: {} });
    expect(getEventFromCallback(callback).getParameter('action')).to.equal(MessageBoxActions.CLOSE);
  });

  it('Information', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.INFORMATION} visible onClose={callback}>
        Information
      </MessageBox>
    );
    expect(wrapper.debug()).to.matchSnapshot();

    (wrapper
      .find('Button')
      .first()
      .prop('onPress') as any)({ target: {} });
    expect(getEventFromCallback(callback).getParameter('action')).to.equal(MessageBoxActions.OK);
  });

  it('Show', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox visible onClose={callback} title="Custom" actions={[MessageBoxActions.YES, MessageBoxActions.NO]}>
        Custom
      </MessageBox>
    );
    expect(wrapper.debug()).to.matchSnapshot();

    (wrapper
      .find('Button')
      .first()
      .prop('onPress') as any)({ target: {} });
    expect(getEventFromCallback(callback).getParameter('action')).to.equal(MessageBoxActions.YES);

    (wrapper
      .find('Button')
      .last()
      .prop('onPress') as any)({ target: {} });
    expect(getEventFromCallback(callback, 1).getParameter('action')).to.equal(MessageBoxActions.NO);
  });

  it('Success w/ custom title', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.SUCCESS} visible onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(wrapper.debug()).to.matchSnapshot();

    (wrapper
      .find('Button')
      .first()
      .prop('onPress') as any)({ target: {} });
    expect(getEventFromCallback(callback).getParameter('action')).to.equal(MessageBoxActions.OK);
  });

  it('Not visible', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.SUCCESS} visible={false} onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });

  it('No Title', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox visible onClose={callback}>
        No Title
      </MessageBox>
    );
    expect(wrapper.debug()).to.matchSnapshot();
  });
});
