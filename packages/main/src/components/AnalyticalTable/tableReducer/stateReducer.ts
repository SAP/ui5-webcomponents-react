export const stateReducer = (newState, action, prevState) => {
  const { payload } = action;
  switch (action.type) {
    case 'SET_GROUP_BY':
      return { ...prevState, groupBy: payload };
    case 'SET_SELECTED_ROWS':
      return { ...prevState, selectedRowIds: action.selectedIds };
    case 'SET_HIDDEN_COLUMNS':
      return { ...prevState, hiddenColumns: action.hiddenColumns };
    case 'TABLE_RESIZE':
      return { ...prevState, tableClientWidth: payload.tableClientWidth };
    default:
      return newState;
  }
};
