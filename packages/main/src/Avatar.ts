import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { AvatarDomRef, AvatarPropTypes } from './webComponents/Avatar';
import { Avatar } from './webComponents/Avatar';

deprecationNotice(
  'Avatar',
  `importing from '@ui5/webcomponents-react/dist/Avatar' is deprecated. Please use "import { Avatar } from '@ui5/webcomponents-react';" instead.`
);

export { Avatar };

export type { AvatarPropTypes, AvatarDomRef };
