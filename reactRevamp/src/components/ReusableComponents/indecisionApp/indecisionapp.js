import React, { Component } from "react";

import Getdecisionbtn from './Getdecisionbtn';
import Options from "./decision_options/Options";
import AddOptions from "./decision_options/AddOptions";

import "./css/decision.css";
import { type } from "os";

class Indecisionapp extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteDecisions = this.handleDeleteDecisions.bind(this);
        this.handleAddDecision = this.handleAddDecision.bind(this);
        this.handleSelectDecision = this.handleSelectDecision.bind(this);
        this.state = {
            decisionlist: ['decision1', 'decision2', 'decision3'],
            selectedDecision: '',
            isDecisionAlreadyExists: false
        };
    }

    handleSelectDecision = () => {
        this.setState((state, props) => {
            return {
                selectedDecision: state.decisionlist.length > 0 ?
                state.decisionlist[Math.floor(Math.random()*state.decisionlist.length)] : "No decisions available" };
        });
    };

    handleAddDecision = (newOption) => {      
        console.log("-- executed handleAddDecision fn --");

        this.state.decisionlist.includes(newOption) ?
        this.setState(() => ({isDecisionAlreadyExists: true})) :
        this.setState(() => {
            return {
                decisionlist: this.state.decisionlist.concat([newOption]),
                isDecisionAlreadyExists: false
            };
        })
    };

    handleDeleteDecisions = () => {
        this.setState(() => {
            return {
                decisionlist: []
            };
        });
    };


    render() {

        return (
            <div className="indecision-main-div">

                {/* header */}
                <div className="indecision-header">
                    <h1><strong>Indecision APP</strong></h1>
                </div>
                <br />


                {/* Getdecisionbtn */}
                <div className="display-flex justify-content-center">
                    <Getdecisionbtn 
                        handleSelectDecision = {this.handleSelectDecision}
                        selectedDecision={this.state.selectedDecision}
                    />
                </div>
                <br />


                {/* Options component */}
                <Options 
                    decisionlist = {this.state.decisionlist}
                    handleDeleteDecisions = {this.handleDeleteDecisions}
                />
                <br />
                

                {/* AddOptions components */}
                <AddOptions 
                    handleAddDecision={this.handleAddDecision}
                    isDecisionAlreadyExists = {this.state.isDecisionAlreadyExists}
                />

            </div>
        );
    };
};


export default Indecisionapp;