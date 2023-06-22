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

//todo remove optional?
export type FormContextType = {
  formItems?: FormItemLayoutInfo[];
  formGroups?: FormGroupLayoutInfo[];
  registerItem?: (id: string, type: FormElementTypes, groupId?: string) => void;
  unregisterItem?: (id: string, groupId?: string) => void;
  labelSpan?: null | number;
  //todo type
  rowsWithGroup?: any;
};

export type ItemInfo = {
  type: FormElementTypes; // The parent
  formItemIds: Set<string>; // If "formGroup" is parent - the children if exist
};
