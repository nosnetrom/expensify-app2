import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpensesSummary with a single expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount = {1} expenseTotal = {1498} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount = {2} expenseTotal = {1498} />);
    expect(wrapper).toMatchSnapshot();
});
