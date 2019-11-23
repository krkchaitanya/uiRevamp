import React, { Component } from "react";

import Getdecisionbtn from './Getdecisionbtn';
import Options from "./decision_options/Options";

import "./css/decision.css";

class Indecisionapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decisionlist: ["material replacement", "bill payment", "Car rental confirmation"],
            selectedDecision: ""
        };
    }

    selectDecision = () => {
        this.setState((state, props) => {
            return {selectedDecision: state.decisionlist[Math.floor(Math.random()*state.decisionlist.length)]};
        });
    };


    componentDidUpdate(prevState, nextState) {
        console.log("prevState::", prevState.selectedDecision);
        console.log("nextState::", nextState.selectedDecision);
    }

    render() {
        const selectedOption = this.state.selectedDecision;
        return (
            <div className="indecision-main-div">
                <div className="indecision-header">
                    <h1><strong>Indecision APP</strong></h1>
                </div>
                <br />
                <div className="display-flex justify-content-center">
                    <Getdecisionbtn 
                        selectDecision = {this.selectDecision}
                        selectedDecision={selectedOption}
                    />
                </div>
                <br />
                <Options decisionlist = {this.state.decisionlist}/>
            </div>
        );
    };
};


export default Indecisionapp;