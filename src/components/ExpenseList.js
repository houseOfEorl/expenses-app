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
            {/* <td> isCreditOrDebit  </td> */}
            <td> paymentCategory </td>
            <td> bank </td>
            <td> isCreditCard  </td>
            <td> isPaid </td>
            <td> Delete  </td>
        </tr>
            {expenses.map(expense => 
                <Expense
                    key = {expense.ExpensesID}
                    expense = {expense}
                    handleDeleteRow = {() => handleDeleteRow(expense.ExpensesID)}
                    handleChangeCell = {(e) => handleChangeCell(e, expense)}
                />
            )}
        </tbody>
    </table>
)

ExpenseList.propTypes = {

    expenses: PropTypes.arrayOf(PropTypes.shape({
        ExpensesID: PropTypes.number.isRequired,
        Name: PropTypes.string.isRequired,
        ExpenseDate: PropTypes.string.isRequired,
        Amount: PropTypes.number.isRequired,
        CreditOrDebit: PropTypes.string.isRequired,
        ExpensesTypeID: PropTypes.number.isRequired,
        BankTypeID: PropTypes.number.isRequired,
        isCreditCard: PropTypes.bool.isRequired,
        isPaid: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    handleDeleteRow: PropTypes.func.isRequired,
    handleChangeCell: PropTypes.func.isRequired
    
}

export default ExpenseList