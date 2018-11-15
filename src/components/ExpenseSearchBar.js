import React from 'react';
import PropTypes from 'prop-types';

const ExpenseSearchBar = ({handleSearchExpense, handleOnChangeSearchDate}) => (
    <span>
        <input type="date" name="MonthPicker" onChange={(e) => handleOnChangeSearchDate(e)} />
        <button type="submit" onClick={handleSearchExpense}  >
            Search
        </button>
    </span>
)

ExpenseSearchBar.propTypes = {
    handleSearchExpense: PropTypes.func.isRequired,
    handleOnChangeSearchDate: PropTypes.func.isRequired
}

export default ExpenseSearchBar;