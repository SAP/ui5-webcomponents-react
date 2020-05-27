import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { ShellBarItem } from '@ui5/webcomponents-react/lib/ShellBarItem';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
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
    menuItems={
      <>
        <StandardListItem data-key="1">Menu Item 1</StandardListItem>
        <StandardListItem data-key="2">Menu Item 2</StandardListItem>
        <StandardListItem data-key="3">Menu Item 3</StandardListItem>
      </>
    }
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

generatedDefaultStory.storyName = 'Generated default story';
