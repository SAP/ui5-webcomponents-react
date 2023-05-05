import iconAlert from '@ui5/webcomponents-icons/dist/alert.js';
import iconError from '@ui5/webcomponents-icons/dist/error.js';
import iconInformation from '@ui5/webcomponents-icons/dist/information.js';
import iconSysEnter from '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import { ValueState } from '../../enums/index.js';

export const getIconNameForType = (type: ValueState | keyof typeof ValueState): string => {
  switch (type) {
    case ValueState.Error:
    case 'Error':
      return iconError;
    case ValueState.Success:
    case 'Success':
      return iconSysEnter;
    case ValueState.Warning:
    case 'Warning':
      return iconAlert;
    default:
      return iconInformation;
  }
};
