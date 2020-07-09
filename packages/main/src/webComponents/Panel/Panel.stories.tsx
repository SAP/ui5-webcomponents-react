import { Panel } from '@ui5/webcomponents-react/lib/Panel';
import { PanelAccessibleRoles } from '@ui5/webcomponents-react/lib/PanelAccessibleRoles';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / Panel',
  component: Panel,
  argTypes: {
    ...createSelectArgTypes({ accessibleRole: PanelAccessibleRoles, headerLevel: TitleLevel }),
    children: {
      type: null
    },
    ref: {
      type: null
    },
    header: {
      type: null
    }
  },
  args: {
    accessibleRole: PanelAccessibleRoles.Form,
    headerLevel: TitleLevel.H2,
    headerText: 'Panel Header Text'
  }
};

export const generatedDefaultStory = (props) => (
  <Panel
    accessibleRole={props.accessibleRole}
    collapsed={props.collapsed}
    fixed={props.fixed}
    headerText={props.headerText}
    header={null}
    headerLevel={props.headerLevel}
  >
    Some Content
  </Panel>
);

generatedDefaultStory.storyName = 'Generated default story';
