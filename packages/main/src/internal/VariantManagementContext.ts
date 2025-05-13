import { createContext } from 'react';
import type { VariantItemPropTypes } from '../components/VariantManagement/VariantItem.js';
import type { ListItemStandardDomRef } from '../webComponents/ListItemStandard/index.js';

interface VariantManagementContextTypes {
  selectVariantItem: (_selectedVariant: SelectedVariant) => void;
  selectedVariant: SelectedVariant;
}

export interface SelectedVariant extends VariantItemPropTypes {
  variantItem: ListItemStandardDomRef;
}

export const VariantManagementContext = createContext<VariantManagementContextTypes>({
  selectVariantItem: (_selectedVariant: SelectedVariant) => {},
  selectedVariant: undefined,
});
