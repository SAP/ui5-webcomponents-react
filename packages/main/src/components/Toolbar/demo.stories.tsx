import React from 'react';
import { Input, Notification, Switch } from '../..';
import { Toolbar } from './index';
import { Button } from '../../webComponents/Button';
import { text } from '@storybook/addon-knobs';

export const renderStory = () => {
  return (
    <Toolbar>
      <Button>Item1</Button>
      <Button>Item2</Button>
      <div style={{ width: '200px' }} />
      <Button>Item3</Button>
      <Button>Item4</Button>
      {/*<Button>Item5</Button>*/}
      {/*<Input>ASD</Input>*/}
      {/*<Button>Item6</Button>*/}
      {/*<Button>Item7</Button>*/}
      {/*<Button style={{ width: '300px' }}>LongItem8</Button>*/}
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
