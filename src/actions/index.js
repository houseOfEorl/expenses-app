let nextExpenseId = 0;

export const addExpense = ( data ) => ({
    type: 'ADD_EXPENSE',
    id: nextExpenseId++,
    payload: data
})

export const setVisibiltyFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
