import { deepCompare } from '../util/deepCompare';

export const stateReducer = (newState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SET_GROUP_BY':
      if (deepCompare(newState.groupBy, payload)) {
        return newState;
      }
      return { ...newState, groupBy: payload };
    case 'TABLE_RESIZE':
      return { ...newState, tableClientWidth: payload.tableClientWidth };
    case 'TABLE_SCROLLING_ENABLED':
      return { ...newState, isScrollable: payload.isScrollable };
    default:
      return newState;
  }
};
