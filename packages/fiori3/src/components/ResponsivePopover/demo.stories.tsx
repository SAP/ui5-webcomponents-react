import { Button } from '../../lib/Button';
import { PlacementType } from '../../lib/PlacementType';
import { PopoverHorizontalAlign } from '../../lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '../../lib/PopoverVerticalAlign';
import { ResponsivePopover } from '../../lib/ResponsivePopover';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('Components | ResponsivePopover', module).add('Default', () => (
  <ResponsivePopover
    initialFocus={'generatedString'}
    hideHeader={boolean('hideHeader', false)}
    headerText={'generatedString'}
    placementType={select('placementType', PlacementType)}
    horizontalAlign={select('horizontalAlign', PopoverHorizontalAlign, null)}
    verticalAlign={select('verticalAlign', PopoverVerticalAlign, null)}
    modal={boolean('modal', false)}
    hideArrow={boolean('hideArrow', false)}
    open={boolean('open', false)}
    onBeforeOpen={null}
    onAfterOpen={null}
    onBeforeClose={null}
    onAfterClose={null}
    header={<div>Test</div>}
    footer={
      <div>
        <Button>My Fancy Footer Button</Button>
      </div>
    }
    openBy={<Button>Open ResponsivePopover</Button>}
  >
    <div>Content</div>
  </ResponsivePopover>
));
