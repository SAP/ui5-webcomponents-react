import { deprecationNotice } from '@ui5/webcomponents-react-base';
import { VariantManagement } from '../components/VariantManagement';

export type { VariantManagementPropTypes } from '../components/VariantManagement';

deprecationNotice(
  'VariantManagement',
  `importing from '@ui5/webcomponents-react/dist/VariantManagement' is deprecated. Please use "import { VariantManagement } from '@ui5/webcomponents-react';" instead.`
);

export { VariantManagement };
