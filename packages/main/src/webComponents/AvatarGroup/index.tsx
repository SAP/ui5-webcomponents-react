import { AvatarGroupType } from '@ui5/webcomponents-react/lib/AvatarGroupType';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/AvatarGroup';
import { FC, ReactNode } from 'react';

export interface AvatarGroupPropTypes extends Omit<WithWebComponentPropTypes, 'onClick'> {
  /**
   * Defines predefined size of the `Avatar`.
   *
   * Available options are:
   *
   * *   `XS`
   * *   `S`
   * *   `M`
   * *   `L`
   * *   `XL`
   */
  avatarSize?: AvatarSize;
  /**
   * Defines the mode of the `AvatarGroup`.
   *
   * Available options are:
   *
   * *   `Group`
   * *   `Individual`
   */
  type?: AvatarGroupType;
  /**
   * Defines the items of the `AvatarGroup`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the `AvatarGroup` is activated either with a click/tap or by using the Enter or Space key.
   */
  onClick?: (event: CustomEvent<{ targetRef: ReactNode; overflowButtonClicked: boolean }>) => void;
}

/**
 * Displays a group of avatars arranged horizontally. It is useful to visually showcase a group of related avatars, such as, project team members or employees. The component allows you to display the avatars in different sizes, depending on your use case. The `AvatarGroup` component has two group types:
 *
 * *   `Group` type: The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap area.
 * *   `Individual` type: The avatars are displayed side-by-side and each avatar has its own click/tap area.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/AvatarGroup" target="_blank">UI5 Web Components Playground</a>
 */
const AvatarGroup: FC<AvatarGroupPropTypes> = withWebComponent<AvatarGroupPropTypes>(
  'ui5-avatar-group',
  ['avatarSize', 'type'],
  [],
  [],
  ['click']
);

AvatarGroup.displayName = 'AvatarGroup';

AvatarGroup.defaultProps = {
  avatarSize: AvatarSize.S,
  type: AvatarGroupType.Group
};

export { AvatarGroup };
