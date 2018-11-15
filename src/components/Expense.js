import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense, handleDeleteRow, handleChangeCell  }) => (
    <tr>
        <td> {expense.id} </td>
        <td> <input type="text" name="name" defaultValue={expense.name} onChange={handleChangeCell} /> </td>
        <td> <input type="date" name="date" defaultValue={expense.date} onChange={handleChangeCell} /> </td>
        <td> <input type="number" name="amount" defaultValue={expense.amount} onChange={handleChangeCell} /> </td>
        <td> <input type="text" name="isCreditOrDebit" defaultValue={expense.isCreditOrDebit} onChange={handleChangeCell} />  </td>
        <td> <input type="text" name="paymentCategory" defaultValue={expense.paymentCategory} onChange={handleChangeCell} /> </td>
        <td> <input type="text" name="bank" defaultValue={expense.bank} onChange={handleChangeCell} /> </td>
        <td> <input type="checkbox" name="isCreditCard" checked={expense.isCreditCard} onChange={handleChangeCell} />  </td>
        <td> <input type="checkbox" name="isPaid" checked={expense.isPaid} onChange={handleChangeCell} />  </td>
        <td> <input type="button" onClick = {handleDeleteRow} value="Delete" />  </td>
    </tr>
)

Expense.propTypes = {
    expense: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        isCreditOrDebit: PropTypes.string.isRequired,
        paymentCategory: PropTypes.string.isRequired,
        bank: PropTypes.string.isRequired,
        isCreditCard: PropTypes.bool.isRequired,
        isPaid: PropTypes.bool.isRequired
    }).isRequired
}

export default Expense