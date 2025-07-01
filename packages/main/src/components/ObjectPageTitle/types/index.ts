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
   * The `header` is displayed in the left area of the `ObjectPageTitle`.
   * Use this prop to render a `Title` or any other component that serves as a heading.
   *
   * __Note:__ If the header is snapped (collapsed), the `snappedHeader` prop is used instead (if defined).
   */
  header?: ReactNode;
  /**
   * The `snappedHeader` is displayed in the left area of the `ObjectPageTitle` when the header is snapped (collapsed).
   * Use this prop to render a `Title` or any other component that serves as a heading in the snapped view.
   *
   * @since 2.12.0
   */
  snappedHeader?: ReactNode;
  /**
   * The `subHeader` is displayed in the left area of the `ObjectPageTitle`, below the `header`.
   * Use this prop to render a `Label` or any other component that serves as a sub-header.
   *
   * __Note:__ If the header is snapped (collapsed), the `snappedSubHeader` prop is used instead (if defined).
   */
  subHeader?: ReactNode;
  /**
   * The `snappedSubHeader` is displayed in the left area of the `ObjectPageTitle` when the header is snapped (collapsed).
   * Use this prop to render a `Label` or any other component that serves as a sub-header in the snapped view.
   *
   * @since 2.12.0
   */
  snappedSubHeader?: ReactNode;
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
