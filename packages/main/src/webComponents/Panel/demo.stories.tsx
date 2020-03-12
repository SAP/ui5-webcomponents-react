import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { Panel } from '@ui5/webcomponents-react/lib/Panel';
import { PanelAccessibleRoles } from '@ui5/webcomponents-react/lib/PanelAccessibleRoles';
import React from 'react';

export default {
  title: 'UI5 Web Components / Panel',
  component: Panel
};

export const generatedDefaultStory = () => (
  <Panel
    headerText={text('headerText', 'Panel Header')}
    fixed={boolean('fixed', false)}
    collapsed={boolean('collapsed', false)}
    accessibleRole={select('accessibleRole', PanelAccessibleRoles, null)}
    onToggle={action('onToggle')}
    header={null}
  >
    <Label>My Panel Content</Label>
  </Panel>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
