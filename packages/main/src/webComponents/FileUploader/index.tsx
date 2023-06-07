'use client';

import '@ui5/webcomponents/dist/FileUploader.js';
import type { FileUploaderChangeEventDetail } from '@ui5/webcomponents/dist/FileUploader.js';
import type { ReactNode } from 'react';
import { ValueState } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface FileUploaderAttributes {
  /**
   * Comma-separated list of file types that the component should accept.
   *
   * **Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.
   */
  accept?: string;
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.
   */
  hideInput?: boolean;
  /**
   * Allows multiple files to be chosen.
   */
  multiple?: boolean;
  /**
   * Determines the name with which the component will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint intended to aid the user with data entry when the component has no value.
   */
  placeholder?: string;
  /**
   * Defines the name/names of the file/files to upload.
   */
  value?: string;
  /**
   * Defines the value state of the component.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState | keyof typeof ValueState;
}

export interface FileUploaderDomRef extends FileUploaderAttributes, Ui5DomRef {
  /**
   * FileList of all selected files.
   */
  readonly files: FileList;
}

export interface FileUploaderPropTypes extends FileUploaderAttributes, Omit<CommonProps, 'onChange'> {
  /**
   * By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Event is fired when the value of the file path has been changed. **Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.
   */
  onChange?: (event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderChangeEventDetail>) => void;
}

/**
 * The `FileUploader` opens a file explorer dialog and enables users to upload files. The component consists of input field, but you can provide an HTML element by your choice to trigger the file upload, by using the default slot. Furthermore, you can set the property "hideInput" to "true" to hide the input field.
 * To get all selected files, you can simply use the read-only "files" property. To restrict the types of files the user can select, you can use the "accept" property.
 * And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties. For the `FileUploader`
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/FileUploader" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const FileUploader = withWebComponent<FileUploaderPropTypes, FileUploaderDomRef>(
  'ui5-file-uploader',
  ['accept', 'name', 'placeholder', 'value', 'valueState'],
  ['disabled', 'hideInput', 'multiple'],
  ['valueStateMessage'],
  ['change'],
  () => import('@ui5/webcomponents/dist/FileUploader.js')
);

FileUploader.displayName = 'FileUploader';

FileUploader.defaultProps = {
  valueState: ValueState.None
};

export { FileUploader };
