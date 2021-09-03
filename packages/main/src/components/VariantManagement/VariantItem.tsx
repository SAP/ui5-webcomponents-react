import React from 'react';
import { StandardListItem, StandardListItemPropTypes } from '@ui5/webcomponents-react/dist/StandardListItem';

export interface VariantItem extends StandardListItemPropTypes {
  /**
   * Author of the variant
   */
  author?: string;
  /**
   * Indicates if favorites can be created.
   */
  favorite?: boolean;
  /**
   * Indicator if a variant is visible for all users.
   */
  global?: boolean;
  /**
   * todo necessary? name?
   */
  isDefault?: boolean;
  /**
   * Indicates if the variant title can be changed.
   */
  labelReadOnly?: boolean;
  /**
   * Attribute for usage in SmartFilterBar
   * todo this should apply the view immediately when it's checked
   * --> check how this can be implemented, probably best to just return a callback
   */
  applyAutomatically?: boolean; // ui5 executeOnSelection

  //todo
  /**
   * If set to false, the user is allowed to change the item's data
   *  todo is this really the prop for the delete button?
   */
  readOnly?: boolean; //with ui5 it's readOnly
}

export const VariantItem = (props) => {
  const { isDefault, author, favorite, global, labelReadOnly, applyAutomatically, readOnly } = props;
  return (
    <StandardListItem
      {...props}
      data-is-default={isDefault}
      data-author={author}
      data-favorite={favorite}
      data-global={global}
      data-label-read-only={labelReadOnly}
      data-apply-automatically={applyAutomatically}
      data-read-only={readOnly}
    />
  );
};

VariantItem.displayName = 'VariantItem';
