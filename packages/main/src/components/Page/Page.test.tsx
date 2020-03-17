import { createPassThroughPropsTest } from '@shared/tests/utils';
import { mount } from 'enzyme';
import { Page } from '@ui5/webcomponents-react/lib/Page';
import React from 'react';

describe('Page', () => {
  test('Basic Page', () => {
    const wrapper = mount(
      <div style={{ height: '100vh', width: '100vw' }}>
        <Page title="Page Demo" showFooter showHeader>
          Page Content
        </Page>
      </div>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Basic Page w/o back button', () => {
    const wrapper = mount(
      <div style={{ height: '100vh', width: '100vw' }}>
        <Page title="Page Demo" showFooter showHeader showBackButton={false}>
          Page Content
        </Page>
      </div>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  test('Without footer and Header', () => {
    const wrapper = mount(
      <Page title="Page Demo" showFooter={false} showHeader={false}>
        Page Content
      </Page>
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  createPassThroughPropsTest(Page);
});
