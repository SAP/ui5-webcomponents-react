import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import type { ReactTableHooks } from '../types/index.js';
import { CELL_PADDING_PX } from './useDynamicColumnWidths.js';

function setResizerProps(props, { instance, header }) {
  const { dispatch, virtualRowsRange, rows, webComponentsReactProperties } = instance;
  const { onAutoResize, tableRef, isTreeTable } = webComponentsReactProperties;
  const { autoResizable, id: accessor } = header;

  if (!document || !tableRef.current || !autoResizable || !rows.length || !virtualRowsRange) {
    return props;
  }

  return {
    ...props,
    onDoubleClick: (e) => {
      let largest = getMeasureMax(accessor, virtualRowsRange, tableRef.current, isTreeTable);
      if (largest === -1) {
        return;
      }
      largest = largest > DEFAULT_COLUMN_WIDTH ? largest : DEFAULT_COLUMN_WIDTH;
      if (typeof onAutoResize === 'function') {
        onAutoResize(
          enrichEventWithDetails(e, {
            columnId: accessor,
            width: largest
          })
        );
      }
      if (e.defaultPrevented) {
        return;
      }
      dispatch({
        type: 'AUTO_RESIZE',
        payload: { [accessor]: largest }
      });
    }
  };
}

function calculateContentWidth(cell) {
  let contentWidth = 0;
  Array.from<HTMLElement>(cell.children).forEach((child) => {
    contentWidth += child.scrollWidth;
  });
  return contentWidth;
}

function getMeasureMax(accessor, virtualRowsRange, tableNode, isTreeTable): number {
  let maxWidth = 0;
  let cellWithMaxWidthContent: HTMLElement | null | false = null;

  /**
   * recursively find the largest visible cell of the current column
   */
  function recursiveFindMaxWidth(row, accessor, remainingRows) {
    if (!row || remainingRows === 0) {
      return;
    }
    const cellNode = row.querySelector(`[data-column-id-cell="${accessor}"]`);
    const cellTextElement = cellNode?.querySelector(`[data-column-id-cell-text="${accessor}"]`);

    if (cellTextElement) {
      // for tree tables the indent (margin) has to be taken into account
      if (isTreeTable && cellNode?.dataset.isFirstColumn) {
        const cellWidth = calculateContentWidth(cellNode);
        if (maxWidth < cellWidth) {
          maxWidth = cellWidth;
          cellWithMaxWidthContent = false;
        }
      } else {
        const currWidth = cellTextElement.scrollWidth;
        if (maxWidth < currWidth) {
          maxWidth = currWidth;
          // only use the cell with the largest content for measuring
          cellWithMaxWidthContent = cellNode;
        }
      }
    }
    // if custom content (`Cell`) is rendered, the `cellTextElement` is not available.
    // In this case only the content of the first visible cell is used for measuring
    if (cellWithMaxWidthContent === null) {
      cellWithMaxWidthContent = cellNode;
    }

    recursiveFindMaxWidth(row.nextElementSibling, accessor, remainingRows - 1);
  }

  const firstRow = tableNode.querySelector(`[data-virtual-row-index="${virtualRowsRange.startIndex}"]`);
  recursiveFindMaxWidth(firstRow, accessor, virtualRowsRange.endIndex - virtualRowsRange.startIndex);

  if (cellWithMaxWidthContent === false) {
    return Math.ceil(maxWidth + CELL_PADDING_PX + 2 /* account for rounding error and border */);
  }

  if (!cellWithMaxWidthContent) {
    return -1;
  }

  return Math.ceil(
    calculateContentWidth(cellWithMaxWidthContent) + CELL_PADDING_PX + 2 /* account for rounding error and border */
  );
}

const setCellProps = (
  props,
  {
    cell: {
      column: { id }
    }
  }
) => {
  return [props, { ['data-column-id-cell']: id }];
};

export const useAutoResize = (hooks: ReactTableHooks) => {
  hooks.getResizerProps.push(setResizerProps);
  hooks.getCellProps.push(setCellProps);
};

useAutoResize.pluginName = 'useAutoResize';
