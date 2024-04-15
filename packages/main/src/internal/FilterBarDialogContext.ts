import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { TableRowDomRef } from '../webComponents/index.js';

export type ReorderDirections = 'up' | 'down' | 'top' | 'bottom';
export type OnReorderParams = { index: number; direction: ReorderDirections; target: TableRowDomRef; orderId: string };
export interface IFilterBarDialogContext {
  setShowReorderBtnsIndex?: Dispatch<SetStateAction<number | undefined>>;
  onReorder?: (e: OnReorderParams) => void;
  isListView?: boolean;
  isFilterInDialog?: boolean;
  withValues?: boolean;
  enableReordering?: boolean;
  showBtnsOnHover?: boolean;
  setShowBtnsOnHover?: Dispatch<SetStateAction<boolean>>;
  handleFocusFallback?: () => void;
  currentReorderedItemOrderId?: string;
}

export const FilterBarDialogContext = createContext<IFilterBarDialogContext>({});
