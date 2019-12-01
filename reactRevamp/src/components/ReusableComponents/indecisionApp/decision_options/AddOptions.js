import React, { Component } from "react";
import PropTypes from "prop-types";

class AddOptions extends Component {
    constructor(props) {
        super(props);
        this.addNewDecision = this.addNewDecision.bind(this);
        this.state={
            isDecisionAlreadyExists: props.isDecisionAlreadyExists,
            handleAddDecision: props.handleAddDecision,
            newDecisionOption: "",
            addDecisionBtnDisabled: true,
        };
    };

    addNewDecision = (e) => {
        console.log(" -- executing addNewDecision methos -- ");
        e.preventDefault();
        const newDecisionVal = e.target.elements.option.value.trim();
        if(undefined != newDecisionVal &&  "" != newDecisionVal) {
          this.props.handleAddDecision(newDecisionVal);
        };
        e.target.reset();
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.isDecisionAlreadyExists != prevState.isDecisionAlreadyExists) {
            return {isDecisionAlreadyExists: nextProps.isDecisionAlreadyExists};
        } else { 
            return null;
        }
    }
    


    render() {
        console.log("--isDecisionAlreadyExists--", this.state.isDecisionAlreadyExists);

        return(
            <div className="display-flex flex-direction-column padding-2rem ">
               <div>
               <form onSubmit={this.addNewDecision}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
               </div>
                <div>
                <p>{this.state.isDecisionAlreadyExists && "Decision Already Exists"}</p>
                </div>
            </div>
        );
    };
};

AddOptions.propTypes = {
    handleAddDecision: PropTypes.func.isRequired,
    isDecisionAlreadyExists: PropTypes.bool.isRequired
};

AddOptions.defaultProps = {
    // isDecisionAlreadyExists: false
};


export default AddOptions;