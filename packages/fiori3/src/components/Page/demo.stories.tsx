import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Page } from './';
import { Label } from '../../webComponents/Label';
import { PageBackgroundDesign } from '../../enums/PageBackgroundDesign';
import { Bar } from '../Bar';
import { Button } from '../../webComponents/Button';

const renderPage = () => (
  <div style={{ height: '400px', width: '100%' }}>
    <Page
      title="Page Demo"
      showFooter={boolean('showFooter', true)}
      showHeader={boolean('showHeader', true)}
      showBackButton={boolean('showBackButton', true)}
      backgroundDesign={select('backgroundDesign', PageBackgroundDesign, PageBackgroundDesign.Standard)}
      renderCustomFooter={() => <Bar renderContentRight={() => <Button>Button</Button>} />}
    >
      <Label>Page Content</Label>
    </Page>
  </div>
);

storiesOf('F4R Components | Page', module).add('Default', renderPage);
