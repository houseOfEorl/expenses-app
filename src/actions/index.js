import callApi from '../middleware/api';

let nextExpenseId = 0;

export const addExpense = ( date ) => ({
    type: 'ADD_EXPENSE',
    id: nextExpenseId++,
    date
})

export const updateExpense = data => ({
    type: 'UPDATE_EXPENSE',
    data: data
})

export const deleteExpense = deleteExpenseId => ({
    type: 'DELETE_EXPENSE',
    deleteExpenseId
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_PER_YEAR_MONTH: 'SHOW_PER_YEAR_MONTH'
}
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const requestExpenses = period => ({
    type: "REQUEST_EXPENSES",
    period
})

export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES" 
function receiveExpenses(period, json) {
    return {
        type: "RECEIVE_EXPENSES",
        period,
        expenses: json
    }
}


// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function fetchExpenses(period) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    return function(dispatch) {
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
      dispatch(requestExpenses(period))

      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.
      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.
      return callApi('Expenses/' + period, 'get', true)
        .then(
          response => JSON.parse(response),
          // Do not use catch, because that will also catch any errors in the dispatch and resulting render, 
          // causing a loop of 'Unexpected batch number' errors.
          error => console.log('An error occurred.', error)
        )
        .then(json =>
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
          dispatch(receiveExpenses(period, json))
        )
    }
  }