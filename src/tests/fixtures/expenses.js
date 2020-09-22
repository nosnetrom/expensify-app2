import moment from 'moment';

// TEST DATA
export default [
  {
    id: 1,
    description: 'USB stick',
    note: '16GB',
    amount: 899,
    createdAt: moment(1000000000).valueOf(),
  },
  {
    id: 2,
    description: 'Reeds',
    note: 'Alto',
    amount: 2500,
    createdAt: moment(1000000000).subtract(3, 'days').valueOf(),
  },
  {
    id: 3,
    description: 'Lunch',
    note: 'Chick-Fil-A',
    amount: 749,
    createdAt: moment(1000000000).add(3, 'days').valueOf(),
  },
];
