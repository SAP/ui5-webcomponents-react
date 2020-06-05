import { createPassThroughPropsTest, getEventFromCallback } from '@shared/tests/utils';
import { render, screen, fireEvent } from '@tests/index';
import { mount } from 'enzyme';
import { MessageBox } from '@ui5/webcomponents-react/lib/MessageBox';
import { MessageBoxActions } from '@ui5/webcomponents-react/lib/MessageBoxActions';
import { MessageBoxTypes } from '@ui5/webcomponents-react/lib/MessageBoxTypes';
import React from 'react';
import { spy } from 'sinon';

describe('MessageBox', () => {
  test('Confirm - OK', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox type={MessageBoxTypes.CONFIRM} open onClose={callback}>
        Confirm - OK
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper.find('ui5-button').first().instance() as any;

    component.click();
    expect(getEventFromCallback(callback).detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Confirm - Cancel', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox type={MessageBoxTypes.CONFIRM} open onClose={callback}>
        Confirm - Cancel
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper.find('ui5-button').last().instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).detail.action).toEqual(MessageBoxActions.CANCEL);
  });

  test('Success', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox type={MessageBoxTypes.SUCCESS} open onClose={callback}>
        Success
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper.find('ui5-button').first().instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Warning', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox type={MessageBoxTypes.WARNING} open onClose={callback}>
        Warning
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper.find('ui5-button').first().instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Error', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox type={MessageBoxTypes.ERROR} open onClose={callback}>
        Error
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper.find('ui5-button').first().instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).detail.action).toEqual(MessageBoxActions.CLOSE);
  });

  test('Information', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox type={MessageBoxTypes.INFORMATION} open onClose={callback}>
        Information
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper.find('ui5-button').first().instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Show', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox open onClose={callback} title="Custom" actions={[MessageBoxActions.YES, MessageBoxActions.NO]}>
        Custom
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    let component = wrapper.find('ui5-button').first().instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).detail.action).toEqual(MessageBoxActions.YES);

    component = wrapper.find('ui5-button').last().instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback, 1).detail.action).toEqual(MessageBoxActions.NO);
  });

  test('Success w/ custom title', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox type={MessageBoxTypes.SUCCESS} open onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();

    const component = wrapper.find('ui5-button').first().instance() as any;
    component.fireEvent('click');
    expect(getEventFromCallback(callback).detail.action).toEqual(MessageBoxActions.OK);
  });

  test('Not open', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox type={MessageBoxTypes.SUCCESS} open={false} onClose={callback} title="Custom Success">
        Custom Success
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('No Title', () => {
    const callback = spy();
    const wrapper = mount(
      <MessageBox open onClose={callback}>
        No Title
      </MessageBox>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Custom Action Text', async () => {
    const onClose = jest.fn();
    render(
      <MessageBox type={MessageBoxTypes.CONFIRM} actions={[MessageBoxActions.OK, 'My Custom Action']} onClose={onClose}>
        My Message Box Content
      </MessageBox>
    );

    const textOK = screen.getByText(MessageBoxActions.OK);
    expect(textOK).toBeInTheDocument();
    let customAction = screen.getByText('My Custom Action');
    expect(customAction).toBeInTheDocument();

    fireEvent.click(textOK);
    fireEvent.click(customAction);

    expect(onClose.mock.calls[0][0].detail.action).toEqual(MessageBoxActions.OK);
    expect(onClose.mock.calls[1][0].detail.action).toEqual('My Custom Action');
  });

  createPassThroughPropsTest(MessageBox);
});
