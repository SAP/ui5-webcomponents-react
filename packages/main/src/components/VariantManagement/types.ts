import type { DialogBeforeCloseEventDetail } from '@ui5/webcomponents/dist/Dialog.js';
import type { ListSelectionChangeEventDetail } from '@ui5/webcomponents/dist/List.js';
import type { ReactNode } from 'react';
import type { SelectedVariant } from '../../internal/VariantManagementContext.js';
import type { CommonProps, Ui5CustomEvent } from '../../types/index.js';
import type {
  ButtonPropTypes,
  DialogPropTypes,
  InputDomRef,
  ListDomRef,
  ResponsivePopoverPropTypes,
  TitlePropTypes
} from '../../webComponents/index.js';
import type { VariantItemPropTypes } from './VariantItem.js';

interface UpdatedVariant extends SelectedVariant {
  prevVariant?: VariantItemPropTypes;
}

export interface VariantManagementPropTypes extends Omit<CommonProps, 'onSelect'> {
  /**
   * Variant items displayed by the VariantManagement component.
   *
   * __Note:__ Although this prop accepts all HTML Elements, it is strongly recommended that you only use `VariantItem` in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Determines on which side the VariantManagement popover is placed at.
   */
  placement?: ResponsivePopoverPropTypes['placement'];
  /**
   * Describes the title of the VariantManagement popover.
   *
   * __Note:__ If not set, the default title is used.
   */
  titleText?: ResponsivePopoverPropTypes['headerText'];
  /**
   * Defines whether the VariantManagement should be closed if an item was selected.
   */
  closeOnItemSelect?: boolean;
  /**
   * Describes the `HTML Title` level of the variants.
   */
  level?: TitlePropTypes['level'];
  /**
   * Defines whether the VariantManagement is disabled.
   */
  disabled?: boolean;
  /**
   * Indicator for modified but not saved variants.
   *
   * __Note:__ You can change the indicator by setting `dirtyStateText`.
   */
  dirtyState?: boolean;
  /**
   * Text for the dirty state indicator.
   */
  dirtyStateText?: string;
  /**
   * Indicates that the 'Favorites' feature is used. Only variants marked as favorites will be displayed in the variant list.
   *
   * __Note:__ Only if `showOnlyFavorites` is set to `true` favorites can be changed.
   */
  showOnlyFavorites?: boolean;
  /**
   * Indicates that set as default is visible in the Save View and the Manage Views dialogs.
   */
  hideSetAsDefault?: boolean;
  /**
   * Indicates that the Public indicator is visible in the Save View and the Manage Views dialogs.
   */
  hideShare?: boolean;
  /**
   * Indicates that Apply Automatically is visible in the Save View and the Manage Views dialogs.
   */
  hideApplyAutomatically?: boolean;
  /**
   * Indicates that the Author is visible in the Manage Views dialog.
   */
  hideCreatedBy?: boolean;
  /**
   * Indicates that the Save View dialog button is visible.
   */
  hideSaveAs?: boolean;
  /**
   * Indicates that the Manage Views dialog button is visible.
   */
  hideManageVariants?: boolean;
  /**
   * Indicates that the control is in error state. If set to true error message will be displayed whenever the variant is opened.
   */
  inErrorState?: boolean;
  /**
   * Defines where modals are rendered into via `React.createPortal`.
   *
   * You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--page).
   *
   * Defaults to: `document.body`
   */
  portalContainer?: Element;
  /**
   * Fired after a variant has been selected.
   *
   * __Note:__ This event inherits part of its details from the `onSelectionChange` event of the `List` component.
   */
  onSelect?: (
    event: Ui5CustomEvent<
      ListDomRef,
      ListSelectionChangeEventDetail & {
        selectedVariant: SelectedVariant;
      }
    >
  ) => void;
  /**
   * The event is fired when the "Save" button is clicked inside the Save View dialog.
   *
   * __Note:__ Calling `event.preventDefault()` prevents the dialog from closing when clicked.
   */
  onSaveAs?: (e: Parameters<NonNullable<ButtonPropTypes['onClick']>>[0] & { detail: SelectedVariant }) => void;
  /**
   * The event is fired when the "Save" button is clicked inside the Manage Views dialog.
   *
   * __Note:__ Calling `event.preventDefault()` prevents the dialog from closing when clicked.
   */
  onSaveManageViews?: (
    e: Parameters<NonNullable<ButtonPropTypes['onClick']>>[0] & {
      detail: {
        deletedVariants: VariantItemPropTypes[];
        prevVariants: VariantItemPropTypes[];
        updatedVariants: UpdatedVariant[];
        variants: SelectedVariant[];
      };
    }
  ) => void;
  /**
   * The event is fired when the "Save" button is clicked in the `VariantManagement` popover.
   *
   * __Note:__ The save button is only displayed if the `VariantManagement` is in `dirtyState` and the selected variant is not in `readOnly` mode.
   */
  onSave?: (e: Parameters<NonNullable<ButtonPropTypes['onClick']>>[0] & { detail: SelectedVariant }) => void;
  /**
   * The event is fired when the "Cancel" button inside the Manage Views dialog is clicked or ESCAPE is pressed.
   */
  onManageViewsCancel?: (
    e: (
      | Parameters<NonNullable<ButtonPropTypes['onClick']>>[0]
      | Parameters<NonNullable<DialogPropTypes['onBeforeClose']>>[0]
    ) & { detail: { invalidVariants: Record<string, InputDomRef> } & Partial<DialogBeforeCloseEventDetail> }
  ) => void;
  /**
   * The event is fired when the "Cancel" button inside the Save View dialog is clicked or ESCAPE is pressed.
   */
  onSaveViewCancel?: (
    e: (
      | Parameters<NonNullable<ButtonPropTypes['onClick']>>[0]
      | Parameters<NonNullable<DialogPropTypes['onBeforeClose']>>[0]
    ) & { detail: SelectedVariant; isInvalid?: boolean & Partial<DialogBeforeCloseEventDetail> }
  ) => void;
}
