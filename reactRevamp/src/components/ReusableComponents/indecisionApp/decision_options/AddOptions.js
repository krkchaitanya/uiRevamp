import React, { Component } from "react";

class AddOptions extends Component {
    constructor(props) {
        super(props);
        this.state={
            handleAddDecision: props.handleAddDecision,
            newDecisionOption: ""
        };
    };

    newDecisionOnChange = (info) => {
        this.setState(() => {
            return {newDecisionOption: info};
        });
    }

    render() {
        return(
            <div className="display-flex flex-direction-row padding-2rem ">
                <div className="flex-direction-column">
                    <input className="input-box" type="text" value={this.state.newDecisionOption} onChange={e => this.newDecisionOnChange(e.target.value)}/>
                </div>
                <div className="flex-direction-column">
                    <button className="action-btn-md" onClick={() => {
                        this.state.handleAddDecision(this.state.newDecisionOption);
                        this.newDecisionOnChange("");
                    }}>
                        Add Decision
                    </button>
                </div>
            </div>
        );
    };
};

export default AddOptions;