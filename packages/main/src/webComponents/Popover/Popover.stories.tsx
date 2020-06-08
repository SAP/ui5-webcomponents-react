import { Button } from '@ui5/webcomponents-react/lib/Button';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { Popover } from '@ui5/webcomponents-react/lib/Popover';
import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';
import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';
import React, { useCallback, useRef } from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / Popover',
  component: Popover,
  argTypes: {
    ...createSelectArgTypes({
      horizontalAlign: PopoverHorizontalAlign,
      placementType: PlacementType,
      verticalAlign: PopoverVerticalAlign
    })
  },
  args: {
    headerText: 'Popover Header Text',
    allowTargetOverlap: true,
    horizontalAlign: PopoverHorizontalAlign.Center,
    placementType: PlacementType.Right,
    verticalAlign: PopoverVerticalAlign.Center
  }
};

export const generatedDefaultStory = (props) => {
  const popoverRef = useRef();
  const onButtonClick = useCallback(
    (e) => {
      popoverRef.current.openBy(e.target);
    },
    [popoverRef]
  );

  return (
    <>
      <Button onClick={onButtonClick}>Open Popover</Button>
      <Popover
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
      </Popover>
    </>
  );
};

generatedDefaultStory.storyName = 'Generated default story';
