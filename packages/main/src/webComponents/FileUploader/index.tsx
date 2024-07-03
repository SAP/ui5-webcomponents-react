'use client';

import '@ui5/webcomponents/dist/FileUploader.js';
import type { FileUploaderChangeEventDetail } from '@ui5/webcomponents/dist/FileUploader.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface FileUploaderAttributes {
  /**
   * Comma-separated list of file types that the component should accept.
   *
   * **Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.
   */
  accept?: string | undefined;

  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is completely noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.
   * @default false
   */
  hideInput?: boolean;

  /**
   * Allows multiple files to be chosen.
   * @default false
   */
  multiple?: boolean;

  /**
   * Determines the name by which the component will be identified upon submission in an HTML form.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   * @default undefined
   */
  name?: string | undefined;

  /**
   * Defines a short hint intended to aid the user with data entry when the component has no value.
   * @default undefined
   */
  placeholder?: string | undefined;

  /**
   * Defines the name/names of the file/files to upload.
   */
  value?: string;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface FileUploaderDomRef extends Required<FileUploaderAttributes>, Ui5DomRef {
  /**
   * FileList of all selected files.
   */
  readonly files: FileList | null;
}

interface FileUploaderPropTypes
  extends FileUploaderAttributes,
    Omit<CommonProps, keyof FileUploaderAttributes | 'children' | 'valueStateMessage' | 'onChange'> {
  /**
   * By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.
   *
   * **Note:** If no content is provided in this slot, the component will only consist of an input field and will not be interactable using the keyboard.
   * Also it is not recommended to use any non-interactable components, as it may lead to poor accessibility experience.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed,
   * when the component is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Event is fired when the value of the file path has been changed.
   *
   * **Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.
   */
  onChange?: (event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderChangeEventDetail>) => void;
}

/**
 * The `FileUploader` opens a file explorer dialog and enables users to upload files.
 * The component consists of input field, but you can provide an HTML element by your choice
 * to trigger the file upload, by using the default slot.
 * Furthermore, you can set the property "hideInput" to "true" to hide the input field.
 *
 * To get all selected files, you can simply use the read-only "files" property.
 * To restrict the types of files the user can select, you can use the "accept" property.
 *
 * And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.
 *
 * For the `FileUploader`
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
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

export { FileUploader };
export type { FileUploaderDomRef, FileUploaderPropTypes };
