import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import iconAlert from '@ui5/webcomponents-icons/dist/alert.js';
import iconError from '@ui5/webcomponents-icons/dist/error.js';
import iconInformation from '@ui5/webcomponents-icons/dist/information.js';
import iconSysEnter from '@ui5/webcomponents-icons/dist/sys-enter-2.js';

export const getIconNameForType = (type: ValueState | keyof typeof ValueState): string => {
  switch (type) {
    case ValueState.Negative:
    case 'Negative':
      return iconError;
    case ValueState.Positive:
    case 'Positive':
      return iconSysEnter;
    case ValueState.Critical:
    case 'Critical':
      return iconAlert;
    default:
      return iconInformation;
  }
};
