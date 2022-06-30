import { useCallback, useEffect, useRef } from 'react';

const getFirstVisibleCell = (target, currentlyFocusedCell, noData) => {
  const firstVisibleCell = noData
    ? target.querySelector(`div[data-visible-column-index="0"][data-visible-row-index="0"]`)
    : target.querySelector(`div[data-visible-column-index="0"][data-visible-row-index="1"]`);
  if (firstVisibleCell) {
    firstVisibleCell.tabIndex = 0;
    firstVisibleCell.focus();
    currentlyFocusedCell.current = firstVisibleCell;
  }
};

const findParentCell = (target) => {
  if (target === undefined || target === null) return;
  if (
    (target.dataset.rowIndex !== undefined && target.dataset.columnIndex !== undefined) ||
    (target.dataset.rowIndexSub !== undefined && target.dataset.columnIndexSub !== undefined)
  ) {
    return target;
  } else {
    return findParentCell(target.parentElement);
  }
};

const setFocus = (currentlyFocusedCell, nextElement) => {
  currentlyFocusedCell.current.tabIndex = -1;
  if (nextElement) {
    nextElement.tabIndex = 0;
    nextElement.focus();
    currentlyFocusedCell.current = nextElement;
  }
};

const getTableProps = (tableProps, { instance: { webComponentsReactProperties, data } }) => {
  const { showOverlay } = webComponentsReactProperties;
  const currentlyFocusedCell = useRef<HTMLDivElement>(null);
  const tableRef = webComponentsReactProperties.tableRef;
  const noData = data.length === 0;

  useEffect(() => {
    if (showOverlay && currentlyFocusedCell.current) {
      currentlyFocusedCell.current.tabIndex = -1;
      currentlyFocusedCell.current = null;
    }
  }, [showOverlay]);

  const onTableBlur = useCallback(
    (e) => {
      if (e.target.tagName === 'UI5-LI' || e.target.tagName === 'UI5-LI-CUSTOM') {
        currentlyFocusedCell.current = null;
      }
    },
    [currentlyFocusedCell.current]
  );

  const onTableFocus = useCallback(
    (e) => {
      const isFirstCellAvailable = e.target.querySelector('div[data-column-index="0"][data-row-index="1"]');
      if (e.target.dataset.componentName === 'AnalyticalTableContainer') {
        e.target.tabIndex = -1;
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
            getFirstVisibleCell(e.target, currentlyFocusedCell, noData);
          }
        } else if (isFirstCellAvailable) {
          const firstCell = e.target.querySelector('div[data-column-index="0"][data-row-index="0"]');
          firstCell.tabIndex = 0;
          firstCell.focus();
          currentlyFocusedCell.current = firstCell;
        } else {
          getFirstVisibleCell(e.target, currentlyFocusedCell, noData);
        }
      } else {
        const tableCell = findParentCell(e.target);
        if (tableCell) {
          currentlyFocusedCell.current = tableCell;
        } else {
          getFirstVisibleCell(tableRef.current, currentlyFocusedCell, noData);
        }
      }
    },
    [currentlyFocusedCell.current, tableRef.current, noData]
  );

  const onKeyboardNavigation = useCallback(
    (e) => {
      if (currentlyFocusedCell.current) {
        const columnIndex = parseInt(currentlyFocusedCell.current.dataset.columnIndex, 10);
        const rowIndex = parseInt(currentlyFocusedCell.current.dataset.rowIndex, 10);
        switch (e.key) {
          case 'End': {
            e.preventDefault();
            const visibleColumns = tableRef.current.querySelector(
              `div[data-component-name="AnalyticalTableHeaderRow"]`
            ).children;
            const lastVisibleColumn = Array.from(visibleColumns)
              .slice(0)
              .reduceRight((prev, cur: HTMLDivElement, index, arr) => {
                const columnIndex = parseInt((cur.children?.[0] as HTMLDivElement)?.dataset.columnIndex, 10);
                if (!isNaN(columnIndex)) {
                  arr.length = 0;
                  return columnIndex;
                }
                return cur;
              }) as number;

            const newElement = tableRef.current.querySelector(
              `div[data-visible-column-index="${lastVisibleColumn + 1}"][data-row-index="${rowIndex}"]`
            );
            setFocus(currentlyFocusedCell, newElement);
            break;
          }
          case 'Home': {
            e.preventDefault();
            const newElement = tableRef.current.querySelector(
              `div[data-visible-column-index="0"][data-row-index="${rowIndex}"]`
            );
            setFocus(currentlyFocusedCell, newElement);
            break;
          }
          case 'PageDown': {
            e.preventDefault();
            if (currentlyFocusedCell.current.dataset.rowIndex === '0') {
              const newElement = tableRef.current.querySelector(
                `div[data-column-index="${columnIndex}"][data-row-index="${rowIndex + 1}"]`
              );
              setFocus(currentlyFocusedCell, newElement);
            } else {
              const lastVisibleRow = tableRef.current.querySelector(`div[data-component-name="AnalyticalTableBody"]`)
                ?.children?.[0].children.length;
              const newElement = tableRef.current.querySelector(
                `div[data-column-index="${columnIndex}"][data-visible-row-index="${lastVisibleRow}"]`
              );
              setFocus(currentlyFocusedCell, newElement);
            }
            break;
          }
          case 'PageUp': {
            e.preventDefault();
            if (currentlyFocusedCell.current.dataset.rowIndex <= '1') {
              const newElement = tableRef.current.querySelector(
                `div[data-column-index="${columnIndex}"][data-row-index="0"]`
              );
              setFocus(currentlyFocusedCell, newElement);
            } else {
              const newElement = tableRef.current.querySelector(
                `div[data-column-index="${columnIndex}"][data-visible-row-index="1"]`
              );
              setFocus(currentlyFocusedCell, newElement);
            }
            break;
          }
          case 'ArrowRight': {
            e.preventDefault();
            const newElement = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex + 1}"][data-row-index="${rowIndex}"]`
            );
            if (newElement) {
              setFocus(currentlyFocusedCell, newElement);
            }
            break;
          }
          case 'ArrowLeft': {
            e.preventDefault();
            const newElement = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex - 1}"][data-row-index="${rowIndex}"]`
            );
            if (newElement) {
              setFocus(currentlyFocusedCell, newElement);
            }
            break;
          }
          case 'ArrowDown': {
            e.preventDefault();
            const parent = currentlyFocusedCell.current.parentElement as HTMLDivElement;
            const firstChildOfParent = parent?.children?.[0] as HTMLDivElement;
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
              setFocus(currentlyFocusedCell, newElement);
            } else if (e.target.dataset.subcomponent) {
              const nextElementToSubComp = tableRef.current.querySelector(
                `div[data-column-index="${parseInt(e.target.dataset.columnIndexSub)}"][data-row-index="${
                  parseInt(e.target.dataset.rowIndexSub) + 1
                }"]`
              );
              setFocus(currentlyFocusedCell, nextElementToSubComp);
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
              setFocus(currentlyFocusedCell, previousRowCell);
            }
            break;
          }
        }
      }
    },
    [currentlyFocusedCell.current, tableRef.current]
  );
  if (webComponentsReactProperties.showOverlay) {
    return tableProps;
  }
  return [tableProps, { onFocus: onTableFocus, onKeyDown: onKeyboardNavigation, onBlur: onTableBlur }];
};

export const useKeyboardNavigation = (hooks) => {
  hooks.getTableProps.push(getTableProps);
};
