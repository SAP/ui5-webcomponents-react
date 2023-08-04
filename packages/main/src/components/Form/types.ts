export type FormItemLayoutInfo = {
  id: string;
  index: number;
  groupId?: string;
  columnIndex: number;
  rowIndex: number;
  lastGroupItem?: boolean;
};
export type FormGroupLayoutInfo = { id: string; index: number; columnIndex: number; rowIndex: number };
export type FormElementTypes = 'formItem' | 'formGroup';

export type FormContextType = {
  formItems?: FormItemLayoutInfo[];
  formGroups?: FormGroupLayoutInfo[];
  registerItem?: (id: string, type: FormElementTypes, groupId?: string) => void;
  unregisterItem?: (id: string, groupId?: string) => void;
  labelSpan: null | number;
  rowsWithGroup?: Record<number, boolean>;
  recalcTrigger: number;
};

export type GroupContextType = {
  id?: string;
};

export type ItemInfo = {
  type: FormElementTypes;
  formItemIds: Set<string>;
};
