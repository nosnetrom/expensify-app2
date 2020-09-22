import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// Objects are never equal using ===; use toEqual() method instead

test('Should set up removeExpense action object', () => {
  const action = removeExpense({ id: '24680' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '24680',
  });
});

test('Should set up editExpense action object', () => {
  const action = editExpense('24680', { note: 'My new note', amount: 2495 });
  expect(action).toEqual({
    id: '24680',
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'My new note',
      amount: 2495,
    },
  });
});

test('Should set up addExpense action object with provided values', () => {
  const expenseData = {
    description: 'Foobar',
    amount: 4995,
    createdAt: 10000000000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
      note: '',
    },
  });
});

test('Should set up addExpense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
    },
  });
});
