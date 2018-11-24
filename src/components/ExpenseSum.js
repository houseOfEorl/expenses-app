import React from 'react';
import PropTypes from 'prop-types';

const tableStyle = {
    width:"10%",
  };

const divStyle = {
    fontSize: "70%",
    display: 'flex', 
    justifyContent: 'center',
};  

const ExpenseSum = ({expenses}) => (
    <div style={divStyle}>
        <table style={tableStyle}>
            <tbody>
                <tr>
                    <th >Bank</th>
                    <th >Total</th>
                    <th >Total Paid</th>
                </tr>
                <tr>
                    <td>All</td>
                    <td>{expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0)}</td>
                    <td>{expenses.filter(x => x.isPaid).reduce((accumulator, expense) => accumulator + expense.amount, 0)}</td>
                </tr>
                <tr>
                    <td>Scotiabank</td>
                    <td>{expenses.filter(x => x.bank === "Scotiabank").reduce((accumulator, expense) => accumulator + expense.amount, 0)}</td>
                    <td>{expenses.filter(x => x.isPaid && x.bank === "Scotiabank").reduce((accumulator, expense) => accumulator + expense.amount, 0)}</td>
                </tr>
                <tr>
                    <td>Tangerine</td>
                    <td>{expenses.filter(x => x.bank === "Tangerine").reduce((accumulator, expense) => accumulator + expense.amount, 0)}</td>
                    <td>{expenses.filter(x => x.isPaid && x.bank === "Tangerine").reduce((accumulator, expense) => accumulator + expense.amount, 0)}</td>
                </tr>
            </tbody>
        </table>
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
