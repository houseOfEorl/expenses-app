let nextExpenseId = 0;

export const addExpense = ( data ) => ({
    type: 'ADD_EXPENSE',
    id: nextExpenseId++,
    payload: data
})

export const updateExpense = data => ({
    type: 'UPDATE_EXPENSE',
    data: data
})

export const deleteExpense = deleteExpenseId => ({
    type: 'DELETE_EXPENSE',
    deleteExpenseId
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_PER_YEAR_MONTH: 'SHOW_PER_YEAR_MONTH'
}
