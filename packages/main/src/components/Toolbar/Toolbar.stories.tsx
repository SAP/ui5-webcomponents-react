import React from 'react';
import { Text } from '@ui5/webcomponents-react/lib/Text';
import { ToolbarDesign } from '@ui5/webcomponents-react/lib/ToolbarDesign';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ToolbarStyle } from '@ui5/webcomponents-react/lib/ToolbarStyle';
import { ToolbarSeparator } from '@ui5/webcomponents-react/lib/ToolbarSeparator';
import { ToolbarSpacer } from '@ui5/webcomponents-react/lib/ToolbarSpacer';
import { Toolbar } from '@ui5/webcomponents-react/lib/Toolbar';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const renderStory = (props) => {
  return (
    <Toolbar
      active={props.active}
      toolbarStyle={props.toolbarStyle}
      design={props.design}
      onToolbarClick={props.onToolbarClick}
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

renderStory.storyName = 'Default';

export const withSpacerAndSeparator = (props) => {
  return (
    <Toolbar
      active={props.active}
      toolbarStyle={props.toolbarStyle}
      design={props.design}
      onToolbarClick={props.onToolbarClick}
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

withSpacerAndSeparator.storyName = 'with spacer and separator';

export default {
  title: 'Components / Toolbar',
  component: Toolbar,
  argTypes: {
    ...createSelectArgTypes({ toolbarStyle: ToolbarStyle, design: ToolbarDesign })
  },
  args: {
    toolbarStyle: ToolbarStyle.Standard,
    design: ToolbarDesign.Auto
  }
};
