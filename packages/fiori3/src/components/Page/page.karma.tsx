import { Page } from '@lib/Page';
import { renderThemedComponent, ThemedComponent } from '@shared/tests/utils';
import { expect, use } from 'chai';
import { matchSnapshot } from 'chai-karma-snapshot';
import { shallow } from 'enzyme';
import React from 'react';

use(matchSnapshot);

const renderPage = (props = {}) =>
  ThemedComponent(
    <div style={{ height: '100vh', width: '100vw' }}>
      <Page title="Page Demo" showFooter showHeader {...props}>
        Page Content
      </Page>
    </div>
  );

describe('Page', () => {
  it('Basic Page', () => {
    const wrapper = shallow(renderPage()).render();
    expect(wrapper.html()).to.matchSnapshot();
  });

  it('Basic Page w/o back button', () => {
    const wrapper = shallow(renderPage({ showBackButton: false })).render();
    expect(wrapper.html()).to.matchSnapshot();
  });

  it('Without footer and Header', () => {
    const wrapper = renderThemedComponent(
      <Page title="Page Demo" showFooter={false} showHeader={false}>
        Page Content
      </Page>
    );
    expect(wrapper.html()).to.matchSnapshot();
  });
});
