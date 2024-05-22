import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import type { ReactTableHooks } from '../types/index.js';
import { CELL_PADDING_PX } from './useDynamicColumnWidths.js';

function setResizerProps(props, { instance, header }) {
  const { dispatch, virtualRowsRange, rows, webComponentsReactProperties } = instance;
  const { onAutoResize, tableRef } = webComponentsReactProperties;
  const { autoResizable, id: accessor } = header;

  if (!document || !tableRef.current || !autoResizable || !rows.length || !virtualRowsRange) {
    return props;
  }

  return {
    ...props,
    onDoubleClick: (e) => {
      let largest = getMeasureMax(accessor, virtualRowsRange, tableRef.current);
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

function getMeasureMax(accessor, virtualRowsRange, tableNode): number {
  let maxWidth = 0;
  let cellWithMaxWidthContent = null;

  /**
   * recursively find the largest visible cell of the current column
   */
  function recursiveFindMaxWidth(row, accessor, remainingRows) {
    if (!row || remainingRows === 0) {
      return;
    }
    const cellNode = row.querySelector(`[data-column-id-cell="${accessor}"]`);
    const cellTextElement = cellNode.querySelector(`[data-column-id-cell-text="${accessor}"]`);

    if (cellTextElement) {
      const currWidth = cellTextElement.scrollWidth;
      if (maxWidth < currWidth) {
        maxWidth = currWidth;
        // only use the cell with the largest content for measuring
        cellWithMaxWidthContent = cellNode;
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

  if (!cellWithMaxWidthContent) {
    return -1;
  }

  let contentWidth = 0;
  Array.from<HTMLElement>(cellWithMaxWidthContent.children).forEach((child) => {
    contentWidth += child.scrollWidth;
  });

  return Math.ceil(contentWidth + CELL_PADDING_PX + 2 /* account for rounding error and border */);
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
