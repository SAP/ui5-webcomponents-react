import React from 'react';
import { storiesOf } from '@storybook/react';
import { PlacementType } from '@fiori-for-react/core/enums/PlacementType';
import { PopoverHorizontalAlign } from '@fiori-for-react/core/enums/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@fiori-for-react/core/enums/PopoverVerticalAlign';
import { boolean, select } from '@storybook/addon-knobs';
import { Popover } from './index';
import { Button } from '../Button';

storiesOf('UI5 Web Components | Popover', module).add('Default', () => (
  <Popover
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
    content={<div>Test</div>}
    header={<div>Test</div>}
    footer={
      <div>
        <Button>Button</Button>
      </div>
    }
    openBy={<Button>Open Popover</Button>}
  >
    <div>Header</div>
    <div>Content</div>
    <div>Footer</div>
  </Popover>
));
