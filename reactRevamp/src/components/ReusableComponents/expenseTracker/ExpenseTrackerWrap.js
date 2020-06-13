import React from "react";

// import the child components
import Header from "./rcomponents/Header";
import Balance from "./rcomponents/Balance";
import IncomeExpense from "./rcomponents/IncomeExpense";
import Transactions from "./rcomponents/Transactions";
import AddNewTransaction from "./rcomponents/AddNewTransaction";
import "./expTracker.css";

const ExpenseTrackerWrap = () => {

    return (
        <div className="exp-wrap">
            <div>
                <Header />
            </div>
            <div>
                <Balance />
            </div>
            <div>
                <IncomeExpense />
            </div>
            <div>
                <Transactions />
            </div>
            <div>
                <AddNewTransaction />
            </div>
        </div>
    );
}

export default ExpenseTrackerWrap;