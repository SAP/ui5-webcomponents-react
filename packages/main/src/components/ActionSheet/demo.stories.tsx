import { select } from '@storybook/addon-knobs';
import { ActionSheet } from '@ui5/webcomponents-react/lib/ActionSheet';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import React, { useCallback, useRef } from 'react';

export default {
  title: 'Components / ActionSheet',
  component: ActionSheet
};

export const defaultStory = () => {
  const actionSheetRef = useRef();
  const onButtonClick = useCallback(
    (e) => {
      actionSheetRef.current.open(e.target);
    },
    [actionSheetRef]
  );
  return (
    <>
      <Button onClick={onButtonClick}>Open ActionSheet</Button>
      <ActionSheet ref={actionSheetRef} placementType={select('placementType', PlacementType, PlacementType.Bottom)}>
        <Button icon="add">Accept</Button>
        <Button>Reject</Button>
        <Button>This is my super long text!</Button>
      </ActionSheet>
    </>
  );
};

defaultStory.storyName = 'Default';
