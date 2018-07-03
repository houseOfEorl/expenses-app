import { combineReducers } from 'redux';
import expenses from './expenses';
import visibilityFilter from './visibilityFilter';

export default combineReducers ({
    expenses,
    visibilityFilter
})