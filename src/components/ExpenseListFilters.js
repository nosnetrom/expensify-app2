import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (event) => {
    this.props.setTextFilter(event.target.value);
  };
  onSortChange = (event) => {
    event.target.value == 'date'
      ? this.props.sortByDate()
      : this.props.sortByAmount();
  };
  render() {
    return (
      <div className="ExpenseListFiltersWrapper">
        <section>
          <label htmlFor="txtFilterBy">Filter by </label>
          <input
            type="text"
            value={this.props.filters.text}
            name="txtFilterBy"
            placeholder="Enter filter word"
            onChange={this.onTextChange}
          />
        </section>
        <section>
          <label htmlFor="ddlSortBy">Sort by </label>
          <select
            name="ddlSortBy"
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </section>
        <section>
          <label htmlFor="startDate">Dates </label>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            regular="true"
            numberOfMonths="1"
            isOutsideRange={() => false}
            showClearDates="true"
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
