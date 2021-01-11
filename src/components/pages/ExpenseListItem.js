import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {amountProcessor, friendlyDate} from '../misc';

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
