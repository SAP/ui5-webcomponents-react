import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { Bar } from '../../lib/Bar';
import { Button } from '../../lib/Button';
import { Label } from '../../lib/Label';
import { Page } from '../../lib/Page';
import { PageBackgroundDesign } from '../../lib/PageBackgroundDesign';

const renderPage = () => (
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

storiesOf('Components | Page', module).add('Default', renderPage);
