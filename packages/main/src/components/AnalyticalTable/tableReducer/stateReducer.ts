import { actions } from 'react-table';

export const stateReducer = (prevState, action) => {
  const { payload } = action;

  if (prevState.isRtl && action.type === actions.columnResizing) {
    const { clientX } = action;
    const { startX, columnWidth, headerIdWidths } = prevState.columnResizing;

    const deltaX = startX - clientX;
    const percentageDeltaX = deltaX / columnWidth;

    const newColumnWidths = {};

    headerIdWidths.forEach(([headerId, headerWidth]) => {
      newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
    });

    return {
      ...prevState,
      columnResizing: {
        ...prevState.columnResizing,
        columnWidths: {
          ...prevState.columnResizing.columnWidths,
          ...newColumnWidths
        }
      }
    };
  }

  switch (action.type) {
    case 'TABLE_RESIZE':
      return { ...prevState, tableClientWidth: payload.tableClientWidth };
    case 'VISIBLE_ROWS':
      return { ...prevState, visibleRows: payload.visibleRows };
    case 'TABLE_SCROLLING_ENABLED':
      return { ...prevState, isScrollable: payload.isScrollable };
    case 'SET_SELECTED_ROW_IDS':
      return { ...prevState, selectedRowIds: payload.selectedRowIds };
    case 'SET_POPIN_COLUMNS':
      return { ...prevState, popInColumns: payload };
    case 'INTERACTIVE_ROWS_HAVE_POPIN':
      return { ...prevState, interactiveRowsHavePopIn: payload };
    case 'IS_RTL':
      return { ...prevState, isRtl: payload.isRtl };
    case 'SUB_COMPONENTS_HEIGHT':
      return { ...prevState, subComponentsHeight: payload };
    case 'TABLE_COL_RESIZED':
      return { ...prevState, tableColResized: payload };
    case 'SELECT_ROW_CB':
      return { ...prevState, selectedRowPayload: payload };
    case 'ROW_COLLAPSED_FLAG':
      return { ...prevState, rowCollapsed: payload };
    default:
      return prevState;
  }
};
