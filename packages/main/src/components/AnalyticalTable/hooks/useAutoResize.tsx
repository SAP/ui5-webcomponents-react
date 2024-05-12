import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { DEFAULT_COLUMN_WIDTH } from '../defaults/Column/index.js';
import type { ReactTableHooks } from '../types/index.js';
import { CELL_PADDING_PX } from './useDynamicColumnWidths.js';

const handleAutoResize = (props, { instance }) => {
  return {
    ...props,
    onDoubleClick: (e, start, end, accessor, onAutoResize) => {
      // Find first in column to compare to accessor
      let columnFirst;
      const { columnOrder } = instance.state;
      let colOrder = [];
      if (columnOrder.length) {
        colOrder = columnOrder.filter(
          (col) =>
            col !== '__ui5wcr__internal_selection_column' &&
            col !== '__ui5wcr__internal_highlight_column' &&
            col !== '__ui5wcr__internal_navigation_column'
        );
        columnFirst = colOrder[0];
      }
      if (!columnFirst) {
        colOrder = instance.visibleColumns?.filter(
          (col) =>
            col.id !== '__ui5wcr__internal_selection_column' &&
            col.id !== '__ui5wcr__internal_highlight_column' &&
            col.id !== '__ui5wcr__internal_navigation_column'
        );
        columnFirst = colOrder[0].id;
      }

      // Undefined accessor should not occur but checking to be safe
      columnFirst = columnFirst ? columnFirst === accessor : false;

      const rows = instance.rows;
      const dispatch = instance.dispatch;
      const rowSlice = rows.slice(start, end);
      let largest = getContentPxMax(rowSlice, accessor, instance?.webComponentsReactProperties.uniqueId, columnFirst);
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

function getContentPxMax(rowSlice, accessor, uniqueId, isFirstColumn) {
  let high = 0,
    current,
    ruler,
    expand,
    expandPx = 0,
    style,
    margin = 0;

  // Check for Expandable Row
  // If found in range: All rows treated as expandable
  if (isFirstColumn) {
    expand = document.querySelector(`[id^="scaleModeHelperExpand-${uniqueId}"]`);
    if (expand) {
      style = getComputedStyle(expand, null);
      margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      margin = margin > 0 ? margin : 0;
    }
    console.log(margin);
    expandPx = expand ? expand.offsetWidth + margin : 0 + margin;
  }

  for (let i = 0; i < rowSlice.length; i++) {
    const dataPoint = rowSlice[i]?.values?.[accessor];
    if (dataPoint) {
      ruler = ruler ? ruler : document.getElementById(`scaleModeHelper-${uniqueId}`);
      if (ruler) {
        ruler.innerHTML = `${dataPoint}`;
        current = ruler.scrollWidth + CELL_PADDING_PX + expandPx;
      } else current = 0;
      high = high > current ? high : current;
    }
  }
  return high ?? 0;
}

export const useAutoResize = (hooks: ReactTableHooks) => {
  hooks.getResizerProps.push(handleAutoResize);
};

useAutoResize.pluginName = 'useAutoResize';
