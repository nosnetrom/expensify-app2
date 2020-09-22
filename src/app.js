import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'; // An npm pkg for CSS resets
import './styles/styles.scss'; // A performance detriment, waiting for JS to load; will be changed later
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// addExpense (water bill)
store.dispatch(
  addExpense({
    description: 'Water bill',
    note: 'Jul 2020',
    amount: 12500,
    createdAt: 1597957183000,
  })
);
store.dispatch(
  addExpense({
    description: 'Car payment',
    note: 'Aug 2020',
    amount: 35010,
    createdAt: 1598129983000,
  })
);
store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'Aug 2020',
    amount: 5010,
    createdAt: 1598302783000,
  })
);
//store.dispatch(setTextFilter('bill'));
// setTimeout(function () {
//   store.dispatch(setTextFilter('water'));
// }, 3000);
// getVisibleExpenses() to console
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
