import React, { Component } from "react";
import PropTypes from "prop-types";

import Option from "./Option";

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decisionlist: props.decisionlist,
            handleDeleteDecisions: props.handleDeleteDecisions,
            handleDeleteSingleDecision: props.handleDeleteSingleDecision
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.decisionlist.length != prevState.decisionlist.length) {
            return {
                decisionlist: nextProps.decisionlist
            };
        } else {
            return null;
        }
    };


    render() {
        console.log("--this.state.decisionlist--", this.state.decisionlist );

        return (
            <div className="indecision-options">
                
                {/* Decision options header section */}
                <div className="indecision-options-header display-flex justify-content-spacebetween header-bg align-items-baseline">
                    <div>
                        <h2>Your options</h2>
                    </div>
                    <div>
                        <button className="remove-decision-btn" onClick={this.props.handleDeleteDecisions}>Remove All</button>
                    </div>
                </div>
                
                {/* Decision options body */}
                <ul  id="decision-options">
                    {this.props.decisionlist.map(decision => 
                        <Option 
                            key={this.state.decisionlist.indexOf(decision)} 
                            decisionVal = {decision}
                            handleDeleteSingleDecision = {this.props.handleDeleteSingleDecision}
                        />)}
                </ul>

            </div>
        );
    }
};

Options.propTypes = {
    decisionlist: PropTypes.arrayOf(PropTypes.string)
};

Options.defaultProps = {
    decisionlist: []
};

export default Options;