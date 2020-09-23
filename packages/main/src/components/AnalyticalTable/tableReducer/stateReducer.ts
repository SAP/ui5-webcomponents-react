export const stateReducer = (newState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'TABLE_RESIZE':
      return { ...newState, tableClientWidth: payload.tableClientWidth };
    case 'TABLE_SCROLLING_ENABLED':
      return { ...newState, isScrollable: payload.isScrollable };
    case 'SET_SELECTED_ROW_IDS':
      return { ...newState, selectedRowIds: payload.selectedRowIds };
    default:
      return newState;
  }
};
