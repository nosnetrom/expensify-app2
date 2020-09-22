import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/pages/ExpenseForm';

test('should render default ExpenseForm', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with example data', () => {
  const wrapper = shallow(<ExpenseForm expense={{ ...expenses[0] }} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with error for invalid submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot(); // check the presubmitted form
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set expense description on change', () => {
  const value = 'My new description';
  const wrapper = shallow(<ExpenseForm expense={{ ...expenses[0] }} />);
  wrapper.find('input').at(0).simulate('change', { target: { value } });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
  const value = 'My new note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(2).simulate('change', { target: { value } });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount to a new valid value', () => {
  const value = '5.99';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', { target: { value } });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount when invalid value', () => {
  const value = '5.995';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', { target: { value } });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test('should set new date onDateChange', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on date change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
