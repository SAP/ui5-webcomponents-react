import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ShellBar } from './index';
import { ShellBarItem } from '../ShellBarItem';

storiesOf('UI5 Web Components | ShellBar', module).add('Generated default story', () => (
  <ShellBar
    logo={'sap-icon://home'}
    primaryTitle={'Primary Title'}
    secondaryTitle={'Secondary Title'}
    notificationCount="2"
    profile={'generatedString'}
    showNotifications={boolean('showNotifications', false)}
    showProductSwitch={boolean('showProductSwitch', false)}
    showCoPilot={boolean('showCoPilot', false)}
    onMenuItemPress={action('onMenuItemPress')}
    onCoPilotPress={action('onCoPilotPress')}
    onLogoPress={action('onLogoPress')}
    onNotificationsPress={action('onNotificationsPress')}
    onProfilePress={action('onProfilePress')}
    onProductSwitchPress={action('onProductSwitchPress')}
    searchField={null}
    icon={null}
  >
    <ShellBarItem src="sap-icon://add" text="Test" />
  </ShellBar>
));
