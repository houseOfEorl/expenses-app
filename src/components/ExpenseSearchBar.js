import React from 'react';
import PropTypes from 'prop-types';

let currentDate = new Date().toISOString().slice(0, 10);

const ExpenseSearchBar = ({handleOnChangeSearchDate}) => (
    <span>
        <input type="date" name="MonthPicker" defaultValue={currentDate.toString()} onChange={(e) => handleOnChangeSearchDate(e)} />
    </span>
)

ExpenseSearchBar.propTypes = {
    handleOnChangeSearchDate: PropTypes.func.isRequired
}

export default ExpenseSearchBar;