import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state object
const initialState = {
    transactions: [
        {id: 1, text: "Flower", amount: -20},
        {id: 2, text: "Salary", amount: 300},
        {id: 3, text: "Book", amount: -10},
        {id: 4, text: "Camera", amount: 150}
    ]
};

// global context
export const GlobalContext = createContext(initialState);


// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Event handling functions
    // delete transaction
    function deleteTransaction(id) {
        console.log("--entering into the deleteTransaction method--", id);
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });        
    }

    // Add transaction
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }


    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}