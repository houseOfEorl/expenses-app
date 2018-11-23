import React from 'react';
import PropTypes from 'prop-types';

let currentDate = new Date().toISOString().slice(0, 10);

const ExpenseSearchBar = ({handleSearchExpense, handleOnChangeSearchDate}) => (
    <span>
        <input type="date" name="MonthPicker" defaultValue={currentDate.toString()} onChange={(e) => handleOnChangeSearchDate(e)} />
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