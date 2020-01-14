import { createPassThroughPropsTest, getEventFromCallback, mountThemedComponent } from '@shared/tests/utils';
import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';
import { MessageBoxActions } from '@ui5/webcomponents-react/lib/MessageBoxActions';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import React from 'react';
import { spy } from 'sinon';

describe('MessageBox', () => {
  test('Confirm - OK', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.CONFIRM} open onClose={callback}>
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
      <MessageBox type={MessageBoxTypes.CONFIRM} open onClose={callback}>
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
      <MessageBox type={MessageBoxTypes.SUCCESS} open onClose={callback}>
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
      <MessageBox type={MessageBoxTypes.WARNING} open onClose={callback}>
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
      <MessageBox type={MessageBoxTypes.ERROR} open onClose={callback}>
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
      <MessageBox type={MessageBoxTypes.INFORMATION} open onClose={callback}>
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
      <MessageBox open onClose={callback} title="Custom" actions={[MessageBoxActions.YES, MessageBoxActions.NO]}>
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
      <MessageBox type={MessageBoxTypes.SUCCESS} open onClose={callback} title="Custom Success">
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

  test('Not open', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox type={MessageBoxTypes.SUCCESS} open={false} onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('No Title', () => {
    const callback = spy();
    const wrapper = mountThemedComponent(
      <MessageBox open onClose={callback}>
        No Title
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(MessageBox);
});
