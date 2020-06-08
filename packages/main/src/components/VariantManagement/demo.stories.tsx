import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { VariantManagement } from '@ui5/webcomponents-react/lib/VariantManagement';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

const variantItems = [
  { label: 'Variant 1', key: '1' },
  { label: 'Variant 2', key: '2' }
];
export const renderStory = (props) => (
  <VariantManagement
    style={{ width: '300px', height: 'auto' }}
    closeOnItemSelect={props.closeOnItemSelect}
    selectedKey={props.selectedKey}
    variantItems={variantItems}
    onSelect={props.onSelect}
    placement={props.placement}
    level={props.level}
    disabled={props.disabled}
  />
);
renderStory.storyName = 'Default';

export default {
  title: 'Components / VariantManagement',
  component: VariantManagement,
  argTypes: {
    ...createSelectArgTypes({ placement: PlacementType, level: TitleLevel })
  },
  args: {
    closeOnItemSelect: true,
    selectedKey: '2',
    placement: PlacementType.Bottom,
    level: TitleLevel.H4
  }
};
