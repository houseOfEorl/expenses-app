import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseList from '../components/ExpenseList'
import { updateExpense } from '../actions';


class VisibleExpenseList extends Component {


    handleEditRowClick = ( printThis ) => {
        alert(printThis);
    }
    
    render() {
        const { expenses } = this.props;
        return (
            <div>
                <ExpenseList expenses = {expenses} 
                             onHandleEditRowClick = {this.handleEditRowClick} />
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

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(VisibleExpenseList)