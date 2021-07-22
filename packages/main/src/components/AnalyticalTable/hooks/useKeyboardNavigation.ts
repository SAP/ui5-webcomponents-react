import { useCallback, useRef } from 'react';

const getRowProps = (rowProps, { instance, row }) => {
  return rowProps;
};

const getTableProps = (tableProps, { instance, row }) => {
  const currentlyFocusedCell = useRef<HTMLDivElement>(null);
  const tableRef = instance.webComponentsReactProperties.tableRef;

  const onTableFocus = useCallback(
    (e) => {
      const firstCell = e.target.querySelector('div[data-column-index="0"][data-row-index="0"]');

      if (e.target.dataset.componentName === 'AnalyticalTableContainer') {
        if (currentlyFocusedCell.current) {
          const { dataset } = currentlyFocusedCell.current;
          const rowIndex = parseInt(dataset.rowIndex ?? dataset.rowIndexSub, 10);
          const columnIndex = parseInt(dataset.columnIndex ?? dataset.columnIndexSub, 10);
          if (
            e.target.querySelector(`div[data-column-index="${columnIndex}"][data-row-index="${rowIndex}"]`) ||
            e.target.querySelector(`div[data-column-index-sub="${columnIndex}"][data-row-index-sub="${rowIndex}"]`)
          ) {
            currentlyFocusedCell.current.tabIndex = 0;
            currentlyFocusedCell.current.focus();
          } else {
            // Fallback if cell is not mounted anymore (virtualization)
            const firstRow = e.target.querySelector(`div[data-column-index="${columnIndex}"][data-row-index="0"]`);
            firstRow.tabIndex = 0;
            firstRow.focus();
            currentlyFocusedCell.current = firstRow;
          }
        } else if (firstCell) {
          firstCell.tabIndex = 0;
          firstCell.focus();
          currentlyFocusedCell.current = firstCell;
        }
      }
    },
    [currentlyFocusedCell.current, tableRef.current]
  );

  const onKeyboardNavigation = useCallback(
    (e) => {
      if (currentlyFocusedCell.current) {
        const columnIndex = parseInt(e.target.dataset.columnIndex, 10);
        const rowIndex = parseInt(e.target.dataset.rowIndex, 10);
        switch (e.key) {
          case 'ArrowRight': {
            e.preventDefault();
            const newElement = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex + 1}"][data-row-index="${rowIndex}"]`
            );
            if (newElement) {
              currentlyFocusedCell.current.tabIndex = -1;
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            }
            break;
          }
          case 'ArrowLeft': {
            e.preventDefault();
            const newElement = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex - 1}"][data-row-index="${rowIndex}"]`
            );
            if (newElement) {
              currentlyFocusedCell.current.tabIndex = -1;
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            }
            break;
          }
          case 'ArrowDown': {
            e.preventDefault();
            const parent = currentlyFocusedCell.current.parentElement as HTMLDivElement;
            const firstChildOfParent = parent.children[0] as HTMLDivElement;
            const hasSubcomponent = firstChildOfParent?.dataset?.subcomponent;
            const newElement = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex}"][data-row-index="${rowIndex + 1}"]`
            );

            if (hasSubcomponent && !currentlyFocusedCell.current?.dataset?.subcomponent) {
              currentlyFocusedCell.current.tabIndex = -1;
              firstChildOfParent.tabIndex = 0;
              firstChildOfParent.dataset.rowIndexSub = `${rowIndex}`;
              firstChildOfParent.dataset.columnIndexSub = `${columnIndex}`;
              firstChildOfParent.focus();
              currentlyFocusedCell.current = firstChildOfParent;
            } else if (newElement) {
              currentlyFocusedCell.current.tabIndex = -1;
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            } else if (e.target.dataset.subcomponent) {
              const nextElementToSubComp = tableRef.current.querySelector(
                `div[data-column-index="${parseInt(e.target.dataset.columnIndexSub)}"][data-row-index="${
                  parseInt(e.target.dataset.rowIndexSub) + 1
                }"]`
              );
              currentlyFocusedCell.current.tabIndex = -1;
              nextElementToSubComp.tabIndex = 0;
              nextElementToSubComp.focus();
              currentlyFocusedCell.current = nextElementToSubComp;
            }
            break;
          }
          case 'ArrowUp': {
            e.preventDefault();
            const previousRowCell = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex}"][data-row-index="${rowIndex - 1}"]`
            );
            const firstChildPrevRow = previousRowCell?.parentElement.children[0] as HTMLDivElement;
            const hasSubcomponent = firstChildPrevRow?.dataset?.subcomponent;

            if (currentlyFocusedCell.current?.dataset?.subcomponent) {
              currentlyFocusedCell.current.tabIndex = -1;
              const newElement = tableRef.current.querySelector(
                `div[data-column-index="${parseInt(e.target.dataset.columnIndexSub)}"][data-row-index="${parseInt(
                  e.target.dataset.rowIndexSub
                )}"]`
              );
              newElement.tabIndex = 0;
              newElement.focus();
              currentlyFocusedCell.current = newElement;
            } else if (hasSubcomponent) {
              currentlyFocusedCell.current.tabIndex = -1;
              firstChildPrevRow.dataset.rowIndexSub = `${rowIndex - 1}`;
              firstChildPrevRow.dataset.columnIndexSub = `${columnIndex}`;
              firstChildPrevRow.tabIndex = 0;
              firstChildPrevRow.focus();
              currentlyFocusedCell.current = firstChildPrevRow;
            } else if (previousRowCell) {
              currentlyFocusedCell.current.tabIndex = -1;
              previousRowCell.tabIndex = 0;
              previousRowCell.focus();
              currentlyFocusedCell.current = previousRowCell;
            }
            break;
          }
        }
      }
    },
    [currentlyFocusedCell.current, tableRef.current]
  );
  return [tableProps, { onFocus: onTableFocus, onKeyDown: onKeyboardNavigation }];
};

export const useKeyboardNavigation = (hooks) => {
  hooks.getRowProps.push(getRowProps);
  hooks.getTableProps.push(getTableProps);
};
