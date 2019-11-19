import React, { Component } from "react";

import Option from "./Option";

class Options extends Component {
    render() {
        return (
            <div className="indecision-options">
                
                {/* Decision options header section */}
                <div className="indecision-options-header display-flex justify-content-spacebetween header-bg">
                    <div>
                        <h2>Your options</h2>
                    </div>
                    <div>
                        <h2>Remove All</h2>
                    </div>
                </div>
                
                {/* Decision options body */}
                <ul  id="decision-options">
                    <Option decisionVal="material completion"/>
                    <Option decisionVal="material completion"/>
                </ul>

            </div>
        );
    }
};

export default Options;