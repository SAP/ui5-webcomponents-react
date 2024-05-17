import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import type { ReactTableHooks } from '../types/index.js';
import { CELL_PADDING_PX } from './useDynamicColumnWidths.js';

const handleAutoResize = (props, { instance }) => {
  return {
    ...props,
    onDoubleClick: (e, start, end, accessor, onAutoResize, isTreeTable, grouped) => {
      if (!instance.rows.length) return;
      const dispatch = instance.dispatch;
      let rowSlice = instance.rows.slice(start, end + 1);
      if (isTreeTable || grouped) rowSlice = getExpandedRowsRecursive(rowSlice);
      let largest = getMeasureMax(rowSlice, accessor, instance.webComponentsReactProperties.uniqueId);
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
};

const getMeasureMax = (rowSlice, accessor, uniqueId) => {
  let maxWidth = 0;
  for (let i = 0; i < rowSlice.length; i++) {
    const element = document.getElementById(`cell_${rowSlice[i].id}_${accessor}-${uniqueId}`);
    let currWidth = 0;
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
};

const getExpandedRowsRecursive = (rowSlice, allRows = []) => {
  if (!rowSlice.length) return allRows;
  allRows = [...allRows, ...rowSlice];
  const nextRows = [];
  // Iterate to find expanded rows then call recursively
  for (let i = 0; i < rowSlice.length; i++) {
    if (rowSlice[i].isExpanded) {
      nextRows.push(...rowSlice[i].subRows);
    }
  }
  return getExpandedRowsRecursive(nextRows, allRows);
};

export const useAutoResize = (hooks: ReactTableHooks) => {
  hooks.getResizerProps.push(handleAutoResize);
};

useAutoResize.pluginName = 'useAutoResize';
