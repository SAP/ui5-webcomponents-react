import { actions } from 'react-table';

export const stateReducer = (state, action, _prevState, instance) => {
  const { payload } = action;

  if (state.isRtl && action.type === actions.columnResizing) {
    const { clientX } = action;
    const { startX, columnWidth, headerIdWidths } = state.columnResizing;

    const deltaX = startX - clientX;
    const percentageDeltaX = deltaX / columnWidth;

    const newColumnWidths = {};

    headerIdWidths.forEach(([headerId, headerWidth]) => {
      newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
    });

    return {
      ...state,
      columnResizing: {
        ...state.columnResizing,
        columnWidths: {
          ...state.columnResizing.columnWidths,
          ...newColumnWidths
        }
      }
    };
  }
  switch (action.type) {
    case 'toggleRowExpanded':
      // this flag disables scrolling to the top of the table if a table is collapsed
      if (!state.expanded[action.id]) {
        instance.dispatch({
          type: 'ROW_COLLAPSED_FLAG',
          payload: true
        });
      }
      return state;
    case 'TABLE_RESIZE':
      // tableClientWidth is misleading, as only when scaled the `clientWidth` is used. In all other cases `getBoundingClientRect` is measuring the width.
      return { ...state, tableClientWidth: payload.tableClientWidth };
    case 'VISIBLE_ROWS':
      return { ...state, visibleRows: payload.visibleRows };
    case 'TABLE_SCROLLING_ENABLED':
      return { ...state, isScrollable: payload.isScrollable };
    case 'SET_SELECTED_ROW_IDS':
      return { ...state, selectedRowIds: payload.selectedRowIds };
    case 'SET_POPIN_COLUMNS':
      return { ...state, popInColumns: payload };
    case 'INTERACTIVE_ROWS_HAVE_POPIN':
      return { ...state, interactiveRowsHavePopIn: payload };
    case 'IS_RTL':
      return { ...state, isRtl: payload.isRtl };
    case 'SUB_COMPONENTS_HEIGHT':
      return { ...state, subComponentsHeight: payload };
    case 'TABLE_COL_RESIZED':
      return { ...state, tableColResized: payload };
    case 'SELECT_ROW_CB':
      return { ...state, selectedRowPayload: payload };
    case 'ROW_COLLAPSED_FLAG':
      return { ...state, rowCollapsed: payload };
    case 'COLUMN_DND_START':
      return { ...state, dndColumn: payload };
    case 'COLUMN_DND_END':
      return { ...state, dndColumn: '' };
    // fallback if the component wasn't ready yet for scrolling (elements are not initialized), e.g. when calling `.scrollToItem` on mount
    case 'TRIGGER_PROG_SCROLL':
      return { ...state, triggerScroll: payload };
    case 'AUTO_RESIZE':
      return {
        ...state,
        columnResizing: {
          ...state.columnResizing,
          columnWidths: {
            ...state.columnResizing.columnWidths,
            ...payload
          }
        }
      };
    default:
      return state;
  }
};
