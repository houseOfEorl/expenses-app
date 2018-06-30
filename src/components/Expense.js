import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ name, date, amount }) => (
    <tr>
        <td> {name} </td>
        <td> {date} </td>
        <td> {amount} </td>
    </tr>
)

Expense.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired
}

export default Expense