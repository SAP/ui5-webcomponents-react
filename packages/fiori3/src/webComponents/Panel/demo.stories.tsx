import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BackgroundDesign } from '@fiori-for-react/core/enums/BackgroundDesign';
import { PanelAccessibleRoles } from '@fiori-for-react/core/enums/PanelAccessibleRoles';
import { boolean, select } from '@storybook/addon-knobs';
import { Panel } from './index';

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
