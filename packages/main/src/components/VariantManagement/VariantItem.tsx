'use client';

import { useStylesheet, useSyncRef } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { forwardRef, useContext, useEffect } from 'react';
import { VariantManagementContext } from '../../internal/VariantManagementContext.js';
import type { InputPropTypes } from '../../webComponents/index.js';
import type { ListItemStandardDomRef, ListItemStandardPropTypes } from '../../webComponents/ListItemStandard/index.js';
import { ListItemStandard } from '../../webComponents/ListItemStandard/index.js';
import { classNames, styleData } from './VariantItem.module.css.js';

export interface VariantItemPropTypes extends Pick<ListItemStandardPropTypes, 'accessibleName' | 'selected'> {
  /**
   * The name of the variant.
   */
  children: string;
  /**
   * Author of the variant.
   */
  author?: string;
  /**
   * Indicates if favorites can be created.
   *
   * __Note:__ Has no effect if `showOnlyFavorites` is falsy in the `VariantMangament`.
   */
  favorite?: boolean;
  /**
   * Indicator if a variant is visible for all users (public flag is set).
   */
  global?: boolean;
  /**
   * Indicator if it's the default variant.
   */
  isDefault?: boolean;
  /**
   * Indicates if the variant title can be changed.
   */
  labelReadOnly?: boolean;
  /**
   * Indicates if the variant should be applied automatically on selection.
   */
  applyAutomatically?: boolean;
  /**
   * Text displayed next to the "Apply Automatically" checkbox inside the "Manage Views" dialog.
   */
  applyAutomaticallyText?: string;
  /**
   * If set to false, the user is allowed to change the item's data.
   *
   * __Note:__ When set to true, no "Save" button will be displayed for the `VariantItem` when the `VariantManagement` is in `dirtyState`.
   */
  readOnly?: boolean;
  /**
   * Indicates if the variant can be deleted.
   *
   * __Note:__ If not set, a delete button is shown for all variants except for variants with `global={true}`.
   */
  hideDelete?: boolean;
  /**
   * Defines the props of the input rendered with the `VariantItem` inside the "Manage Views" dialog.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  manageViewsInputProps?: Omit<InputPropTypes, 'value'>;
  /**
   * Defines the props of the input rendered with the `VariantItem` inside the "Save View" dialog.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  saveViewInputProps?: Omit<InputPropTypes, 'value' | 'id'>;
}

/**
 * The `VariantItem` describes a variant/view of the `VariantManagement` component.
 */
const VariantItem = forwardRef<ListItemStandardDomRef, VariantItemPropTypes>((props, ref) => {
  const {
    isDefault,
    author,
    favorite,
    global,
    labelReadOnly,
    applyAutomatically,
    applyAutomaticallyText,
    readOnly,
    selected,
    children,
    hideDelete
  } = props;

  useStylesheet(styleData, VariantItem.displayName);

  const { selectVariantItem } = useContext(VariantManagementContext);
  const [componentRef, consolidatedRef] = useSyncRef<ListItemStandardDomRef>(ref);
  useEffect(() => {
    if (selected) {
      selectVariantItem({ ...props, variantItem: consolidatedRef.current });
    }
  }, [selected]);

  // inputProps are passed through to input components used in the configuration dialogs
  const { manageViewsInputProps: _0, saveViewInputProps: _1, ...rest } = props;

  return (
    <ListItemStandard
      {...rest}
      ref={componentRef}
      className={clsx(classNames.variantItem)}
      data-is-default={isDefault}
      data-author={author}
      data-favorite={favorite}
      data-global={global}
      data-label-read-only={labelReadOnly}
      data-apply-automatically={applyAutomatically}
      data-apply-automatically-text={applyAutomaticallyText}
      data-read-only={readOnly}
      data-children={children}
      data-hide-delete={hideDelete}
    />
  );
});

VariantItem.displayName = 'VariantItem';

export { VariantItem };
