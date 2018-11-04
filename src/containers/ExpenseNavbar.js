import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense, setVisibilityFilter } from '../actions';
import PropTypes from 'prop-types';
import ExpenseSearchBar from '../components/ExpenseSearchBar';

class ExpenseNavbar extends Component {

    constructor(props) {
        super(props)
        this.handleAddExpense = this.handleAddExpense.bind(this);
        this.handleSearchExpense = this.handleSearchExpense.bind(this);
    }


    handleAddExpense(e) {
        e.preventDefault()
        const { dispatch } = this.props;

        dispatch(addExpense());
    }

    handleSearchExpense(e) {
        e.preventDefault()
        const { dispatch } = this.props;

        dispatch(setVisibilityFilter("2018-11-04"));
    }

    render() {
        return (
            <div>
                <ExpenseSearchBar handleSearchExpense={this.handleSearchExpense} />
                <button type="submit" onClick={this.handleAddExpense}>
                    Add
                </button>
            </div>
        )
    }
}

ExpenseNavbar.propTypes = {
    dispatch: PropTypes.func.isRequired
}


export default connect()(ExpenseNavbar)