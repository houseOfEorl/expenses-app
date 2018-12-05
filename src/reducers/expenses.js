const initialState = {
    isFetching: false, 
    items: []
}


const expenses = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {...state, 
                    items: [
                        ...state.items,
                        {
                            ExpensesID: action.ExpensesID,
                            name: "",
                            ExpenseDate: action.ExpenseDate,
                            amount: 0,
                            isCreditOrDebit: "",
                            paymentCategory: "",
                            bank: "",
                            isCreditCard: false,
                            isPaid: false
                        }
                    ]
                }
    
        case 'DELETE_EXPENSE':
            return {
                ...state, 
                items: state.items.filter(x => x.ExpensesID !== action.deleteExpenseId)
            }

        case 'UPDATE_EXPENSE':
            return {
                ...state, 
                items: state.items.map(x => x.ExpensesID === action.data.ExpensesID ? x = action.data : x)
            }
            
        case 'RECEIVE_EXPENSES':
            return Object.assign({}, state, {
                items: action.expenses
            })

        default:
            return state;
    }
}



export default expenses