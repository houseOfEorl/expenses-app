import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expense, handleDeleteRow, handleChangeCell  }) => (
    <tr>
        <td> {expense.ExpensesID} </td>
        <td> <input type="text" name="Name" defaultValue={expense.Name} onChange={handleChangeCell} /> </td>
        <td> <input type="date" name="ExpenseDate" defaultValue={expense.ExpenseDate.substring(0, 10)} onChange={handleChangeCell} /> </td>
        <td> <input type="number" name="Amount" defaultValue={expense.Amount} onChange={handleChangeCell} /> </td>
        {/* <td> 
            <select name="isCreditOrDebit" defaultValue={expense.isCreditOrDebit} onChange={handleChangeCell}>
                <option value="">Select...</option>
                <option value="C">Credit</option>
                <option value="D">Debit</option>
            </select>
        </td> */}
        <td> 
            <select name="ExpensesTypeID" defaultValue={expense.ExpensesTypeID} onChange={handleChangeCell}>
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
            <select name="BankTypeID" defaultValue={expense.BankTypeID} onChange={handleChangeCell}>
                <option value="">Select...</option>
                <option value="1">Scotiabank</option>
                <option value="2">Tangerine</option>
            </select>
        </td>
        <td> <input type="checkbox" name="isCreditCard" checked={expense.isCreditCard} onChange={handleChangeCell} />  </td>
        <td> <input type="checkbox" name="isPaid" checked={expense.isPaid} onChange={handleChangeCell} />  </td>
        <td> <input type="button" onClick = {handleDeleteRow} value="Delete" />  </td>
    </tr>
)

Expense.propTypes = {
    expense: PropTypes.shape({
        ExpensesID: PropTypes.number.isRequired,
        Name: PropTypes.string.isRequired,
        ExpenseDate: PropTypes.string.isRequired,
        Amount: PropTypes.number.isRequired,
        CreditOrDebit: PropTypes.string.isRequired,
        ExpensesTypeID: PropTypes.number.isRequired,
        BankTypeID: PropTypes.number.isRequired,
        isCreditCard: PropTypes.bool.isRequired,
        isPaid: PropTypes.bool.isRequired
    }).isRequired
}

export default Expense