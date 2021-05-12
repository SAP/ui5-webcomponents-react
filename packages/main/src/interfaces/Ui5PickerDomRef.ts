import { Ui5DomRef } from './Ui5DomRef';

export interface Ui5PickerDomRef extends Ui5DomRef {
  /**
   * Closes the picker
   */
  closePicker?: () => void;
  /**
   * Formats a Java Script date object into a string representing a locale date and time
   * according to the `formatPattern` property of the TimePicker instance
   * @param date - A Java Script date object to be formatted as string
   */
  formatValue?: (date: Date) => string;
  /**
   * Checks if the picker is open
   */
  isOpen?: () => boolean;
  /**
   * Checks if a value is valid against the current `formatPattern` value.
   *
   * __Note:__ an empty string is considered as valid value.
   * @param value - The value to be tested against the current date format
   */
  isValid?: (value: string) => boolean;
}
