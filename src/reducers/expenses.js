const expenses = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.payload.name,
                    date: action.payload.date,
                    amount: action.payload.amount
                }
            ];
        default:
            return state;        
    }
}

export default expenses