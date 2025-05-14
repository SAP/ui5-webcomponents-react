import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import { Label } from '@ui5/webcomponents-react';

//mdx adds a paragraph to children if added inline, this component prevents that.
export const LabelWithWrapping = ({ children }: { children: string }) => {
  return <Label wrappingType={WrappingType.Normal}>{children}</Label>;
};
