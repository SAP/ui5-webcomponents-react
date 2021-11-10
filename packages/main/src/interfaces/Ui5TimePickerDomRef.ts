// @generated

import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5TimePickerDomRef extends Ui5DomRef {
  /**
   * Currently selected time represented as JavaScript Date instance
   */
  readonly dateValue: Date;
  /**
   * Closes the picker
   *
   */
  closePicker: () => void;

  /**
   * Formats a Java Script date object into a string representing a locale date and time according to the <code>formatPattern</code> property of the TimePicker instance
   * @param {Date} date - A Java Script date object to be formatted as string
   */
  formatValue: (date: Date) => void;

  /**
   * Checks if the picker is open
   *
   */
  isOpen: () => void;

  /**
   * Checks if a value is valid against the current <code>formatPattern</code> value.
   *
   * <br><br> <b>Note:</b> an empty string is considered as valid value.
   * @param {string} value - The value to be tested against the current date format
   */
  isValid: (value: string) => void;

  /**
   * Opens the picker.
   *
   */
  openPicker: () => void;
}
