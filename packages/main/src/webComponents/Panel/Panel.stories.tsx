import { boolean, select, text } from '@storybook/addon-knobs';
import { Panel } from '@ui5/webcomponents-react/lib/Panel';
import { PanelAccessibleRoles } from '@ui5/webcomponents-react/lib/PanelAccessibleRoles';
import React from 'react';

export default {
  title: 'UI5 Web Components / Panel',
  component: Panel
};

export const generatedDefaultStory = () => (
  <Panel
    accessibleRole={select('accessibleRole', PanelAccessibleRoles, PanelAccessibleRoles['Form'])}
    collapsed={boolean('collapsed', false)}
    fixed={boolean('fixed', false)}
    headerText={text('headerText', 'Panel Header Text')}
    header={null}
  >
    Some Content
  </Panel>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
