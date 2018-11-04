import React from 'react';
import PropTypes from 'prop-types';

const ExpenseSearchBar = ({handleSearchExpense}) => (
    <div>
        
        <input type="text" name="MonthPicker" />
        <button type="submit" onClick={(e) => handleSearchExpense(e)}  >
            Search
        </button>
    </div>
)

ExpenseSearchBar.propTypes = {
    handleSearchExpense: PropTypes.func.isRequired
}

export default ExpenseSearchBar;