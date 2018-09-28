import React from 'react';
import PropTypes from 'prop-types';
import Expense from '../components/Expense';
import {connect} from 'react-redux';

class ExpenseModal extends React.Component {
    render() {
        const expense = this.props
        return(
            <div>
                <Expense expense = {expense}/>
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
        isPaid: PropTypes.bool.isRequired
    }).isRequired
}

const getVisibleExpense = (expenses) => {
    return expenses;
}

const mapStateToProps = (state ) => ({
    expenses: getVisibleExpense(state.expenses, state.period, state.typeOfExpense)
})

const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ExpenseModal)