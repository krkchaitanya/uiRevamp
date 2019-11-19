import React, { Component } from "react";

import Getdecisionbtn from './Getdecisionbtn';
import Options from "./decision_options/Options";

import "./css/decision.css";

class Indecisionapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decisionlist: ["material replacement", "bill payment", "Car rental confirmation"]
        };
    }
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
                <Options decisionlist = {this.state.decisionlist}/>
            </div>
        );
    };
};


export default Indecisionapp;