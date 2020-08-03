import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';
import { ResponsivePopover } from '@ui5/webcomponents-react/lib/ResponsivePopover';
import React, { useCallback, useRef } from 'react';

export default {
  title: 'UI5 Web Components / ResponsivePopover',
  component: ResponsivePopover,
  argTypes: {
    ...createSelectArgTypes({
      horizontalAlign: PopoverHorizontalAlign,
      placementType: PlacementType,
      verticalAlign: PopoverVerticalAlign
    }),
    ref: {
      type: null
    },
    children: {
      type: null
    },
    header: {
      type: null
    },
    footer: {
      type: null
    }
  },
  args: {
    allowTargetOverlap: true,
    headerText: 'Responsive Popover Header',
    horizontalAlign: PopoverHorizontalAlign.Center,
    placementType: PlacementType.Right,
    verticalAlign: PopoverVerticalAlign.Center
  }
};

export const generatedDefaultStory = (props) => {
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
        allowTargetOverlap={props.allowTargetOverlap}
        headerText={props.headerText}
        horizontalAlign={props.horizontalAlign}
        initialFocus={props.initialFocus}
        modal={props.modal}
        noArrow={props.noArrow}
        placementType={props.placementType}
        verticalAlign={props.verticalAlign}
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
        onAfterClose={props.onAfterClose}
        onAfterOpen={props.onAfterOpen}
        onBeforeClose={props.onBeforeClose}
        onBeforeOpen={props.onBeforeOpen}
      >
        Some Content
      </ResponsivePopover>
    </>
  );
};

generatedDefaultStory.storyName = 'Generated default story';
