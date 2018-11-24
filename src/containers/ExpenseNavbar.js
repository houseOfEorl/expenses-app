import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense, setVisibilityFilter } from '../actions';
import PropTypes from 'prop-types';
import ExpenseSearchBar from '../components/ExpenseSearchBar';

class ExpenseNavbar extends Component {

    constructor(props) {
        super(props)
        this.handleAddExpense = this.handleAddExpense.bind(this);
        this.handleOnChangeSearchDate = this.handleOnChangeSearchDate.bind(this);
    }

    handleAddExpense(e) {
        e.preventDefault()
        const { dispatch } = this.props;
        const { periodFilter } = this.props;

        dispatch(addExpense(periodFilter));
    }

    handleOnChangeSearchDate(e) {

        e.preventDefault()
        const { dispatch } = this.props;
        const newSearchDate = e.target.value;

        dispatch(setVisibilityFilter(newSearchDate));
    }

    render() {
        return (
            <div>
                <ExpenseSearchBar handleOnChangeSearchDate={this.handleOnChangeSearchDate} />
                <button type="submit" onClick={this.handleAddExpense}>
                    Add
                </button>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    periodFilter: state.periodFilter
})

const mapDispatchToProps = dispatch => ({
    dispatch
})

ExpenseNavbar.propTypes = {
    dispatch: PropTypes.func.isRequired
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(ExpenseNavbar)