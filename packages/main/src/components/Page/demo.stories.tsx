import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Page } from '@ui5/webcomponents-react/lib/Page';
import { PageBackgroundDesign } from '@ui5/webcomponents-react/lib/PageBackgroundDesign';
import React from 'react';

export const renderPage = () => (
  <div style={{ height: '400px', width: '100%' }}>
    <Page
      title={text('title', 'Page Demo')}
      showFooter={boolean('showFooter', true)}
      showHeader={boolean('showHeader', true)}
      showBackButton={boolean('showBackButton', true)}
      backgroundDesign={select('backgroundDesign', PageBackgroundDesign, PageBackgroundDesign.Standard)}
      renderCustomFooter={() => <Bar renderContentRight={() => <Button>Button</Button>} />}
      onNavButtonPress={action('onNavButtonPress')}
    >
      <Label>Page Content</Label>
    </Page>
  </div>
);
renderPage.story = {
  name: 'Default'
};

export default {
  title: 'Components / Page',
  component: Page
};
