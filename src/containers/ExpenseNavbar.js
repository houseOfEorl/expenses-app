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
        this.handleOnChangeSearchDate = this.handleOnChangeSearchDate.bind(this);

        this.state = {searchDate: "2018-11-04"};
    }


    handleAddExpense(e) {
        e.preventDefault()
        const { dispatch } = this.props;

        dispatch(addExpense());
    }

    handleOnChangeSearchDate(e) {
        const newSearchDate = e.target.value;
        this.setState({searchDate: newSearchDate});
    }

    handleSearchExpense(e) {
        e.preventDefault()
        const { dispatch } = this.props;

        dispatch(setVisibilityFilter(this.state.searchDate));
    }

    render() {
        return (
            <div>
                <ExpenseSearchBar handleSearchExpense={this.handleSearchExpense} handleOnChangeSearchDate={this.handleOnChangeSearchDate} />
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