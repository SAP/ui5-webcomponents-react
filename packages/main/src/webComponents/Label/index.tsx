import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Label';
import { FC, ReactNode } from 'react';

export interface LabelPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the labeled input by providing its ID. <br><br> <b>Note:</b> Can be used with both <code>ui5-input</code> and native input.
   */
  for?: string;
  /**
   * Defines whether an asterisk character is added to the <code>ui5-label</code> text. <br><br> <b>Note:</b> Usually indicates that user input is required.
   */
  required?: boolean;
  /**
   * Defines whether semi-colon is added to the <code>ui5-label</code> text. <br><br> <b>Note:</b> Usually used in forms.
   */
  showColon?: boolean;
  /**
   * Determines whether the <code>ui5-label</code> should wrap, when there is not enough space. <br><br> <b>Note:</b> By default the text would truncate.
   */
  wrap?: boolean;
  /**
   * Defines the text of the <code>ui5-label</code>. <br><b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { Label } from '@ui5/webcomponents-react/lib/Label';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Label" target="_blank">UI5 Web Components Playground</a>
 */
const Label: FC<LabelPropTypes> = withWebComponent<LabelPropTypes>(
  'ui5-label',
  ['for'],
  ['required', 'showColon', 'wrap'],
  [],
  []
);

Label.displayName = 'Label';

Label.defaultProps = {
  required: false,
  showColon: false,
  wrap: false
};

export { Label };
