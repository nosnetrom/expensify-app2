import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const altFilters = {
  text: 'Lunch',
  sortBy: 'amount',
  startDate: moment(1000000000).subtract(1, 'minute'),
  endDate: moment(1000000000).add(30, 'days'),
};

export { filters, altFilters };
