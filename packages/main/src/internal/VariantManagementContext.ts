import { createContext } from 'react';
import type { VariantItemPropTypes } from '../components/VariantManagement/VariantItem.js';
import type { ListItemStandardDomRef } from '../webComponents/ListItemStandard/index.js';

export interface SelectedVariant extends VariantItemPropTypes {
  variantItem: ListItemStandardDomRef;
}

export const VariantManagementContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectVariantItem: (_selectedVariant: SelectedVariant) => {}
});
