import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Label } from '../../lib/Label';
import { Panel } from '../../lib/Panel';
import { PanelAccessibleRoles } from '../../lib/PanelAccessibleRoles';

storiesOf('UI5 Web Components | Panel', module).add('Generated default story', () => (
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
));
