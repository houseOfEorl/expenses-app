import { connect } from 'react-redux';
import ExpenseList from '../components/ExpenseList'
import { updateExpense } from '../actions';


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
)(ExpenseList)