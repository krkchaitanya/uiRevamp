import React, { Component } from "react";
import PropTypes from 'prop-types';

class Getdecisionbtn extends Component {
    constructor (props) {
        super(props);
        this.state = {
            whattodo : props.getDecisionFn
        };
    }
    render() {
        return (
            <button className="getdecisionbtn" onClick={this.state.whattodo}>
                <h3>What should i do ?</h3>
            </button>
        );
    }
}

Getdecisionbtn.propTypes = {
    whattodo: PropTypes.func.isRequired
};


export default Getdecisionbtn;