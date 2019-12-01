import React from "react";

const Option = (props) => {
    return (
        <li id="decision-option" className="display-flex justify-content-spacebetween">
            <div>
                <h3>{props.decisionVal}</h3>
            </div>
            <div>
                <button className="remove-decision-btn">Remove</button>
            </div>
        </li>
    );
};


export default Option;