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
        case 'DELETE_EXPENSE':
            return state.filter(x => x.id !== action.id);
        // case 'RESET_UPDATE_STATUS_EXPENSE':
        //     state.forEach(function(item){
        //         item.editing = false
        //     });
        //     return state;
        case 'UPDATE_EXPENSE':
            return state.map(x => x.id === action.data.id ? x = action.data : x);
        default:
            return state;
    }
}



export default expenses