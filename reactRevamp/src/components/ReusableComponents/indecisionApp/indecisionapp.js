import React, { Component } from "react";

import Getdecisionbtn from './getdecisionbtn';
import Options from "./decision_option/Options";

import "./css/decision.css";

class Indecisionapp extends Component {


    getDecisionBtnFn = () => {
        console.log("--hitting getDecisionBtnFn--");
    };



    render() {
        return (
            <div className="indecision-main-div">
                <div className="indecision-header">
                    <h1><strong>Indecision APP</strong></h1>
                </div>
                <br />
                <div className="display-flex justify-content-center">
                    <Getdecisionbtn getDecisionFn = {this.getDecisionBtnFn}/>
                </div>
                <br />
                <Options />
            </div>
        );
    };
};


export default Indecisionapp;