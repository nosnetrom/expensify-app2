import React from 'react';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/pages/ExpenseListItem';

test('should render ExpenseListItem selected from expenses', () => {
  const item = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...item} />);
  expect(wrapper).toMatchSnapshot();
});
