import { deprecationNotice } from '@ui5/webcomponents-react-base';
import type { AvatarGroupDomRef, AvatarGroupPropTypes } from '../webComponents/AvatarGroup';
import { AvatarGroup } from '../webComponents/AvatarGroup';

deprecationNotice(
  'AvatarGroup',
  `importing from '@ui5/webcomponents-react/dist/AvatarGroup' is deprecated. Please use "import { AvatarGroup } from '@ui5/webcomponents-react';" instead.`
);

export { AvatarGroup };

export type { AvatarGroupPropTypes, AvatarGroupDomRef };
