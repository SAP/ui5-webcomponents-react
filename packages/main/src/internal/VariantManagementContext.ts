import { createContext, Ref } from 'react';
import { VariantItemPropTypes } from '../components/VariantManagement/VariantItem';
import { Ui5DomRef } from '../interfaces/Ui5DomRef';

export interface SelectedVariant extends VariantItemPropTypes {
  variantItem: Ref<Ui5DomRef>;
}

export const VariantManagementContext = createContext({
  selectVariantItem: (selectedVariant: SelectedVariant) => {}
});
