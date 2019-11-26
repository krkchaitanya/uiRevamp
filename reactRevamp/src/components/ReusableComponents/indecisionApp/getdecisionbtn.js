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

    componentWillReceiveProps(props) {
        props.selectedDecision !== this.state.selectDecision && this.setState(() => ({selectedDecision: props.selectedDecision}));
    }

    render() {
        console.log("..selectedDecision..",this.state.selectedDecision);
        return (
            <div>
                <button className="getdecisionbtn" onClick={this.state.selectDecision}>
                <h3>What should i do ?</h3>
            </button>
            <br />
            <h3>{this.state.selectedDecision}</h3>
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