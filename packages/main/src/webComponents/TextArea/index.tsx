import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TextArea';
import { FC, ReactNode } from 'react';

export interface TextAreaPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Indicates whether the user can interact with the component or not. <br><br> <b>Note:</b> Disabled components cannot be focused and they are out of the tab chain.
   */
  disabled?: boolean;
  /**
   * Enables the <code>ui5-textarea</code> to automatically grow and shrink dynamically with its content. <br><br> <b>Note:</b> If set to <code>true</code>, the CSS <code>height</code> property is ignored.
   */
  growing?: boolean;
  /**
   * Defines the maximum number of lines that the Web Component can grow.
   */
  growingMaxLines?: number;
  /**
   * Defines the maximum number of characters that the <code>value</code> can have.
   */
  maxlength?: number;
  /**
   * Determines the name with which the <code>ui5-textarea</code> will be submitted in an HTML form.<br/><br/>
   *
   * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code><br/><br/>
   *
   * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>ui5-textarea</code> so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint intended to aid the user with data entry when the component has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the <code>ui5-textarea</code> is read-only. <br><br> <b>Note:</b> A read-only <code>ui5-textarea</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>ui5-textarea</code> is required.
   */
  required?: boolean;
  /**
   * Defines the number of visible text lines for the component. <br><br> <b>Notes:</b> <ul> <li>If the <code>growing</code> property is enabled, this property defines the minimum rows to be displayed in the textarea.</li> <li>The CSS <code>height</code> property wins over the <code>rows</code> property, if both are set.</li> </ul>
   */
  rows?: number;
  /**
   * Determines whether the characters exceeding the maximum allowed character count are visible in the <code>ui5-textarea</code>. <br><br> If set to <code>false</code>, the user is not allowed to enter more characters than what is set in the <code>maxlength</code> property. If set to <code>true</code> the characters exceeding the <code>maxlength</code> value are selected on paste and the counter below the <code>ui5-textarea</code> displays their number.
   */
  showExceededText?: boolean;
  /**
   * Defines the value of the Web Component.
   */
  value?: string;
  /**
   * Defines the value state of the <code>ui5-textarea</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul> <br><br> <b>Note:</b> If <code>maxlength</code> property is set, the component turns into "Warning" state once the characters exceeds the limit. In this case, only the "Error" state is considered and can be applied.
   */
  valueState?: ValueState;
  /**
   * Defines the value state message that will be displayed as pop up under the <code>ui5-textarea</code>.<br/><br/>
   *
   * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed.<br/><br/>
   *
   * <b>Note:</b> The <code>valueStateMessage</code> would be displayed if the <code>ui5-textarea</code> has <code>valueState</code> of type <code>Information</code>, <code>Warning</code> or <code>Error</code>.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the text has changed and the focus leaves the <code>ui5-textarea</code>.
   */
  onChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the value of the <code>ui5-textarea</code> changes at each keystroke or when something is pasted.
   */
  onInput?: (event: CustomEvent<{}>) => void;
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TextArea" target="_blank">UI5 Web Components Playground</a>
 */
const TextArea: FC<TextAreaPropTypes> = withWebComponent<TextAreaPropTypes>(
  'ui5-textarea',
  ['growingMaxLines', 'maxlength', 'name', 'placeholder', 'rows', 'value', 'valueState'],
  ['disabled', 'growing', 'readonly', 'required', 'showExceededText'],
  ['valueStateMessage'],
  ['change', 'input']
);

TextArea.displayName = 'TextArea';

TextArea.defaultProps = {
  disabled: false,
  growing: false,
  growingMaxLines: 0,
  maxlength: null,
  readonly: false,
  required: false,
  rows: 0,
  showExceededText: false,
  valueState: ValueState.None
};

export { TextArea };
