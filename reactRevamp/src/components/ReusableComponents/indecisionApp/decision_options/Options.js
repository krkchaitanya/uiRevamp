import React, { Component } from "react";
import PropTypes from "prop-types";

import Option from "./Option";
import { toUnicode } from "punycode";

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decisionlist: props.decisionlist,
        };
    }

    render() {
        let optionlistarr = [];
        this.state.decisionlist.map(optnval => optionlistarr.push(<Option key={optnval} decisionVal = {optnval}/>));
        return (
            <div className="indecision-options">
                
                {/* Decision options header section */}
                <div className="indecision-options-header display-flex justify-content-spacebetween header-bg align-items-baseline">
                    <div>
                        <h2>Your options</h2>
                    </div>
                    <div>
                        <button className="remove-decision-btn">Remove All</button>
                    </div>
                </div>
                
                {/* Decision options body */}
                <ul  id="decision-options">
                    {optionlistarr}
                </ul>

            </div>
        );
    }
};

Options.propTypes = {
    decisionlist: PropTypes.arrayOf(PropTypes.string)
};

Options.defaultProps = {
    decisionlist: ["Material replacement", "Bill payment", "Car rental confirmation"]
};

export default Options;