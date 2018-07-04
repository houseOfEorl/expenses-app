import React from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({ expenses, onHandleEditRowClick }) => (
    <table>
        <tbody>
            {expenses.map(expense => 
                <Expense
                    key = {expense.id}
                    expense = {expense}
                    onHandleEditRowClick = {onHandleEditRowClick}
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
      paymentCategory: PropTypes.string.isRequiredsy,
      bank: PropTypes.string.isRequired,
      isCreditCard: PropTypes.bool.isRequired,
      isPaid: PropTypes.bool.isRequired
    }).isRequired).isRequired,

    onHandleEditRowClick: PropTypes.func.isRequired
}

export default ExpenseList