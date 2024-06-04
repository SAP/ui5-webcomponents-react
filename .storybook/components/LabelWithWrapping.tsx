import { Label, WrappingType } from '@ui5/webcomponents-react';

//mdx adds a paragraph to children if added inline, this component prevents that.
export const LabelWithWrapping = ({ children }) => {
  return <Label wrappingType={WrappingType.Normal}>{children}</Label>;
};
