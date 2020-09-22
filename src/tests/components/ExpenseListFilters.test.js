import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const testValue = 'bill';
  wrapper.find('input').simulate('change', {
    target: {
      value: testValue,
    },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(testValue);
});

test('should sort by date', () => {
  // default value is date, so we will setProps to use the altFilters
  const value = 'date';
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(240, 'months');
  const endDate = moment(0).add(246, 'months');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
