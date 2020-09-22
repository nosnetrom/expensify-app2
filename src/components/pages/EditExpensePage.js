import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../pages/ExpenseForm';
import { editExpense, removeExpense } from '../../actions/expenses';
import { render } from 'enzyme';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/'); // rerouted to dashboard
  };
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/'); // rerouted to dashboard
  };
  render() {
    return (
      <div className="editExpenseRouteWrapper">
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button type="button" className="btnDeleteItem" onClick={this.onRemove}>
          Delete this expense
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data)),
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
