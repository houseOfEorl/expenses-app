import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ id, name, date, amount, isCreditOrDebit, paymentCategory, bank, isCreditCard, isPaid  }) => (
    <tr>
        <td> {id} </td>
        <td> {name} </td>
        <td> {date} </td>
        <td> {amount} </td>
        <td> {isCreditOrDebit} </td>
        <td> {paymentCategory} </td>
        <td> {bank} </td>
        <td> <input type="checkbox" checked={isCreditCard} readOnly />  </td>
        <td> <input type="checkbox" checked={isPaid} readOnly />  </td>
        <td> <input type="button" />  </td>
    </tr>
)

Expense.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    isCreditOrDebit: PropTypes.string.isRequired,
    paymentCategory: PropTypes.string.isRequired,
    bank: PropTypes.string.isRequired,
    isCreditCard: PropTypes.bool.isRequired,
    isPaid: PropTypes.bool.isRequired
}

export default Expense