import React, { Component } from "react";

import Getdecisionbtn from './Getdecisionbtn';
import Options from "./decision_options/Options";
import AddOptions from "./decision_options/AddOptions";

import "./css/decision.css";
import { type } from "os";
import { timingSafeEqual } from "crypto";

class Indecisionapp extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteDecisions = this.handleDeleteDecisions.bind(this);
        this.handleAddDecision = this.handleAddDecision.bind(this);
        this.handleSelectDecision = this.handleSelectDecision.bind(this);
        this.handleDeleteSingleDecision = this.handleDeleteSingleDecision.bind(this);
        this.state = {
            decisionlist: JSON.parse(localStorage.getItem("dicisionList")),
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

        this.state.decisionlist.includes(newOption) ?
        this.setState(() => {
            return {isDecisionAlreadyExists: true};
        }) :
        this.setState(() => {
            // Update the array using the array concat() method
            // update the dicisionList variable value at localStorage
            let newlyFormedSecisionList = JSON.parse(localStorage.getItem("dicisionList")).concat([newOption]);
            localStorage.setItem("dicisionList", JSON.stringify(newlyFormedSecisionList));
            return {
                decisionlist: JSON.parse(localStorage.getItem("dicisionList")),
                isDecisionAlreadyExists: false
            };
        })
    };

    handleDeleteDecisions = () => {
        this.setState(() => {
            localStorage.setItem("dicisionList", "[]");
            return {
                decisionlist: []
            };
        });
    };

    handleDeleteSingleDecision = (decision) => {

        if (this.state.decisionlist.includes(decision)) {
            // remove the item from array in localStorage
            // set the updated array value in localStorage variable
            let updatedDecisionListArray = JSON.parse(localStorage.getItem("dicisionList")).filter(ele => ele !== decision);
            localStorage.setItem("dicisionList", JSON.stringify(updatedDecisionListArray));
            // update the state value
            this.setState((prevState) => {
                return {
                    decisionlist: prevState.decisionlist.filter(ele => ele !== decision)
                };
            });
        }; 
    };

    componentWillMount() {
        if (null == localStorage.getItem("dicisionList")) {
            localStorage.setItem("dicisionList", "[]");
        }
        this.setState(() => ({decisionlist: JSON.parse(localStorage.getItem("dicisionList"))}));
        console.log(" triggered componentWillMount from indecisionapp.js file:: ");
        
    }

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
                    handleDeleteSingleDecision = {this.handleDeleteSingleDecision}
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