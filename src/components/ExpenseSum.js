import React from 'react';
import PropTypes from 'prop-types';

const ExpenseSum = ({expenses}) => (
    <div>
        Total: {expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0)}
        Total Paid: {expenses.filter(x => x.isPaid).reduce((accumulator, expense) => accumulator + expense.amount, 0)}
    </div>
)

ExpenseSum.propTypes = {
    expenses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        isCreditOrDebit: PropTypes.string.isRequired,
        paymentCategory: PropTypes.string.isRequired,
        bank: PropTypes.string.isRequired,
        isCreditCard: PropTypes.bool.isRequired,
        isPaid: PropTypes.bool.isRequired
      }).isRequired).isRequired
}

export default ExpenseSum;
