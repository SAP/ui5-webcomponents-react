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
  },
  args: {
    notificationCount: 10,
    primaryTitle: 'Shell Bar',
    secondaryTitle: 'Fiori 3 Shell Bar',
    showCoPilot: true,
    showNotifications: true,
    showProductSwitch: true
  },
  argTypes: {
    children: {
      type: null
    },
    ref: {
      type: null
    },
    menuItems: {
      type: null
    },
    profile: {
      type: null
    },
    searchField: {
      type: null
    },
    startButton: {
      type: null
    }
  }
};

export const generatedDefaultStory = (props) => (
  <ShellBar
    logo={<img src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" alt="SAP Logo" />}
    notificationCount={props.notificationCount}
    primaryTitle={props.primaryTitle}
    secondaryTitle={props.secondaryTitle}
    showCoPilot={props.showCoPilot}
    showNotifications={props.showNotifications}
    showProductSwitch={props.showProductSwitch}
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
    onCoPilotClick={props.onCoPilotClick}
    onLogoClick={props.onLogoClick}
    onMenuItemClick={props.onMenuItemClick}
    onNotificationsClick={props.onNotificationsClick}
    onProductSwitchClick={props.onProductSwitchClick}
    onProfileClick={props.onProfileClick}
  >
    <ShellBarItem text={'ShellBarItem'} icon={'add'} count={'2'} />
  </ShellBar>
);

generatedDefaultStory.storyName = 'Generated default story';
