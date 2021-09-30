import { useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/useConsolidatedRef';
import React, { forwardRef, Ref, useContext, useEffect } from 'react';
import { StandardListItem, StandardListItemPropTypes } from '@ui5/webcomponents-react/dist/StandardListItem';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { VariantManagementContext } from '@ui5/webcomponents-react/dist/VariantManagementContext';

export interface VariantItemPropTypes extends Omit<StandardListItemPropTypes, 'children'> {
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
   */
  favorite?: boolean;
  /**
   * Indicator if a variant is visible for all users.
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
   * todo is this really needed?
   * If set to false, the user is allowed to change the item's data. --> dirty state (has nothing to do with actual interaction)
   */
  readOnly?: boolean;
}

//todo
//sap.ui.getCore().byId($0.id).getVariantItems()[1].setExecuteOnSelection(true)
export const VariantItem = forwardRef((props: VariantItemPropTypes, ref: Ref<Ui5DomRef>) => {
  const { isDefault, author, favorite, global, labelReadOnly, applyAutomatically, readOnly, selected, children } =
    props;
  const { selectVariantItem } = useContext(VariantManagementContext);
  const consolidatedRef = useConsolidatedRef<Ref<Ui5DomRef>>(ref);
  useEffect(() => {
    if (selected) {
      selectVariantItem({ ...props, variantItem: consolidatedRef.current });
    }
  }, [selected]);

  const handleVariantItemClick = (e) => {
    selectVariantItem({ ...props, variantItem: consolidatedRef.current });
    if (typeof props?.onClick === 'function') {
      props.onClick(e);
    }
  };

  return (
    <StandardListItem
      {...props}
      //todo type
      ref={consolidatedRef}
      onClick={handleVariantItemClick}
      data-is-default={isDefault}
      data-author={author}
      data-favorite={favorite}
      data-global={global}
      data-label-read-only={labelReadOnly}
      data-apply-automatically={applyAutomatically}
      data-read-only={readOnly}
      data-text={children}
    />
  );
});

VariantItem.displayName = 'VariantItem';
