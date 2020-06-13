import React from "react";

const AddNewTransaction = () => {

    return(
        <div className="exp-addNewTransaction">
            <h2>Add New Transaction</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." id="text"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" placeholder="Enter amount..."></input>
                </div>
                <button>Add New Transaction</button>
            </form>

        </div>
    );

}
export default AddNewTransaction;