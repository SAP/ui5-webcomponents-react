import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Label';
import { FC, ReactNode } from 'react';

export interface LabelPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the labeled input by providing its ID. <br><br> <b>Note:</b> Can be used with both <code>Input</code> and native input.
   */
  for?: string;
  /**
   * Defines whether an asterisk character is added to the <code>Label</code> text. <br><br> <b>Note:</b> Usually indicates that user input is required.
   */
  required?: boolean;
  /**
   * Defines whether semi-colon is added to the <code>Label</code> text. <br><br> <b>Note:</b> Usually used in forms.
   */
  showColon?: boolean;
  /**
   * Determines whether the <code>Label</code> should wrap, when there is not enough space. <br><br> <b>Note:</b> By default the text would truncate.
   */
  wrap?: boolean;
  /**
   * Defines the text of the <code>Label</code>. <br><b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 *  The <code>Label</code> is a component used to represent a label, providing valuable information to the user. Usually it is placed next to a value holder, such as a text field. It informs the user about what data is displayed or expected in the value holder. <br><br> The <code>Label</code> appearance can be influenced by properties, such as <code>required</code> and <code>wrap</code>. The appearance of the Label can be configured in a limited way by using the design property. For a broader choice of designs, you can use custom styles.
 *
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
