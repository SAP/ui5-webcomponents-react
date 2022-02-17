import '@ui5/webcomponents/dist/Label.js';
import { ReactNode } from 'react';
import { WrappingType } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface LabelAttributes {
  /**
   * Defines the labeled input by providing its ID.
   *
   * **Note:** Can be used with both `Input` and native input.
   */
  for?: string;
  /**
   * Defines whether an asterisk character is added to the component text.
   *
   * **Note:** Usually indicates that user input is required.
   */
  required?: boolean;
  /**
   * Defines whether colon is added to the component text.
   *
   * **Note:** Usually used in forms.
   */
  showColon?: boolean;
  /**
   * Defines how the text of a component will be displayed when there is not enough space. Available options are:
   *
   * *   `None` - The text will be truncated with an ellipsis.
   * *   `Normal` - The text will wrap. The words will not be broken based on hyphenation.
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

export interface LabelDomRef extends LabelAttributes, Ui5DomRef {}

export interface LabelPropTypes extends LabelAttributes, CommonProps {
  /**
   * Defines the text of the component.
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Label` is a component used to represent a label, providing valuable information to the user. Usually it is placed next to a value holder, such as a text field. It informs the user about what data is displayed or expected in the value holder.
 *
 * The `Label` appearance can be influenced by properties, such as `required` and `wrappingType`. The appearance of the Label can be configured in a limited way by using the design property. For a broader choice of designs, you can use custom styles.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Label" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Label = withWebComponent<LabelPropTypes, LabelDomRef>(
  'ui5-label',
  ['for', 'wrappingType'],
  ['required', 'showColon'],
  [],
  []
);

Label.displayName = 'Label';

export { Label };
