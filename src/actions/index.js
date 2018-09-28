let nextExpenseId = 0;

export const addExpense = ( data ) => ({
    type: 'ADD_EXPENSE',
    id: nextExpenseId++,
    payload: data
})

export const updateExpense = id => ({
    type: 'UPDATE_EXPENSE',
    id: id
})

export const setVisibiltyFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
