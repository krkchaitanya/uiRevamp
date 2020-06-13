import React from "react";
import {FaTrashAlt} from "react-icons/fa";

const Transactions = () => {

    return(
        <div className="exp-transactions">
            <h2>History</h2>
            <ul>
                <li>
                    <span>
                        <button><FaTrashAlt /></button>
                    </span>
                    <span>
                        <h4>Text</h4>
                    </span>
                    <span>
                        <h4>$0.00</h4>
                    </span>
                </li>
            </ul>
        </div>
    );

}

export default Transactions;