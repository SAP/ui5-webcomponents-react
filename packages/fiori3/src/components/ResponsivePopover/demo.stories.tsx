import React from 'react';
import { storiesOf } from '@storybook/react';
import { PlacementType } from '@fiori-for-react/core/enums/PlacementType';
import { PopoverHorizontalAlign } from '@fiori-for-react/core/enums/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@fiori-for-react/core/enums/PopoverVerticalAlign';
import { boolean, select } from '@storybook/addon-knobs';
import { ResponsivePopover } from './index';
import { Button } from '../../webComponents/Button';

storiesOf('F4R Components | ResponsivePopover', module).add('Default', () => (
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
