const expensesReducerDefaultState = [];

// Expenses reducer
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      //console.log(action.expense);
      return [...state, action.expense];
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          // spread the existing expense object, then overwrite with the object as passed in
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
