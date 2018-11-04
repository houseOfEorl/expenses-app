import { combineReducers } from 'redux';
import expenses from './expenses';
import periodFilter from './periodFilter';

export default combineReducers ({
    expenses,
    periodFilter
})