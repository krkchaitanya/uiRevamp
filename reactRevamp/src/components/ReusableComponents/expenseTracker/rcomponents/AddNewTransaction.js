import React, { useState } from "react";

const AddNewTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    return(
        <div className="exp-addNewTransaction">
            <h2>Add New Transaction</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                        <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."></input>
                </div>
                <button>Add New Transaction</button>
            </form>

        </div>
    );

}
export default AddNewTransaction;