export const reducer = (newState, action, prevState) => {
  const { payload } = action;
  switch (action.type) {
    case 'SET_GROUP_BY':
      return { ...prevState, groupBy: payload };
    default:
      return newState;
  }
};
