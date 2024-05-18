import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import type { ReactTableHooks } from '../types/index.js';
import { CELL_PADDING_PX } from './useDynamicColumnWidths.js';

function setResizerProps(...params) {
  const [props, { instance, header }] = params;
  const { dispatch, virtualRowsRange, rows, webComponentsReactProperties } = instance;
  const { uniqueId, onAutoResize } = webComponentsReactProperties;
  const { autoResizable, id: accessor } = header;

  if (!document || !autoResizable || !rows.length || !virtualRowsRange) {
    return props;
  }

  return {
    ...props,
    onDoubleClick: (e) => {
      // isRtl not currently implemented
      //  let largest = getMeasureMax(accessor, uniqueId, virtualRowsRange, state.isRtl);
      let largest = getMeasureMax(accessor, uniqueId, virtualRowsRange);
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

// Currently not implementing isRtl logic
//function getMeasureMax(accessor, uniqueId, virtualRowsRange, isRtl) {
function getMeasureMax(accessor, uniqueId, virtualRowsRange) {
  let maxWidth = 0;
  // We won't need to know it is the first row if we use this measuring method
  const rowsDOM = document.querySelectorAll(
    `[data-component-name="AnalyticalTableBodyScrollableContainer"][data-react-id="${uniqueId}"]`
  );
  const elements = rowsDOM[0].querySelectorAll(`[dataid="${accessor}"]`);
  const start = virtualRowsRange.startIndex;
  const end = virtualRowsRange.endIndex;

  for (let i = 0; i <= end - start; i++) {
    // Column based dataids give us the cell
    // This is an attempt to support other types rather than only text
    const element = elements[i];
    let currWidth = 0;
    if (!element) {
      continue;
    }

    // This inner loop is not ideal, but the number of
    // children of a cell should be low.

    // I do not know how this should be adapted for isRtl
    // But, I can look into isRtl if we prefer this type of measuring
    const children = element.children;
    for (let j = 0; j < children.length; j++) {
      const computedStyle = getComputedStyle(children[j]);
      currWidth += children[j].scrollWidth;
      currWidth += parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
      currWidth += parseFloat(computedStyle.borderLeftWidth) + parseFloat(computedStyle.borderRightWidth);
    }
    currWidth = currWidth + CELL_PADDING_PX;
    maxWidth = maxWidth > currWidth ? maxWidth : currWidth;
  }

  return Math.ceil(maxWidth);
}

export const useAutoResize = (hooks: ReactTableHooks) => {
  hooks.getResizerProps.push(setResizerProps);
};

useAutoResize.pluginName = 'useAutoResize';
