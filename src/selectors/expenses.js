import moment from 'moment';

// Redux filtering
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      // const textMatch =
      //   expense.description.toLowerCase().indexOf(text.toLowerCase()) > -1;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      // If all 3 consts == true, then we have a listable expense

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      // Use ternary function for sorting items by order
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
