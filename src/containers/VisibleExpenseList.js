import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseList from '../components/ExpenseList';
import ExpenseSum from '../components/ExpenseSum';
import { updateExpense, deleteExpense } from '../actions';
import PropTypes from 'prop-types';

class VisibleExpenseList extends Component {

    handleChangeCell = (event, expense) => {
        const { dispatch } = this.props;

        const target = event.target;
        let value = "";
        
        switch(target.type) {
            case 'checkbox':
                value = target.checked;
                break;
            case 'number':
                value = parseInt(target.value);
                break;
            default:
                value = target.value
        }

        const name = target.name;
        expense[name] = value;
        dispatch(updateExpense(expense));
    }

    handleDeleteRow = (deleteExpenseId) => {
        
        const { dispatch } = this.props;

        dispatch(deleteExpense(deleteExpenseId));
    }
    
    render() {
        const { expenses } = this.props;
        return (
            <div>
                <ExpenseSum expenses = {expenses} />
                <ExpenseList expenses = {expenses} 
                             handleDeleteRow = {this.handleDeleteRow}
                             handleChangeCell = {this.handleChangeCell} />
            </div>
        )
    } 
}

const getVisibleExpense = (expenses, filter) => {

    const year = filter.slice(0, 4);
    const month = filter.slice(5,7);
    // console.log(filter.slice(0, 4));
    // console.log(expenses.date);

    //TODO
    return expenses.filter(x => x.date.slice(0, 4) ===  year && x.date.slice(5,7) ===  month)
    // return expenses.filter(x => new Date(x.date).getMonth() ==  new Date(filter).getMonth() && new Date(x.date).getFullYear() ==  new Date(filter).getFullYear())

    // switch (filter) {
    //     case VisibilityFilters.SHOW_ALL:
    //         return expenses
    //     case VisibilityFilters.SHOW_PER_YEAR_MONTH:
    //         return expenses.filter(x => x.isCreditCard)
    //     default:
    //         throw new Error('Unkown filter: ' + filter)
    // }
}

const mapStateToProps = (state , store) => ({
    expenses: getVisibleExpense(state.expenses, state.periodFilter)
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