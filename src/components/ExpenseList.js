import React from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({ expenses, handleDeleteRow, handleChangeCell }) => (
    <table className="table">
        <tbody>
        <tr>
            <td> Id </td>
            <td> Name </td>
            <td> Date </td>
            <td> Amount </td>
            <td> isCreditOrDebit  </td>
            <td> paymentCategory </td>
            <td> bank </td>
            <td> isCreditCard  </td>
            <td> isPaid </td>
            <td> Delete  </td>
        </tr>
            {expenses.map(expense => 
                <Expense
                    key = {expense.id}
                    expense = {expense}
                    handleDeleteRow = {() => handleDeleteRow(expense.id)}
                    handleChangeCell = {(e) => handleChangeCell(e, expense)}
                />
            )}
        </tbody>
    </table>
)

ExpenseList.propTypes = {

    expenses: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      isCreditOrDebit: PropTypes.string.isRequired,
      paymentCategory: PropTypes.string.isRequired,
      bank: PropTypes.string.isRequired,
      isCreditCard: PropTypes.bool.isRequired,
      isPaid: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    handleDeleteRow: PropTypes.func.isRequired,
    handleChangeCell: PropTypes.func.isRequired
    
}

export default ExpenseList