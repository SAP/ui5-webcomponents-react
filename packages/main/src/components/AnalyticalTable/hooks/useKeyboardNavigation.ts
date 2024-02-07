import { useCallback, useEffect, useRef } from 'react';
import { actions } from 'react-table';
import type { ReactTableHooks } from '../types/index.js';
import { getLeafHeaders } from '../util/index.js';

const CELL_DATA_ATTRIBUTES = ['visibleColumnIndex', 'columnIndex', 'rowIndex', 'visibleRowIndex'];

const getFirstVisibleCell = (target, currentlyFocusedCell, noData) => {
  if (
    target.dataset.componentName === 'AnalyticalTableContainer' &&
    target.querySelector('[data-component-name="AnalyticalTableBodyScrollableContainer"]')
  ) {
    const rowElements = target.querySelector('[data-component-name="AnalyticalTableBodyScrollableContainer"]').children;
    const middleRowCell = target.querySelector(
      `div[data-visible-column-index="0"][data-visible-row-index="${Math.round(rowElements.length / 2)}"]`
    );
    middleRowCell?.focus({ preventScroll: true });
  } else {
    const firstVisibleCell = noData
      ? target.querySelector(`div[data-visible-column-index="0"][data-visible-row-index="0"]`)
      : target.querySelector(`div[data-visible-column-index="0"][data-visible-row-index="1"]`);
    if (firstVisibleCell) {
      firstVisibleCell.tabIndex = 0;
      firstVisibleCell.focus();
      currentlyFocusedCell.current = firstVisibleCell;
    }
  }
};

function recursiveSubComponentElementSearch(element) {
  if (!element.parentElement) {
    return null;
  }
  if (element?.parentElement.dataset.subcomponent) {
    return element.parentElement;
  }
  return recursiveSubComponentElementSearch(element.parentElement);
}

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

const navigateFromActiveSubCompItem = (currentlyFocusedCell, e) => {
  setFocus(currentlyFocusedCell, recursiveSubComponentElementSearch(e.target));
};

