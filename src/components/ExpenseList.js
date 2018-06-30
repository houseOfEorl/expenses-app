import React from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({ expenses }) => (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Period</th>
                <th>Amount</th>
            </tr>
            {expenses.map(expense => 
                <Expense
                    key={expense.id}
                    {...expense}
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
      amount: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default ExpenseList