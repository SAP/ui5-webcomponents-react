import React from 'react';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { OverflowToolbar } from '../../lib/OverflowToolbar';
import { ToolbarAlignment } from '../../lib/ToolbarAlignment';
import { ToolbarDesign } from '../../lib/ToolbarDesign';
import { Button } from '../../lib/Button';
import { Label } from '../../lib/Label';
import { Switch } from '../../lib/Switch';

const renderOverflowToolbar = () => (
  <OverflowToolbar
    align={select('align', ToolbarAlignment, ToolbarAlignment.Start)}
    toolbarDesign={select('design', ToolbarDesign, ToolbarDesign.ContentBar)}
    overflow={true}
  >
    <Label style={{ minWidth: '20px' }}>Label</Label>
    <Button>Button1</Button>
    <Button>Btn2</Button>
    <Button>3</Button>
    <Button>4</Button>
    <Button>5</Button>
    <Switch />
  </OverflowToolbar>
);

storiesOf('Components | Overflow Toolbar', module).add('Overflow Toolbar', renderOverflowToolbar);
