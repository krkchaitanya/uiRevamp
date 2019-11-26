import React, { Component } from "react";

import Getdecisionbtn from './Getdecisionbtn';
import Options from "./decision_options/Options";
import AddOptions from "./decision_options/AddOptions";

import "./css/decision.css";

class Indecisionapp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decisionlist: ["material replacement", "bill payment", "Car rental confirmation"],
            selectedDecision: ""
        };
    }

    handleSelectDecision = () => {
        this.setState((state, props) => {
            return {selectedDecision: state.decisionlist[Math.floor(Math.random()*state.decisionlist.length)]};
        });
    };

    handleAddDecisionFn = (newOption) => {
        console.log("--entering handleAddDecisionFn--");
        this.setState((state, props) => {
            return {
                decisionlist: state.decisionlist.push(newOption)
            };
        });
    };

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
                        handleSelectDecision = {this.handleSelectDecision}
                        selectedDecision={selectedOption}
                    />
                </div>
                <br />
                <Options decisionlist = {this.state.decisionlist}/>
                <br />
                <AddOptions handleAddDecision={this.handleAddDecisionFn}/>
            </div>
        );
    };
};


export default Indecisionapp;