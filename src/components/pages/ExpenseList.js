import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../../selectors/expenses';

export const ExpenseList = (props) => (
  <table className="expenseListWrapper">
    <thead>
      <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Created On</th>
      </tr>
    </thead>
    <tbody>
      {props.expenses.length === 0 ? (
        <tr>
          <td colspan="3">No expenses found</td>
        </tr>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem {...expense} key={expense.id} />;
        })
      )}
    </tbody>
  </table>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
