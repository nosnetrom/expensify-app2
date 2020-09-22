import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const amountProcessor = (fullAmt) => {
  let extension = '';
  const amt = parseInt(fullAmt) / 100;
  if (fullAmt % 100 == 0) {
    extension = '.00';
  } else if (fullAmt % 10 == 0) {
    extension = '0';
  }
  return `${amt}${extension}`;
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? amountProcessor(props.expense.amount) : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault(); // To prevent page refresh
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please complete the form with valid values.',
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div className="expenseFormWrapper">
        {this.state.error && <p className="pError">{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <section>
            <label htmlFor="txtDescription">Description</label>
            <input
              type="text"
              name="txtDescription"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
            ></input>
          </section>
          <section>
            <label htmlFor="txtAmount">Amount</label>
            <input
              type="text"
              name="txtAmount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            ></input>
          </section>
          <section>
            <label htmlFor="date">Date</label>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              anchorDirection="right"
              isOutsideRange={() => false}
            />
          </section>
          <section>
            <label htmlFor="txtNote">Note</label>
            <input
              type="text"
              name="txtNote"
              value={this.state.note}
              onChange={this.onNoteChange}
            ></input>
          </section>
          <button type="submit" id="btnSubmit">
            Submit this expense
          </button>
        </form>
      </div>
    );
  }
}
