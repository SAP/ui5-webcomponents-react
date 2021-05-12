import { Ui5PickerDomRef } from './Ui5PickerDomRef';

export interface Ui5DatePickerDomRef extends Ui5PickerDomRef {
  /**
   * Checks if a date is between the minimum and maximum date.
   * @param value - A value to be checked
   */
  isInValidRange?: (value?: string) => boolean;
  /**
   * Opens the picker.
   */
  openPicker?: () => void;
}
