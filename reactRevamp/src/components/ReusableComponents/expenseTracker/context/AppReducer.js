// Reducer: Specify the application state changes in response to the event actions
export default (state, action) => {
    
    switch(action.type) {

        case 'DELETE_TRANSACTION': 
        return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }

        default:
            return state;
    }
};