import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/FileUploader';
import { FC, ReactNode } from 'react';

export interface FileUploaderPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Comma-separated list of file types that the <code>ui5-file-uploader</code> should accept.
   */
  accept?: string;
  /**
   * Defines whether <code>ui5-file-uploader</code> is in disabled state. <br><br> <b>Note:</b> A disabled <code>ui5-file-uploader</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * If set to "true", the input field of <code>ui5-file-uploader</code> will not be rendered. Only the default slot that is passed will be rendered.
   */
  hideInput?: boolean;
  /**
   * Allows multiple files to be chosen.
   */
  multiple?: boolean;
  /**
   * Determines the name with which the <code>ui5-file-uploader</code> will be submitted in an HTML form.<br/><br/>
   *
   * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code><br/><br/>
   *
   * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>ui5-file-uploader</code> so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint intended to aid the user with data entry when the <code>ui5-file-uploader</code> has no value.
   */
  placeholder?: string;
  /**
   * Defines the name/names of the file/files to upload.
   */
  value?: string;
  /**
   * Defines the value state of the <code>ui5-file-uploader</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * By default the <code>ui5-file-uploader</code> contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the <code>ui5-file-uploader</code>. <br><br><br/><br/>
   *
   * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed. <br> <b>Note:</b> The <code>valueStateMessage</code> would be displayed, when the <code>ui5--file-uploader</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Event is fired when the value of the file path has been changed. <b>Note:</b> Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.
   */
  onChange?: (event: CustomEvent<{ files: FileList }>) => void;
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/FileUploader" target="_blank">UI5 Web Components Playground</a>
 */
const FileUploader: FC<FileUploaderPropTypes> = withWebComponent<FileUploaderPropTypes>(
  'ui5-file-uploader',
  ['accept', 'name', 'placeholder', 'value', 'valueState'],
  ['disabled', 'hideInput', 'multiple'],
  ['valueStateMessage'],
  ['change']
);

FileUploader.displayName = 'FileUploader';

FileUploader.defaultProps = {
  disabled: false,
  hideInput: false,
  multiple: false,
  valueState: ValueState.None
};

export { FileUploader };
