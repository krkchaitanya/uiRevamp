import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import Transaction from "./Transaction";

const Transactions = () => {

    const { transactions } = useContext(GlobalContext);

    return(
        <div className="exp-transactions">
            <h2>History</h2>
            <ul>
                {
                    transactions.map(transaction => <Transaction transaction={transaction} />)
                }
            </ul>
        </div>
    );

}

export default Transactions;