import { render } from '@shared/tests';
import { createPassThroughPropsTest } from '@shared/tests/utils';
import { Page } from '@ui5/webcomponents-react/lib/Page';
import React from 'react';

describe('Page', () => {
  test('Basic Page', () => {
    const { asFragment } = render(
      <div style={{ height: '100vh', width: '100vw' }}>
        <Page title="Page Demo" showFooter showHeader>
          Page Content
        </Page>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Basic Page w/o back button', () => {
    const { asFragment } = render(
      <div style={{ height: '100vh', width: '100vw' }}>
        <Page title="Page Demo" showFooter showHeader showBackButton={false}>
          Page Content
        </Page>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Without footer and Header', () => {
    const { asFragment } = render(
      <Page title="Page Demo" showFooter={false} showHeader={false}>
        Page Content
      </Page>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  createPassThroughPropsTest(Page);
});
