import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense, handleDeleteRow, handleChangeCell  }) => (
    <tr>
        <td> {expense.id} </td>
        <td> <input type="text" name="name" defaultValue={expense.name} onChange={handleChangeCell} /> </td>
        <td> <input type="date" name="date" defaultValue={expense.date} onChange={handleChangeCell} /> </td>
        <td> <input type="number" name="amount" defaultValue={expense.amount} onChange={handleChangeCell} /> </td>
        {/* <td> 
            <select name="isCreditOrDebit" defaultValue={expense.isCreditOrDebit} onChange={handleChangeCell}>
                <option value="">Select...</option>
                <option value="C">Credit</option>
                <option value="D">Debit</option>
            </select>
        </td> */}
        <td> 
            <select name="paymentCategory" defaultValue={expense.isCreditOrDebit} onChange={handleChangeCell}>
                <option value="">Select...</option>
                <option value="1">basic</option>
                <option value="2">investiment</option>
                <option value="3">credit card</option>
                <option value="4">role</option>
                <option value="5">grocery</option>
                <option value="6">others</option>
                <option value="7">restaurant</option>
                <option value="8">pets</option>
                <option value="9">health</option>
            </select>
        </td>
        <td> 
            <select name="bank" defaultValue={expense.isCreditOrDebit} onChange={handleChangeCell}>
                <option value="">Select...</option>
                <option value="Scotiabank">Scotiabank</option>
                <option value="Tangerine">Tangerine</option>
            </select>
        </td>
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