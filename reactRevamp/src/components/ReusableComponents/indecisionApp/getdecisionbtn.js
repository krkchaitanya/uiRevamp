import React, { Component } from "react";
import PropTypes from 'prop-types';

class Getdecisionbtn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectDecision : props.selectDecision,
            selectedDecision : props.selectedDecision
        };
    }

    componentWillReceiveProps(prevState, nextState) {
        console.log("--Getdecisionbtn will recive props --");
        console.log("prevState: ", prevState);
        console.log("nextState: ", nextState);
    }

    render() {
        console.log("..selectedDecision..",this.state.selectedDecision);
        return (
            <div>
                <button className="getdecisionbtn" onClick={this.state.selectDecision}>
                <h3>What should i do ?</h3>
            </button>
            <br />
            <h3>{this.props.selectedDecision}</h3>
            </div>
        );
    }
}

Getdecisionbtn.propTypes = {
    selectDecision: PropTypes.func.isRequired,
    selectedDecision: PropTypes.string
};

Getdecisionbtn.defaultProps = {
    selectedDecision: ""
};

export default Getdecisionbtn;