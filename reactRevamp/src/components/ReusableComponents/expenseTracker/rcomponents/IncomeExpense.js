import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext);
    const amtArr = transactions.map(transaction => transaction.amount);
    const totalIncome = amtArr.filter(amt => amt > 0).reduce((acc, initVal) => acc+=initVal, 0).toFixed(2);
    const totalExpense = (amtArr.filter(amt => amt < 0).reduce((acc, initVal) => acc+=initVal, 0)*-1).toFixed(2);

    return(
        <div className="exp-incomeExpemse">
            <div className="income">
                <h2>Income</h2>
                <h4>${totalIncome}</h4>
            </div>
            <div className="expense">
                <h2>Expense</h2>
                <h4>${totalExpense}</h4>
            </div>
        </div>
    );

}

export default IncomeExpense;