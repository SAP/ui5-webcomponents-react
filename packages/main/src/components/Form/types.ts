export type FormItemLayoutInfo = { id: string; index: number; groupId?: string; columnIndex: number };
export type FormGroupLayoutInfo = { id: string; index: number; columnIndex: number };
export type FormElementTypes = 'formItem' | 'formGroup';

//todo remove optional?
export type FormContextType = {
  formItems?: FormItemLayoutInfo[];
  formGroups?: FormGroupLayoutInfo[];
  registerItem?: (id: string, type: FormElementTypes, groupId?: string) => void;
  unregisterItem?: (id: string, groupId?: string) => void;
  //old
  labelSpan?: null | number;
};

export type ItemInfo = {
  type: FormElementTypes; // The parent
  formItemIds: Set<string>; // If "formGroup" is parent - the children if exist
};
