import React, { useContext } from "react";
import {FaTrashAlt} from "react-icons/fa";
import { GlobalContext } from "./../context/GlobalState";

const Transaction = (props) => {
    const {id, text, amount} = props.transaction;
    const { deleteTransaction } = useContext(GlobalContext);

    return(
        <li className={amount > 0 ? "plus" : "minus"}>
            <span>
                <button onClick={() => deleteTransaction(id)}><FaTrashAlt /></button>
            </span>
            <span>
                <h4>{text}</h4>
            </span>
            <span>
                <h4>${amount}</h4>
            </span>
        </li>
    );
}

export default Transaction;