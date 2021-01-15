import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from '../ExpenseListFilters';
import ExpenseSummary from '../ExpenseSummary';

const ExpenseDashboardPage = () => (
  <div className="dashboardRouteWrapper">
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
