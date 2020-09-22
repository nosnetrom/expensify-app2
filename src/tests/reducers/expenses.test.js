import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 1000001,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: 10001,
    description: 'Extra large foobar',
    amount: 1995,
    note: '',
    createdAt: moment(1000000000).add(1, 'days').valueOf(),
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const editedExpense = {
    amount: 1699,
    description: 'Big USB stick',
    note: '128GB',
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      ...editedExpense,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(editedExpense.amount);
  expect(state[0].description).toBe(editedExpense.description);
  expect(state[0].note).toBe(editedExpense.note);
});

test('should not edit an expense if ID not found', () => {
  const editedExpense = {
    amount: 1699,
    description: 'Big USB stick',
    note: '128GB',
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: 42,
    updates: {
      ...editedExpense,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
