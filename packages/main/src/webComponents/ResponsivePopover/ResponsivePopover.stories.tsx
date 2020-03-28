import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';
import { ResponsivePopover } from '@ui5/webcomponents-react/lib/ResponsivePopover';
import React from 'react';

export default {
  title: 'UI5 Web Components / ResponsivePopover',
  component: ResponsivePopover
};

export const generatedDefaultStory = () => (
  <ResponsivePopover
    allowTargetOverlap={boolean('allowTargetOverlap', true)}
    headerText={text('headerText', 'Responsive Popover Header')}
    horizontalAlign={select('horizontalAlign', PopoverHorizontalAlign, PopoverHorizontalAlign['Center'])}
    initialFocus={text('initialFocus', '')}
    modal={boolean('modal', true)}
    noArrow={boolean('noArrow', true)}
    placementType={select('placementType', PlacementType, PlacementType['Right'])}
    verticalAlign={select('verticalAlign', PopoverVerticalAlign, PopoverVerticalAlign['Center'])}
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
    header={null}
    onAfterClose={action('onAfterClose')}
    onAfterOpen={action('onAfterOpen')}
    onBeforeClose={action('onBeforeClose')}
    onBeforeOpen={action('onBeforeOpen')}
    openBy={<Button>Open Responsive Popover</Button>}
  >
    Some Content
  </ResponsivePopover>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
