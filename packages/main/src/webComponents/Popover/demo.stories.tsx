import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';
import React from 'react';

export default {
  title: 'UI5 Web Components / Popover',
  component: Popover
};

export const defaultStory = () => (
  <Popover
    initialFocus={'generatedString'}
    headerText={text('headerText', 'Test Popover')}
    placementType={select('placementType', PlacementType, PlacementType.Bottom)}
    horizontalAlign={select('horizontalAlign', PopoverHorizontalAlign, PopoverHorizontalAlign.Center)}
    verticalAlign={select('verticalAlign', PopoverVerticalAlign, PopoverVerticalAlign.Center)}
    modal={boolean('modal', false)}
    noArrow={boolean('noArrow', false)}
    open={boolean('open', false)}
    onBeforeOpen={action('onBeforeOpen')}
    onAfterOpen={action('onAfterOpen')}
    onBeforeClose={action('onBeforeClose')}
    onAfterClose={action('onAfterClose')}
    content={<div>Test</div>}
    footer={
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: 'calc(100% - 1rem)',
          height: '2.5rem'
        }}
      >
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
