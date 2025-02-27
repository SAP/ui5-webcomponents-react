import type { KeyboardEvent } from 'react';
// todo: rename file
// todo: nav only works when tabbing, not when clicking cell or interactive content inside of it
// todo: verify what the intended behavior of PageUp & PageDown is

// using currying for now, as this way code splitting is easier
export const handleKeyboardNavigation = (
  e: KeyboardEvent<HTMLDivElement>,
  totalRowCount: number,
  visibleColumnsCount: number,
  isRTL: boolean
) => {
  const target = e.target as HTMLElement;
  if (target.role !== 'columnheader' && target.role !== 'gridcell') {
    return;
  }

  const dir = isRTL ? -1 : 1;
  // IMPORTANT: Since we're relying on `aria-rowindex` and `aria-colindex` here, the index starts at 1.
  const rowIndex = parseInt(target.parentElement.ariaRowIndex);
  const colIndex = parseInt(target.ariaColIndex);
  let newRowIndex = rowIndex;
  let newColIndex = colIndex;
  switch (e.key) {
    case 'ArrowDown':
      newRowIndex = Math.min(rowIndex + 1, totalRowCount);
      break;
    case 'ArrowUp':
      newRowIndex = Math.max(rowIndex - 1, 1);
      break;
    case 'ArrowRight':
      newColIndex = Math.min(colIndex + dir, visibleColumnsCount);
      break;
    case 'ArrowLeft':
      newColIndex = Math.max(colIndex - dir, 1);
      break;
    case 'Home':
      newColIndex = 1;
      break;
    case 'End':
      newColIndex = visibleColumnsCount;
      break;
    default:
      return;
  }
  e.preventDefault();

  const focusCell: HTMLDivElement = e.currentTarget.querySelector(
    `[aria-rowindex="${newRowIndex}"] > [data-cell][aria-colindex="${newColIndex}"]`
  );

  if (focusCell) {
    target.removeAttribute('tabindex');
    focusCell.tabIndex = 0;
    focusCell.focus();
  }
};