const useGetTableProps = (tableProps, { instance: { webComponentsReactProperties, data, columns, state } }) => {
  const { showOverlay, tableRef } = webComponentsReactProperties;
  const currentlyFocusedCell = useRef<HTMLDivElement>(null);
  const noData = data.length === 0;

  useEffect(() => {
    if (showOverlay && currentlyFocusedCell.current) {
      currentlyFocusedCell.current.tabIndex = -1;
      currentlyFocusedCell.current = null;
    }
  }, [showOverlay]);

  const onTableBlur = (e) => {
    if (e.target.tagName === 'UI5-LI' || e.target.tagName === 'UI5-LI-CUSTOM') {
      currentlyFocusedCell.current = null;
    }
  };

  useEffect(() => {
    if (
      !showOverlay &&
      data &&
      columns &&
      currentlyFocusedCell.current &&
      tableRef.current &&
      tableRef.current.tabIndex !== 0 &&
      !tableRef.current.contains(currentlyFocusedCell.current)
    ) {
      currentlyFocusedCell.current = null;
      tableRef.current.tabIndex = 0;
    }
  }, [data, columns, showOverlay]);

  const onTableFocus = useCallback(
    (e) => {
      if (e.target.dataset?.emptyRowCell === 'true' || e.target.dataset.subcomponentActiveElement) {
        return;
      }
      if (e.target.dataset.subcomponent) {
        e.target.tabIndex = 0;
        e.target.focus();
        currentlyFocusedCell.current = e.target;
        return;
      }
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
            currentlyFocusedCell.current.focus({ preventScroll: true });
          } else {
            getFirstVisibleCell(e.target, currentlyFocusedCell, noData);
          }
        } else if (isFirstCellAvailable) {
          const firstCell = e.target.querySelector(
            'div[data-column-index]:not([data-column-id^="__ui5wcr__internal"][data-row-index="0"])'
          );
          firstCell.tabIndex = 0;
          firstCell.focus({ preventScroll: true });
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
      const { isRtl } = state;
      const isActiveItemInSubComponent = e.target.dataset.subcomponentActiveElement;
      // check if target is cell and if so proceed from there
      if (
        !currentlyFocusedCell.current &&
        CELL_DATA_ATTRIBUTES.every((item) => Object.keys(e.target.dataset).includes(item))
      ) {
        currentlyFocusedCell.current = e.target;
      }
      if (currentlyFocusedCell.current) {
        const columnIndex = parseInt(currentlyFocusedCell.current.dataset.columnIndex ?? '0', 10);
        const rowIndex = parseInt(
          currentlyFocusedCell.current.dataset.rowIndex ?? currentlyFocusedCell.current.dataset.subcomponentRowIndex,
          10
        );
        switch (e.key) {
          case 'End': {
            e.preventDefault();
            const visibleColumns: HTMLDivElement[] = tableRef.current.querySelector(
              `div[data-component-name="AnalyticalTableHeaderRow"]`
            ).children;

            const lastVisibleColumn = Array.from(visibleColumns)
              .slice(0)
              .reduceRight((_, cur, index, arr) => {
                const columnIndex = parseInt((cur.children?.[0] as HTMLDivElement)?.dataset.columnIndex, 10);
                if (!isNaN(columnIndex)) {
                  arr.length = 0;
                  return columnIndex;
                }
                return 0;
              }, 0);

            const newElement = tableRef.current.querySelector(
              `div[data-visible-column-index="${lastVisibleColumn}"][data-row-index="${rowIndex}"]`
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
            if (isActiveItemInSubComponent) {
              navigateFromActiveSubCompItem(currentlyFocusedCell, e);
              return;
            }
            const newElement = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex + (isRtl ? -1 : 1)}"][data-row-index="${rowIndex}"]`
            );
            if (newElement) {
              setFocus(currentlyFocusedCell, newElement);
              // scroll to show full cell if it's only partial visible
              newElement.scrollIntoView({ block: 'nearest' });
            }
            break;
          }
          case 'ArrowLeft': {
            e.preventDefault();
            if (isActiveItemInSubComponent) {
              navigateFromActiveSubCompItem(currentlyFocusedCell, e);
              return;
            }
            const newElement = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex - (isRtl ? -1 : 1)}"][data-row-index="${rowIndex}"]`
            );
            if (newElement) {
              setFocus(currentlyFocusedCell, newElement);
              // scroll to show full cell if it's only partial visible
              newElement.scrollIntoView({ block: 'nearest' });
            }
            break;
          }
          case 'ArrowDown': {
            e.preventDefault();
            if (isActiveItemInSubComponent) {
              navigateFromActiveSubCompItem(currentlyFocusedCell, e);
              return;
            }
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
            }
            break;
          }
          case 'ArrowUp': {
            e.preventDefault();
            if (isActiveItemInSubComponent) {
              navigateFromActiveSubCompItem(currentlyFocusedCell, e);
              return;
            }
            let prevRowIndex = rowIndex - 1;
            const isSubComponent = e.target.dataset.subcomponent;
            if (isSubComponent) {
              prevRowIndex++;
            }
            const previousRowCell = tableRef.current.querySelector(
              `div[data-column-index="${columnIndex}"][data-row-index="${prevRowIndex}"]`
            );
            const firstChildPrevRow = previousRowCell?.parentElement.children[0] as HTMLDivElement;
            const hasSubcomponent = firstChildPrevRow?.dataset?.subcomponent;

            if (hasSubcomponent && !isSubComponent) {
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
    [currentlyFocusedCell.current, tableRef.current, state?.isRtl]
  );
  if (showOverlay) {
    return tableProps;
  }
  return [
    tableProps,
    {
      onFocus: onTableFocus,
      onKeyDown: onKeyboardNavigation,
      onBlur: onTableBlur
    }
  ];
};

function getPayload(e, column) {
  e.preventDefault();
  e.stopPropagation();
  const clientX = e.target.getBoundingClientRect().x + e.target.getBoundingClientRect().width;
  const columnId = column.id;
  const columnWidth = column.totalWidth;
  const headersToResize = getLeafHeaders(column);
  const headerIdWidths = headersToResize.map((d) => [d.id, d.totalWidth]);
  return { clientX, columnId, columnWidth, headerIdWidths };
}

const setHeaderProps = (headerProps, { instance: { dispatch }, column }) => {
  // resize col with keyboard
  const handleKeyDown = (e) => {
    if (e.nativeEvent.shiftKey) {
      if (e.key === 'ArrowRight') {
        const payload = getPayload(e, column);
        dispatch({ type: actions.columnStartResizing, ...payload });
        dispatch({ type: actions.columnResizing, clientX: payload.clientX + 16 });
        dispatch({ type: actions.columnDoneResizing });
        return;
      }
      if (e.key === 'ArrowLeft') {
        const payload = getPayload(e, column);
        dispatch({ type: actions.columnStartResizing, ...payload });
        dispatch({ type: actions.columnResizing, clientX: payload.clientX - 16 });
        dispatch({ type: actions.columnDoneResizing });
        return;
      }
    }
  };
  return [headerProps, { onKeyDown: handleKeyDown }];
};

export const useKeyboardNavigation = (hooks: ReactTableHooks) => {
  hooks.getTableProps.push(useGetTableProps);
  hooks.getHeaderProps.push(setHeaderProps);
};
