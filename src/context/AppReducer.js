export default(state, action) => {
    switch(action.type){
        case 1:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            case 2:
                return{
                    ...state,
                    transactions: [action.payload ,...state.transactions]
                }
        default:
            return state;
    }
}