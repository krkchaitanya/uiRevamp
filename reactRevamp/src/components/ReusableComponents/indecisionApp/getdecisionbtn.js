import React from "react";

const Getdecisionbtn = (props) => {
    return (
        <div>
            <button className="getdecisionbtn" onClick={props.handleSelectDecision}>
            <h3>What should i do ?</h3>
        </button>
        <br />
        <h3>{props.selectedDecision}</h3>
        </div>
    );
};

export default Getdecisionbtn;