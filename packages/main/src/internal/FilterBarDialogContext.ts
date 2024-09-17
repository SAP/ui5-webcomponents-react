import { createContext } from 'react';
import type { Dispatch, SetStateAction, RefObject } from 'react';
import type { TableRowDomRef } from '../index.js';

export type ReorderDirections = 'up' | 'down' | 'top' | 'bottom';
export type OnReorderParams = {
  index: number;
  direction: ReorderDirections;
  target: TableRowDomRef;
  filterKey: string | number;
};
export interface IFilterBarDialogContext {
  onReorder?: (e: OnReorderParams) => void;
  isListView?: boolean;
  isFilterInDialog?: boolean;
  withValues?: boolean;
  enableReordering?: boolean;
  showBtnsOnHover?: boolean;
  handleFocusFallback?: () => void;
  currentReorderedItemOrderId?: string | number;
  setShowBtnsOnHover?: Dispatch<SetStateAction<boolean>>;
  setShowReorderBtnsIndex?: Dispatch<SetStateAction<number | undefined>>;
  setSelectedKeys?: Dispatch<SetStateAction<string[]>>;
  setRequiredKeys?: Dispatch<SetStateAction<Record<string, boolean>>>;
  prevIsListView?: RefObject<boolean>;
}

export const FilterBarDialogContext = createContext<IFilterBarDialogContext>({});
