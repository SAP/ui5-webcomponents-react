import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';
import React from 'react';
import image from '../../components/ObjectPage/DemoImage.png';

export default {
  title: 'UI5 Web Components / ShellBar',
  component: ShellBar,
  parameters: {
    subcomponents: { ShellBarItem }
  }
};

export const generatedDefaultStory = () => (
  <ShellBar
    logo={text('logo', '')}
    notificationCount={text('notificationCount', '10')}
    primaryTitle={text('primaryTitle', 'Shell Bar')}
    secondaryTitle={text('secondaryTitle', 'Fiori 3 Shell Bar')}
    showCoPilot={boolean('showCoPilot', true)}
    showNotifications={boolean('showNotifications', true)}
    showProductSwitch={boolean('showProductSwitch', true)}
    menuItems={null}
    profile={<Avatar image={image} />}
    searchField={null}
    startButton={null}
    onCoPilotClick={action('onCoPilotClick')}
    onLogoClick={action('onLogoClick')}
    onMenuItemClick={action('onMenuItemClick')}
    onNotificationsClick={action('onNotificationsClick')}
    onProductSwitchClick={action('onProductSwitchClick')}
    onProfileClick={action('onProfileClick')}
  >
    <ShellBarItem text={'ShellBarItem'} icon={'add'} count={'2'} />
  </ShellBar>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
