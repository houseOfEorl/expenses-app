import React from 'react';
import PropTypes from 'prop-types';

const ExpenseSearchBar = ({handleSearchExpense}) => (
    <span>
        <input type="text" name="MonthPicker" />
        <button type="submit" onClick={(e) => handleSearchExpense(e)}  >
            Search
        </button>
    </span>
)

ExpenseSearchBar.propTypes = {
    handleSearchExpense: PropTypes.func.isRequired
}

export default ExpenseSearchBar;