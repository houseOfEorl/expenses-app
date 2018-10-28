import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseList from '../components/ExpenseList'
import { updateExpense } from '../actions';
import PropTypes from 'prop-types';

class VisibleExpenseList extends Component {

    handleChangeCell = (event, expense) => {
        const { dispatch } = this.props;

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        expense[name] = value;
        dispatch(updateExpense(expense));
    }
    
    render() {
        const { expenses } = this.props;
        return (
            <div>
                <ExpenseList expenses = {expenses} 
                             onHandleEditRowClick = {this.handleEditRowClick}
                             handleChangeCell = {this.handleChangeCell} />
            </div>
        )
    } 
}

const getVisibleExpense = (expenses, filterPeriod, filterTypeOfExpense) => {
    return expenses;
}

const mapStateToProps = (state , store) => ({
    expenses: getVisibleExpense(state.expenses, state.period, state.typeOfExpense)
})

const mapDispatchToProps = dispatch => ({
    dispatch
})

VisibleExpenseList.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(VisibleExpenseList)