import { createContext } from 'react';
import type { VariantItemPropTypes } from '../components/VariantManagement/VariantItem.js';
import type { StandardListItemDomRef } from '../webComponents/StandardListItem/index.js';

export interface SelectedVariant extends VariantItemPropTypes {
  variantItem: StandardListItemDomRef;
}

export const VariantManagementContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectVariantItem: (_selectedVariant: SelectedVariant) => {}
});
