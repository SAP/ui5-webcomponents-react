// @generated

import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5DateRangePickerDomRef extends Ui5DomRef {
  /**
   * Returns the end date of the currently selected range as JavaScript Date instance.
   */
  readonly endDateValue: Date;

  /**
   * Returns the start date of the currently selected range as JavaScript Date instance.
   */
  readonly startDateValue: Date;

  /**
   * Currently selected date represented as a Local JavaScript Date instance.
   */
  readonly dateValue: Date;
  /**
   * Closes the picker.
   *
   */
  closePicker: () => void;

  /**
   * Formats a Java Script date object into a string representing a locale date according to the <code>formatPattern</code> property of the DatePicker instance
   * @param {Date} date - A Java Script date object to be formatted as string
   */
  formatValue: (date: Date) => void;

  /**
   * Checks if a date is between the minimum and maximum date.
   * @param {string} value - A value to be checked
   */
  isInValidRange: (value: string) => void;

  /**
   * Checks if the picker is open.
   *
   */
  isOpen: () => void;

  /**
   * Checks if a value is valid against the current date format of the DatePicker.
   * @param {string} value - A value to be tested against the current date format
   */
  isValid: (value: string) => void;

  /**
   * Opens the picker.
   *
   */
  openPicker: () => void;
}
