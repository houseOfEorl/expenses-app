const expenses = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                {
                    id: action.id,
                    name: "",
                    date: new Date().toISOString().slice(0, 10),
                    amount: "",
                    isCreditOrDebit: "",
                    paymentCategory: "",
                    bank: "",
                    isCreditCard: false,
                    isPaid: false
                }
            ];

        case 'DELETE_EXPENSE':
            return state.filter(x => x.id !== action.deleteExpenseId);

        case 'UPDATE_EXPENSE':
            return state.map(x => x.id === action.data.id ? x = action.data : x);

        default:
            return state;
    }
}



export default expenses