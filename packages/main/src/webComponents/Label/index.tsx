import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Label from '@ui5/webcomponents/dist/Label';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface LabelPropTypes extends WithWebComponentPropTypes {
  required?: boolean; // @generated
  wrap?: boolean; // @generated
  for?: string; // @generated
  children?: string; // @generated
}

/**
 * <code>import { Label } from '@ui5/webcomponents-react/lib/Label';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Label" target="_blank">UI5 Web Components Playground</a>
 */
const Label: FC<LabelPropTypes> = withWebComponent<LabelPropTypes>(UI5Label);

Label.displayName = 'Label';

Label.defaultProps = {
  for: '' // @generated
};

export { Label };
