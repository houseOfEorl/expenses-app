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
                    <td>{expenses.reduce((accumulator, expense) => accumulator + expense.Amount, 0)}</td>
                    <td>{expenses.filter(x => x.isPaid).reduce((accumulator, expense) => accumulator + expense.Amount, 0)}</td>
                </tr>
                <tr>
                    <td>Scotiabank</td>
                    <td>{expenses.filter(x => x.BankTypeID === 1).reduce((accumulator, expense) => accumulator + expense.Amount, 0)}</td>
                    <td>{expenses.filter(x => x.isPaid && x.BankTypeID === 1).reduce((accumulator, expense) => accumulator + expense.Amount, 0)}</td>
                </tr>
                <tr>
                    <td>Tangerine</td>
                    <td>{expenses.filter(x => x.BankTypeID === 2).reduce((accumulator, expense) => accumulator + expense.Amount, 0)}</td>
                    <td>{expenses.filter(x => x.isPaid && x.BankTypeID === 2).reduce((accumulator, expense) => accumulator + expense.Amount, 0)}</td>
                </tr>
            </tbody>
        </table>
    </div>
)

ExpenseSum.propTypes = {
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
      }).isRequired).isRequired
}

export default ExpenseSum;
