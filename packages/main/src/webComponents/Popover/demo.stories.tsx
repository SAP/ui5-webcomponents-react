import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from '../../lib/Button';
import { PlacementType } from '../../lib/PlacementType';
import { Popover } from '../../lib/Popover';
import { PopoverHorizontalAlign } from '../../lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '../../lib/PopoverVerticalAlign';

export default {
  title: 'UI5 Web Components | Popover',
  component: Popover
};

export const defaultStory = () => (
  <Popover
    initialFocus={'generatedString'}
    headerText={'generatedString'}
    placementType={select('placementType', PlacementType)}
    horizontalAlign={select('horizontalAlign', PopoverHorizontalAlign, null)}
    verticalAlign={select('verticalAlign', PopoverVerticalAlign, null)}
    modal={boolean('modal', false)}
    noArrow={boolean('noArrow', false)}
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
);

defaultStory.story = {
  name: 'Default'
};
