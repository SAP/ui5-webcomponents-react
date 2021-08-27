import { ValueState } from '../../enums/ValueState';

export const getIconNameForType = (type: ValueState): string => {
  switch (type) {
    case ValueState.Error:
      return 'error';
    case ValueState.Success:
      return 'sys-enter-2';
    case ValueState.Warning:
      return 'alert';
    default:
      return 'information';
  }
};
