import { boolean, select, text } from '@storybook/addon-knobs/';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';

export const defaultStory = () => (
  <FlexBox
    justifyContent={select('justifyContent', FlexBoxJustifyContent, FlexBoxJustifyContent.Start)}
    alignItems={select('alignItems', FlexBoxAlignItems, FlexBoxAlignItems.Stretch)}
    direction={select('direction', FlexBoxDirection, FlexBoxDirection.Row)}
    wrap={select('wrap', FlexBoxWrap, FlexBoxWrap.NoWrap)}
    height={text('height', 'auto')}
    width={text('width', '500px')}
    displayInline={boolean('displayInline', false)}
  >
    <Label>Item 1</Label>
    <Label>Item 2</Label>
    <Label>Item 3</Label>
    <Label>Item 4</Label>
    <Label>Item 5</Label>
  </FlexBox>
);
defaultStory.story = {
  name: 'Default'
};

export default {
  title: 'Components / FlexBox',
  component: FlexBox
};
