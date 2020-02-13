import React from 'react';
import { ToolbarSpacer } from '../ToolbarSpacer';
import { Toolbar } from './index';
import { Button } from '../../webComponents/Button';
import { text } from '@storybook/addon-knobs';

export const renderStory = () => {
  return (
    <Toolbar width={text('width', '50%')}>
      <Button>Item1</Button>
      <Button>Item2</Button>
      <Button>Item3</Button>
      <ToolbarSpacer />
      <Button>Item4</Button>
      <Button>Item5</Button>
      <Button>Item6</Button>
      {/*<Button>Item7</Button>*/}
      {/*<Button>Item8</Button>*/}
      {/*<Button>Item9</Button>*/}
      {/*<Button>Item10</Button>*/}
      {/*<Button>Item11</Button>*/}
      {/*<Button>Item12</Button>*/}
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
