import { renderThemedComponent, ThemedComponent } from '@shared/tests/utils';
import { shallow } from 'enzyme';
import React from 'react';
import { Page } from '../../lib/Page';


const renderPage = (props = {}) =>
  ThemedComponent(
    <div style={{ height: '100vh', width: '100vw' }}>
      <Page title="Page Demo" showFooter showHeader {...props}>
        Page Content
      </Page>
    </div>
  );

describe('Page', () => {
  test('Basic Page', () => {
    const wrapper = shallow(renderPage()).render();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Basic Page w/o back button', () => {
    const wrapper = shallow(renderPage({ showBackButton: false })).render();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Without footer and Header', () => {
    const wrapper = renderThemedComponent(
      <Page title="Page Demo" showFooter={false} showHeader={false}>
        Page Content
      </Page>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
