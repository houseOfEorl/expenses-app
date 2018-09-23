import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense, onHandleEditRowClick  }) => (
    <tr>
        <td> {expense.id} </td>
        <td> <input type="text" value={expense.name} /> </td>
        <td> <input type="text" value={expense.date} /> </td>
        <td> <input type="text" value={expense.amount} /> </td>
        <td> <input type="text" value={expense.isCreditOrDebit} />  </td>
        <td> <input type="text" value={expense.paymentCategory} /> </td>
        <td> <input type="text" value={expense.bank} /> </td>
        <td> <input type="checkbox" checked={expense.isCreditCard} readOnly />  </td>
        <td> <input type="checkbox" checked={expense.isPaid} readOnly />  </td>
        <td> <input type="button" onClick = {() => onHandleEditRowClick(expense.id)} value="Edit" />  </td>
    </tr>
)

Expense.propTypes = {
    expense: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        isCreditOrDebit: PropTypes.string.isRequired,
        paymentCategory: PropTypes.string.isRequired,
        bank: PropTypes.string.isRequired,
        isCreditCard: PropTypes.bool.isRequired,
        isPaid: PropTypes.bool.isRequired
    }).isRequired
}

export default Expense