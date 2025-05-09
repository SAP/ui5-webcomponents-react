import type { TabContainerTabSelectEventDetail } from '@ui5/webcomponents/dist/TabContainer.js';
import type { CommonProps, Ui5CustomEvent } from '@ui5/webcomponents-react-base';
import type { ReactElement, ReactNode } from 'react';
import type { ObjectPageMode } from '../../../enums/ObjectPageMode.js';
import type { AvatarPropTypes } from '../../../webComponents/Avatar/index.js';
import type { TabContainerDomRef } from '../../../webComponents/TabContainer/index.js';
import type { ObjectPageHeaderPropTypes } from '../../ObjectPageHeader/index.js';
import type { ObjectPageSectionPropTypes } from '../../ObjectPageSection/index.js';
import type {
  InternalProps as ObjectPageTitlePropTypesWithInternals,
  ObjectPageTitlePropTypes
} from '../../ObjectPageTitle/types/index.js';

type ObjectPageSectionType = ReactElement<ObjectPageSectionPropTypes> | boolean;

interface BeforeNavigateDetail {
  sectionIndex: number;
  sectionId: string;
  subSectionId: string | undefined;
}

type ObjectPageTabSelectEventDetail = TabContainerTabSelectEventDetail & BeforeNavigateDetail;

export type ObjectPageTitlePropsWithDataAttributes = ObjectPageTitlePropTypesWithInternals & {
  'data-not-clickable': boolean;
  'data-header-content-visible': boolean;
  'data-is-snapped-rendered-outside': boolean;
};

export interface ObjectPagePropTypes extends Omit<CommonProps, 'placeholder'> {
  /**
   * Defines the upper, always static, title section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageTitle` in order to preserve the intended design.
   *
   * __Note:__ When the `ObjectPageTitle` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!
   */
  titleArea?: ReactElement<ObjectPageTitlePropTypes>;
  /**
   * Defines the `ObjectPageHeader` section of the `ObjectPage`.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageHeader` in order to preserve the intended design.
   *
   * __Note:__ When the `ObjectPageHeader` is rendered inside a custom component, it's essential to pass through all props, as otherwise the component won't function as intended!
   */
  headerArea?: ReactElement<ObjectPageHeaderPropTypes>;
  /**
   * React element which defines the footer content.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `Bar` with `design={BarDesign.FloatingFooter}` in order to preserve the intended design.
   */
  footerArea?: ReactElement;
  /**
   * Defines the image of the `ObjectPage`. You can pass a path to an image or an `Avatar` component.
   */
  image?: string | ReactElement<AvatarPropTypes>;
  /**
   * Defines the content area of the `ObjectPage`. It consists of sections and subsections.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `ObjectPageSection` in order to preserve the intended design.
   */
  children?: ObjectPageSectionType | ObjectPageSectionType[];
  /**
   * Sets the current selected `ObjectPageSection` by `id`.
   *
   * __Note:__ If a valid `selectedSubSectionId` is set, this prop has no effect.
   */
  selectedSectionId?: string;
  /**
   * Sets the current selected `ObjectPageSubSection` by `id`.
   */
  selectedSubSectionId?: string;
  /**
   * Defines whether the `headerArea` is pinned.
   */
  headerPinned?: boolean;
  /**
   * Defines whether the image should be displayed in a circle or in a square.<br />
   * __Note:__ If the `image` is not a `string`, this prop has no effect.
   */
  imageShapeCircle?: boolean;
  /**
   * Defines the `ObjectPage` mode.
   *
   * - "Default": All `ObjectPageSections` and `ObjectPageSubSections` are displayed on one page. Selecting tabs will scroll to the corresponding section.
   * - "IconTabBar": All `ObjectPageSections` are displayed on separate pages. Selecting tabs will lead to the corresponding page.
   *
   * @default `"Default"`
   */
  mode?: ObjectPageMode | keyof typeof ObjectPageMode;
  /**
   * Defines if the pin button for the `headerArea` is hidden.
   */
  hidePinButton?: boolean;
  /**
   * Determines whether the user can switch between the expanded/collapsed states of the `ObjectPageHeader` by clicking on the `ObjectPageTitle`.
   *
   * __Note:__ Per default the header is toggleable.
   */
  preserveHeaderStateOnClick?: boolean;
  /**
   * Defines internally used accessibility properties/attributes.
   */
  accessibilityAttributes?: {
    objectPageTopHeader?: {
      role?: string;
      ariaRoledescription?: string;
    };
    objectPageAnchorBar?: {
      role?: string;
    };
    objectPageFooterArea?: {
      role?: string;
    };
  };
  /**
   * If set, only the specified placeholder will be displayed as content of the `ObjectPage`, no sections or sub-sections will be rendered.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use placeholder components like the `IllustratedMessage` or custom skeletons pages in order to preserve the intended design.
   */
  placeholder?: ReactNode;
  /**
   * Fired when a section is selected via the tab bar, before navigation occurs. To cancel navigation, call `event.preventDefault()` within the event handler.
   *
   * __Note:__ This event is triggered every time a user selects a section, even if the section is already selected.
   */
  onBeforeNavigate?: (event: Ui5CustomEvent<TabContainerDomRef, ObjectPageTabSelectEventDetail>) => void;
  /**
   * Fired when the selected section changes.
   */
  onSelectedSectionChange?: (
    event: CustomEvent<{ selectedSectionIndex: number; selectedSectionId: string; section: HTMLDivElement }>
  ) => void;
  /**
   * Fired when the `headerArea` is expanded or collapsed.
   */
  onToggleHeaderArea?: (visible: boolean) => void;
  /**
   * Fired when the `headerArea` changes its pinned state.
   */
  onPinButtonToggle?: (pinned: boolean) => void;
}

export interface ObjectPageDomRef extends HTMLDivElement {
  /**
   * Toggles the `headerArea` of the `ObjectPage`.
   *
   * __Note:__ If no argument is passed, the header state is toggled, otherwise the respective `snapped` state is applied.
   */
  toggleHeaderArea: (snapped?: boolean) => void;
}
