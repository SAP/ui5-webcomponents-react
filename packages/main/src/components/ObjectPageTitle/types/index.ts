import type { ReactElement, ReactNode } from 'react';
import type { CommonProps } from '../../../types/index.js';
import type { CollapsedAvatarPropTypes } from '../../ObjectPage/CollapsedAvatar.js';

export interface ObjectPageTitlePropTypes extends CommonProps {
  /**
   * Defines the actions bar of the `ObjectPageTitle`.
   *
   * __Note:__ Although this prop accepts all `ReactElement`s, it is strongly recommended that you only use the `Toolbar` component in order to preserve the intended design.
   */
  actionsBar?: ReactElement;

  /**
   * The `breadcrumbs` displayed in the `ObjectPageTitle` top-left area.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Breadcrumbs` in order to preserve the intended design.
   */
  breadcrumbs?: ReactNode | ReactNode[];

  /**
   * The content is positioned in the `ObjectPageTitle` middle area
   */
  children?: ReactNode | ReactNode[];

  /**
   * The `header` is positioned in the `ObjectPageTitle` left area.
   * Use this prop to display a `Title` (or any other component that serves as a heading).
   */
  header?: ReactNode;
  /**
   * The `subHeader` is positioned in the `ObjectPageTitle` left area below the `header`.
   * Use this aggregation to display a component like `Label` or any other component that serves as sub header.
   */
  subHeader?: ReactNode;
  /**
   * Defines navigation-actions bar of the `ObjectPageTitle`.
   *
   * *Note*: The `navigationBar` position depends on the control size.
   * If the control size is 1280px or bigger, they are rendered right next to the `actionsBar`.
   * Otherwise, they are rendered in the top-right area (above the `actionsBar`).
   * If a large number of elements(buttons) are used, there could be visual degradations as the space for the `navigationBar` is limited.
   *
   * __Note:__ Although this prop accepts all `ReactElement`s, it is strongly recommended that you only use the `Toolbar` component in order to preserve the intended design.
   */
  navigationBar?: ReactElement;
  /**
   * The content displayed in the `ObjectPageTitle` in expanded state.
   */
  expandedContent?: ReactNode | ReactNode[];
  /**
   * The content displayed in the `ObjectPageTitle` in collapsed (snapped) state.
   */
  snappedContent?: ReactNode | ReactNode[];
}

export interface InternalProps extends ObjectPageTitlePropTypes {
  /**
   * The onToggleHeaderContentVisibility show or hide the header section
   *
   * @private
   */
  onToggleHeaderContentVisibility?: (e: any) => void;
  /**
   * Defines whether the content area can be toggled
   *
   * @private
   */
  'data-not-clickable'?: boolean;
  /**
   * Defines whether the content area is visible
   *
   * @private
   */
  'data-header-content-visible'?: boolean;
  /**
   * @private
   */
  _snappedAvatar?: ReactElement<CollapsedAvatarPropTypes>;
}
