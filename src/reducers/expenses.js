// Expenses reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        // Spread operator to take items from state and add new action.expense
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      // Check to see if ID is equal (filter out the match)
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            // Grab expense object data & override with passed in action.updates data
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

