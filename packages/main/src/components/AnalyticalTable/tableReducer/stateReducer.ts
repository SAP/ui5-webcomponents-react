import { actions } from 'react-table';

export const stateReducer = (newState, action) => {
  const { payload } = action;

  if (newState.isRtl && action.type === actions.columnResizing) {
    const { clientX } = action;
    const { startX, columnWidth, headerIdWidths } = newState.columnResizing;

    const deltaX = startX - clientX;
    const percentageDeltaX = deltaX / columnWidth;

    const newColumnWidths = {};

    headerIdWidths.forEach(([headerId, headerWidth]) => {
      newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
    });

    return {
      ...newState,
      columnResizing: {
        ...newState.columnResizing,
        columnWidths: {
          ...newState.columnResizing.columnWidths,
          ...newColumnWidths
        }
      }
    };
  }

  switch (action.type) {
    case 'TABLE_RESIZE':
      return { ...newState, tableClientWidth: payload.tableClientWidth };
    case 'VISIBLE_ROWS':
      return { ...newState, visibleRows: payload.visibleRows };
    case 'TABLE_SCROLLING_ENABLED':
      return { ...newState, isScrollable: payload.isScrollable };
    case 'SET_SELECTED_ROW_IDS':
      return { ...newState, selectedRowIds: payload.selectedRowIds };
    case 'SET_POPIN_COLUMNS':
      return { ...newState, popInColumns: payload };
    case 'INTERACTIVE_ROWS_HAVE_POPIN':
      return { ...newState, interactiveRowsHavePopIn: payload };
    case 'IS_RTL':
      return { ...newState, isRtl: payload.isRtl };
    default:
      return newState;
  }
};
