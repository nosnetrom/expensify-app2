import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions to be set
// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate,
});
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate,
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

// Expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
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

// Filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

// Redux filtering
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;
      // const textMatch =
      //   expense.description.toLowerCase().indexOf(text.toLowerCase()) > -1;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      // If all 3 consts == true, then we have a listable expense

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      // Use ternary function for sorting items by order
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// stpre.dispatch() can return the ID of the created object
const exp01 = store.dispatch(
  addExpense({
    description: 'Rent',
    note: '',
    amount: 5000,
    createdAt: -10000,
  })
);

const exp02 = store.dispatch(
  addExpense({
    description: 'Coffee',
    note: '',
    amount: 1000,
    createdAt: 10000,
  })
);

// store.dispatch(removeExpense({ id: exp01.expense.id }));
// store.dispatch(editExpense(exp02.expense.id, { amount: 4500 }));

// store.dispatch(setTextFilter('Another'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));
store.dispatch(setTextFilter('r'));

// const demoState = {
//   expenses: [
//     {
//       id: 'asdfjkl;',
//       description: 'April mortgage',
//       note: 'One of many to come',
//       amount: 240000,
//       createdAt: 0,
//     },
//   ],
//   filters: {
//     text: 'Mortgage',
//     sortBy: 'amount', //date or amount
//     startDate: undefined,
//     endDate: undefined,
//   },
// };

// const user = {
//   name: 'JMoreTea',
//   age: 39,
// };
// // Need to modify .babelrc to use spread operator on objects
// console.log({
//   ...user,
//   location: 'Dallas',
//   age: 49,
// });
