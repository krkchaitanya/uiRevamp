import React from "react";

// import the child components
import Header from "./rcomponents/Header";
import Balance from "./rcomponents/Balance";
import IncomeExpense from "./rcomponents/IncomeExpense";
import Transactions from "./rcomponents/Transactions";
import AddNewTransaction from "./rcomponents/AddNewTransaction";
import { GlobalProvider } from "./context/GlobalState";
import "./expTracker.css";

const ExpenseTrackerWrap = () => {

    return (
        <GlobalProvider>
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
        </GlobalProvider>
    );
}

export default ExpenseTrackerWrap;