import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import { ToolbarSeparator } from '@ui5/webcomponents-react/lib/ToolbarSeparator';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { Toolbar } from './index';

export const renderStory = () => {
  return (
    <Toolbar
      active={boolean('active', false)}
      toolbarStyle={select<ToolbarStyle>('toolbarStyle', ToolbarStyle, ToolbarStyle.Standard)}
      design={select<ToolbarDesign>('design', ToolbarDesign, ToolbarDesign.Auto)}
      onToolbarClick={action('onToolbarClick')}
    >
      <Text>Item1</Text>
      <Button
        onClick={(e) => {
          //use e.stopPropagation() to prevent event bubbling
          e.stopPropagation();
        }}
      >
        Item2
      </Button>
      <Button>Item3</Button>
      <Button>Item4</Button>
      <ToolbarSeparator />
      <Button>Item5</Button>
      <Text>Item6</Text>
      <Button>Item8</Button>
      <Button>Item9</Button>
      <Button>Item10</Button>
      <Button>Item11</Button>
      <Button>Item12</Button>
    </Toolbar>
  );
};

renderStory.story = {
  name: 'Default'
};

export const withSpacerAndSeparator = () => {
  return (
    <Toolbar
      active={boolean('active', false)}
      toolbarStyle={select<ToolbarStyle>('toolbarStyle', ToolbarStyle, ToolbarStyle.Standard)}
      design={select<ToolbarDesign>('design', ToolbarDesign, ToolbarDesign.Auto)}
      onToolbarClick={action('onToolbarClick')}
    >
      <ToolbarSpacer />
      <Text>Item1</Text>
      <Button>Item2</Button>
      <ToolbarSpacer />
      <Button>Item3</Button>
      <Button>Item4</Button>
      <Button>Item5</Button>
      <Text>Item6</Text>
      <Button>Item8</Button>
      <ToolbarSeparator />
      <Button>Item9</Button>
      <Button>Item10</Button>
      <ToolbarSeparator />
      <Button>Item11</Button>
      <Button>Item12</Button>
    </Toolbar>
  );
};

withSpacerAndSeparator.story = {
  name: 'with spacer and separator'
};

export default {
  title: 'Components | Toolbar',
  component: Toolbar
};
