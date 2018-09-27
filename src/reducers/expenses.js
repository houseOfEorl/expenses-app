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
                    isPaid: action.payload.isPaid
                }
            ];
        case 'UPDATE_EXPENSE':
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
                    isPaid: action.payload.isPaid
                }
            ];
        default:
            return state;        
    }
}



export default expenses