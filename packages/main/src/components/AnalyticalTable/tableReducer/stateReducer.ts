export const stateReducer = (newState, action, prevState) => {
  const { payload } = action;
  switch (action.type) {
    case 'SET_GROUP_BY':
      return { ...prevState, groupBy: payload };
    case 'SET_SELECTED_ROWS':
      return { ...prevState, selectedRowIds: action.selectedIds };
    default:
      return newState;
  }
};
