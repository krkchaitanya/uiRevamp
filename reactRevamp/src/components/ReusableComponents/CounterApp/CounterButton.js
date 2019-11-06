import React, { Component } from "react";
import propTypes from "prop-types";

const CounterButton = (props) => (
    <button className="action-btn" onClick={props.btnAction}>
        <h3>{props.name}</h3>
    </button>
);;
   

CounterButton.propTypes = {
    name: propTypes.string,
    btnAction: propTypes.func
};


export default CounterButton;