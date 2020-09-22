import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from '../ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div className="dashboardRouteWrapper">
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
