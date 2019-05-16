import { BackgroundDesign } from '../../lib/BackgroundDesign';
import { Panel } from '../../lib/Panel';
import { PanelAccessibleRoles } from '../../lib/PanelAccessibleRoles';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('UI5 Web Components | Panel', module).add('Generated default story', () => (
  <Panel
    headerText={'generatedString'}
    fixed={boolean('fixed', false)}
    collapsed={boolean('collapsed', false)}
    backgroundDesign={select('backgroundDesign', BackgroundDesign, null)}
    accessibleRole={select('accessibleRole', PanelAccessibleRoles, null)}
    onToggle={action('onToggle')}
    header={null}
  >
    null
  </Panel>
));
