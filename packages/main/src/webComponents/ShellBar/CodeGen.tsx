import React from 'react';
import { Avatar } from '../Avatar';
//@ts-ignore
import image from '../../../../../.storybook/demoImages/Person.png';

export const Logo = <img src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg" alt="SAP Logo" />;

export const Profile = (
  <Avatar>
    <img src={image} />
  </Avatar>
);
