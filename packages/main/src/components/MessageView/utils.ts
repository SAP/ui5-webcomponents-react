import { ValueState } from '../../enums/ValueState';

export const getIconNameForType = (type: ValueState | keyof typeof ValueState): string => {
  switch (type) {
    case ValueState.Error:
    case 'Error':
      return 'error';
    case ValueState.Success:
    case 'Success':
      return 'sys-enter-2';
    case ValueState.Warning:
    case 'Warning':
      return 'alert';
    default:
      return 'information';
  }
};
