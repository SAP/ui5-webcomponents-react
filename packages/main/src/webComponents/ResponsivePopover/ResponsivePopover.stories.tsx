import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';
import { ResponsivePopover } from '@ui5/webcomponents-react/lib/ResponsivePopover';
import React, { useCallback, useRef } from 'react';

export default {
  title: 'UI5 Web Components / ResponsivePopover',
  component: ResponsivePopover
};

export const generatedDefaultStory = () => {
  const popoverRef = useRef();
  const onButtonClick = useCallback(
    (e) => {
      popoverRef.current.open(e.target);
    },
    [popoverRef]
  );

  return (
    <>
      <Button onClick={onButtonClick}>Open Responsive Popover</Button>
      <ResponsivePopover
        ref={popoverRef}
        allowTargetOverlap={boolean('allowTargetOverlap', true)}
        headerText={text('headerText', 'Responsive Popover Header')}
        horizontalAlign={select('horizontalAlign', PopoverHorizontalAlign, PopoverHorizontalAlign.Center)}
        initialFocus={text('initialFocus', '')}
        modal={boolean('modal', false)}
        noArrow={boolean('noArrow', false)}
        placementType={select('placementType', PlacementType, PlacementType.Right)}
        verticalAlign={select('verticalAlign', PopoverVerticalAlign, PopoverVerticalAlign.Center)}
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
      >
        Some Content
      </ResponsivePopover>
    </>
  );
};

generatedDefaultStory.story = {
  name: 'Generated default story'
};
