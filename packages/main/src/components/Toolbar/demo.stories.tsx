import React from 'react';
import { ToolbarSeparator } from '../ToolbarSeparator';
import { ToolbarSpacer } from '../ToolbarSpacer';
import { Toolbar } from './index';
import { Button } from '../../webComponents/Button';
import { text } from '@storybook/addon-knobs';

export const renderStory = () => {
  return (
    <Toolbar>
      <ToolbarSpacer />
      <Button>Item1</Button>
      <Button>Item2</Button>
      {/*<ToolbarSpacer />*/}
      <Button>Item3</Button>
      <Button>Item4</Button>
      <ToolbarSeparator />
      <Button>Item5</Button>
      {/*<ToolbarSpacer />*/}
      <Button>Item6</Button>
      {/*<ToolbarSpacer />*/}
      <Button>Item7</Button>
      {/*<ToolbarSpacer />*/}
      <Button>Item8</Button>
      <Button>Item9</Button>
      <Button>Item10</Button>
      {/*<ToolbarSpacer />*/}
      <Button>Item11</Button>
      <Button>Item12</Button>
    </Toolbar>
  );
};

renderStory.story = {
  name: 'Default'
};

export default {
  title: 'Components | Toolbar',
  component: Toolbar
};
