import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import type { ReactTableHooks } from '../types/index.js';
import { CELL_PADDING_PX } from './useDynamicColumnWidths.js';

function setResizerProps(...params) {
  const [props, { instance, header }] = params;
  const { dispatch, virtualRowsRange, rows, webComponentsReactProperties, state } = instance;
  const { uniqueId, onAutoResize } = webComponentsReactProperties;
  const { autoResizable, id: accessor } = header;

  if (!document || !autoResizable || !rows.length || !virtualRowsRange) {
    return props;
  }

  return {
    ...props,
    onDoubleClick: (e) => {
      let largest = getMeasureMax(accessor, uniqueId, virtualRowsRange, state.isRtl);
      largest = largest > DEFAULT_COLUMN_WIDTH ? largest : DEFAULT_COLUMN_WIDTH;
      onAutoResize(
        enrichEventWithDetails(e, {
          accessor,
          width: largest
        })
      );
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

function getMeasureMax(accessor, uniqueId, virtualRowsRange, isRtl) {
  let maxWidth = 0;
  const firstRowQuery = `[data-component-name="AnalyticalTableBodyScrollableContainer"][data-react-id="${uniqueId}"] [data-virtual-row-index="${virtualRowsRange.startIndex}"]`;
  const rowsDOM = document.querySelectorAll(`${firstRowQuery}, ${firstRowQuery} ~ [data-virtual-row-index]`);
  const start = virtualRowsRange.startIndex;
  const end = virtualRowsRange.endIndex;

  for (let i = 0; i <= end - start; i++) {
    const cellTextElement: HTMLSpanElement = rowsDOM[i]?.querySelector(`[data-id="${accessor}"]`);
    let currWidth = 0;
    if (!cellTextElement) {
      continue;
    }
    const computedStyle = getComputedStyle(cellTextElement);
    currWidth += cellTextElement.scrollWidth;
    // cannot use `offsetLeft` for RTL direction
    currWidth += !isRtl
      ? cellTextElement.offsetLeft
      : cellTextElement.parentElement.getBoundingClientRect().right - cellTextElement.getBoundingClientRect().right;
    currWidth += parseFloat(computedStyle.marginInlineEnd);
    currWidth += parseFloat(computedStyle.borderInlineEndWidth);
    currWidth += CELL_PADDING_PX;

    maxWidth = maxWidth > currWidth ? maxWidth : currWidth;
  }

  return Math.ceil(maxWidth);
}

export const useAutoResize = (hooks: ReactTableHooks) => {
  hooks.getResizerProps.push(setResizerProps);
};

useAutoResize.pluginName = 'useAutoResize';
