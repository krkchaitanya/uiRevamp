import React, { Component } from "react";

class Option extends Component {
    constructor (props) {
        super(props);
        this.state = {
            decisionVal : props.decisionVal
        };
    }
    render() {
        return (
            <li id="decision-option" className="display-flex justify-content-spacebetween">
                <div>
                    <h3>{this.state.decisionVal}</h3>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </li>
        );
    }
};

export default Option;