import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    const amountArr = transactions.map(transaction => transaction.amount);
    const totalAmt = amountArr.reduce((accumulator, initialvalue) => accumulator += initialvalue, 0).toFixed(2);

    return (
        <div className="exp-balance">
            <h2>Your Balance</h2>
            <h4>{totalAmt}$</h4>
        </div>
    );
}

export default Balance;