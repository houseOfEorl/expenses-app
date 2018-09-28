const expenses = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.payload.name,
                    date: action.payload.date,
                    amount: action.payload.amount,
                    isCreditOrDebit: action.payload.isCreditOrDebit,
                    paymentCategory: action.payload.paymentCategory,
                    bank: action.payload.bank,
                    isCreditCard: action.payload.isCreditCard,
                    isPaid: action.payload.isPaid,
                    editing: false
                }
            ];
        case 'DELETE_EXPENSE':
            return state.filter(x => x.id !== action.id);
        case 'UPDATE_EXPENSE':
            return state.map(x => x.id === action.id ? {...x,editing:!x.editing}:x);
        default:
            return state;
    }
}



export default expenses