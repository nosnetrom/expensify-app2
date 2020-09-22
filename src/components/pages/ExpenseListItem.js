import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const amountProcessor = (fullAmt) => {
  let extension = '';
  const amt = parseInt(fullAmt) / 100;
  if (fullAmt % 100 == 0) {
    extension = '.00';
  } else if (fullAmt % 10 == 0) {
    extension = '0';
  }
  return `${amt}${extension}`;
};

const friendlyDate = (d) => {
  const fd = moment(d).format('DD MMM YYYY');
  return fd;
};

// Export a stateless functional component
//  - description, amount, createdAt
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <tr className="expenseListItemWrapper">
    <td className="itemDescription">
      <Link to={`/edit/${id}`}>{description}</Link>
    </td>
    <td className="itemAmount">{amountProcessor(amount)}</td>
    <td className="itemCreatedAt">{friendlyDate(createdAt)}</td>
  </tr>
);

export default ExpenseListItem;
