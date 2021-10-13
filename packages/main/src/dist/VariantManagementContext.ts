import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';
import { createContext, Ref } from 'react';
import { VariantItemPropTypes } from '../components/VariantManagement/VariantItem';

export interface SelectedVariant extends VariantItemPropTypes {
  variantItem: Ref<Ui5DomRef>;
}

export const VariantManagementContext = createContext({
  selectVariantItem: (selectedVariant: SelectedVariant) => {}
});
