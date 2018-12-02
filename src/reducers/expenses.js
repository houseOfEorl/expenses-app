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
                            id: action.id,
                            name: "",
                            date: action.date,
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
                items: state.items.filter(x => x.id !== action.deleteExpenseId)
            }
        case 'UPDATE_EXPENSE':
            return {
                ...state, 
                items: state.items.map(x => x.id === action.data.id ? x = action.data : x)
            }
        case ' RECEIVE_EXPENSES':
            return Object.assign({}, state, {

            })

        default:
            return state;
    }
}



export default expenses