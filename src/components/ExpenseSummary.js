import React from 'react';
import { connect } from 'react-redux';
import { amountProcessor } from './misc';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const expenseSuffix = expenseCount === 1 ? '' : 's';
    const expenseTotalFormatted = amountProcessor(expenseTotal);
    return (
        <div className="ExpenseSummaryWrapper">
            <h2>
                Viewing {expenseCount} expense{expenseSuffix} totalling {expenseTotalFormatted}
            </h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
