import { boolean, select, text } from '@storybook/addon-knobs/';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { FlexBox } from '../../lib/FlexBox';
import { FlexBoxAlignItems } from '../../lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '../../lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '../../lib/FlexBoxJustifyContent';
import { FlexBoxWrap } from '../../lib/FlexBoxWrap';
import { Label } from '../../lib/Label';

storiesOf('Components | FlexBox', module).add('Default', () => (
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
));
