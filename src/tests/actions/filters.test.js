import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter,
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0),
  });
});

test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

test('should generate set Text Filter object to default empty string', () => {
  const action = setTextFilter(); // passing nothing in to get default empty string back
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should generate set Text Filter object to my string variable', () => {
  const strVar = 'foo';
  const action = setTextFilter(strVar);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: strVar,
  });
});
