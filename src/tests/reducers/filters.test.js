import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set up sortBy filter to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set up sortBy filter to date', () => {
  // Need to pass in state as something other than default
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set up text filter', () => {
  const textFilter = 'foo';
  const action = {
    type: 'SET_TEXT_FILTER',
    text: textFilter,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(textFilter);
});

// should set startDate filter
test('should set up startDate filter', () => {
  const dateStart = moment().startOf('month').valueOf();
  const action = {
    type: 'SET_START_DATE',
    startDate: dateStart,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(dateStart);
});

// should set endDate filter
test('should set up endDate filter', () => {
  const dateEnd = moment().endOf('month').valueOf();
  const action = {
    type: 'SET_END_DATE',
    endDate: dateEnd,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(dateEnd);
});
