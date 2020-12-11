export const stateReducer = (newState, action) => {
  const { payload } = action;

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
    default:
      return newState;
  }
};
