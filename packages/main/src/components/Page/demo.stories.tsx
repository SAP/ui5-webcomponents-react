import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Page } from '@ui5/webcomponents-react/lib/Page';
import { PageBackgroundDesign } from '@ui5/webcomponents-react/lib/PageBackgroundDesign';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const renderPage = (props) => (
  <div style={{ height: '400px', width: '100%' }}>
    <Page
      title={props.title}
      showFooter={props.showFooter}
      showHeader={props.showHeader}
      showBackButton={props.showBackButton}
      backgroundDesign={props.backgroundDesign}
      customFooter={<Bar contentRight={<Button>Button</Button>} />}
      customHeader={null}
      onNavButtonPress={props.onNavButtonPress}
    >
      <Label>Page Content</Label>
    </Page>
  </div>
);
renderPage.storyName = 'Default';

export default {
  title: 'Components / Page',
  component: Page,
  argTypes: {
    ...createSelectArgTypes({ backgroundDesign: PageBackgroundDesign }),
    customHeader: {
      type: null
    },
    customFooter: {
      type: null
    },
    ref: {
      type: null
    }
  },
  args: {
    title: 'Page Demo',
    showFooter: true,
    showHeader: true,
    showBackButton: true,
    backgroundDesign: PageBackgroundDesign.Standard
  }
};
