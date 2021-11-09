// @generated

import { AvatarColorScheme } from '@ui5/webcomponents-react/dist/AvatarColorScheme';
import { ReactNode } from 'react';
import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5AvatarGroupDomRef extends Ui5DomRef {
  /**
   * Returns an array containing the <code>AvatarColorScheme</code> values that correspond to the avatars in the component.
   */
  readonly colorScheme: Array<AvatarColorScheme[] | keyof typeof AvatarColorScheme[]>;

  /**
   * Returns an array containing the <code>ui5-avatar</code> instances that are currently not displayed due to lack of space.
   */
  readonly hiddenItems: ReactNode | ReactNode[];
}
