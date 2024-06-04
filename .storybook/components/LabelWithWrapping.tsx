import { Label } from '@ui5/webcomponents-react';
import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';

//mdx adds a paragraph to children if added inline, this component prevents that.
export const LabelWithWrapping = ({ children }) => {
  return <Label wrappingType={WrappingType.Normal}>{children}</Label>;
};
