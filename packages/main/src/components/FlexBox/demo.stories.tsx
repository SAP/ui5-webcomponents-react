import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const defaultStory = (props) => (
  <FlexBox
    justifyContent={props.justifyContent}
    alignItems={props.alignItems}
    direction={props.direction}
    wrap={props.wrap}
    displayInline={props.displayInLine}
  >
    <Label>Item 1</Label>
    <Label>Item 2</Label>
    <Label>Item 3</Label>
    <Label>Item 4</Label>
    <Label>Item 5</Label>
  </FlexBox>
);
defaultStory.storyName = 'Default';

export default {
  title: 'Components / FlexBox',
  component: FlexBox,
  argTypes: {
    ...createSelectArgTypes({ justifyContent: FlexBoxJustifyContent }),
    ...createSelectArgTypes({ alignItems: FlexBoxAlignItems }),
    ...createSelectArgTypes({ direction: FlexBoxDirection }),
    ...createSelectArgTypes({ wrap: FlexBoxWrap })
  },
  args: {
    justifyContent: FlexBoxJustifyContent.Start,
    alignItems: FlexBoxAlignItems.Stretch,
    direction: FlexBoxDirection.Row,
    wrap: FlexBoxWrap.NoWrap
  }
};
