import { ActionSheet } from '../../lib/ActionSheet';
import { Button } from '../../lib/Button';
import { PlacementType } from '../../lib/PlacementType';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { propTablesExclude } from '../../../../docs/.storybook/config';

storiesOf('F4R Components | ActionSheet', module)
  .addParameters({
    info: {
      propTablesExclude: [...propTablesExclude, Button]
    }
  })
  .add('Default', () => (
    <ActionSheet
      openBy={<Button>Open ActionSheet</Button>}
      placement={select('placement', [PlacementType.Top, PlacementType.Bottom], PlacementType.Top)}
    >
      <Button key={1}>Accept</Button>
      <Button key={2}>Reject</Button>
      <Button key={3}>This is my super long text!</Button>
    </ActionSheet>
  ));
