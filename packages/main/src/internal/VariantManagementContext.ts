import { createContext } from 'react';
import { VariantItemPropTypes } from '../components/VariantManagement/VariantItem';
import { StandardListItemDomRef } from '../webComponents';

export interface SelectedVariant extends VariantItemPropTypes {
  variantItem: StandardListItemDomRef;
}

export const VariantManagementContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectVariantItem: (_selectedVariant: SelectedVariant) => {}
});
