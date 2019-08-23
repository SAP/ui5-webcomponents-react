import { getEventFromCallback, mountThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { spy } from 'sinon';
import { MessageBox } from '../../lib/MessageBox';
import { MessageBoxActions } from '../../lib/MessageBoxActions';
import { MessageBoxTypes } from '../../lib/MessageBoxTypes';

describe('MessageBox', () => {
  test('Confirm - OK', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.CONFIRM} visible onClose={callback}>
        Confirm - OK
      </MessageBox>,
      {}
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper
      .find('ui5-button')
      .first()
      .instance() as any;

    component.fireEvent('click');
    expect(getEventFromCallback(callback).getParameter('action')).toEqual(MessageBoxActions.OK);
  });

  test('Confirm - Cancel', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.CONFIRM} visible onClose={callback}>
        Confirm - Cancel
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper
      .find('ui5-button')
      .last()
      .instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).getParameter('action')).toEqual(MessageBoxActions.CANCEL);
  });

  test('Success', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.SUCCESS} visible onClose={callback}>
        Success
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper
      .find('ui5-button')
      .first()
      .instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).getParameter('action')).toEqual(MessageBoxActions.OK);
  });

  test('Warning', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.WARNING} visible onClose={callback}>
        Warning
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper
      .find('ui5-button')
      .first()
      .instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).getParameter('action')).toEqual(MessageBoxActions.OK);
  });

  test('Error', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.ERROR} visible onClose={callback}>
        Error
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper
      .find('ui5-button')
      .first()
      .instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).getParameter('action')).toEqual(MessageBoxActions.CLOSE);
  });

  test('Information', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.INFORMATION} visible onClose={callback}>
        Information
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper
      .find('ui5-button')
      .first()
      .instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).getParameter('action')).toEqual(MessageBoxActions.OK);
  });

  test('Show', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox visible onClose={callback} title="Custom" actions={[MessageBoxActions.YES, MessageBoxActions.NO]}>
        Custom
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    let component = wrapper
      .find('ui5-button')
      .first()
      .instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).getParameter('action')).toEqual(MessageBoxActions.YES);

    component = wrapper
      .find('ui5-button')
      .last()
      .instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback, 1).getParameter('action')).toEqual(MessageBoxActions.NO);
  });

  test('Success w/ custom title', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.SUCCESS} visible onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper
      .find('ui5-button')
      .first()
      .instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).getParameter('action')).toEqual(MessageBoxActions.OK);
  });

  test('Not visible', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.SUCCESS} visible={false} onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('No Title', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox visible onClose={callback}>
        No Title
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });
});
