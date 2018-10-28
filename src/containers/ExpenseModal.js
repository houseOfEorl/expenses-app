import React from 'react';
import PropTypes from 'prop-types';
import Expense from '../components/Expense';
import {connect} from 'react-redux';

class ExpenseModal extends React.Component {
    render() {
        const expense = this.props.expenses
        return(
            <div>
                {expense.map(expense => 
                    <Expense
                        key = {expense.id}
                        expense = {expense}
                    />
                )}
            </div>
        )
    }
}


ExpenseModal.propTypes = {
    expense: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        isCreditOrDebit: PropTypes.string.isRequired,
        paymentCategory: PropTypes.string.isRequired,
        bank: PropTypes.string.isRequired,
        isCreditCard: PropTypes.bool.isRequired,
        isPaid: PropTypes.bool.isRequired,
        editing: PropTypes.bool.isRequired 
    })
}

const getVisibleExpense = (expenses) => {
    return expenses.filter(x => x.editing === true);
}

const mapStateToProps = (state ) => ({
    expenses: getVisibleExpense(state.expenses)
})

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ExpenseModal)