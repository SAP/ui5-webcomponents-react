import { deprecationNotice } from '@ui5/webcomponents-react-base';

export * from '../components/VariantManagement/VariantItem';

deprecationNotice(
  'VariantItem',
  `importing from '@ui5/webcomponents-react/dist/VariantItem' is deprecated. Please use "import { VariantItem } from '@ui5/webcomponents-react';" instead.`
);
