import React, {Component} from "react";

class CounterApp extends Component {
    constructor (props) {
        super(props);
        this.state= {
            count: 0
        }
    }

    componentDidMount() { 
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            
        }
    }


    handleNumIncrement =  () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    };


    handleNumDecrement =  () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    };

    resetNumber =  () => {
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    };

    render () {
        return (
            <div className="background-lightgray padding-2rem">
                <h1><bold> Count: {this.state.count} </bold></h1>
                <br />
                <div className="display-flex flex-direction-row justify-content-spaceevenly width-20">
                    <div className="flex-direction-column">
                        <button className="action-btn" onClick={this.handleNumIncrement}>
                            <h3> +1 </h3>
                        </button>
                    </div>
                    <div className="flex-direction-column">
                        <button className="action-btn" onClick={this.handleNumDecrement}>
                            <h3> -1 </h3>
                        </button>
                    </div>
                    <div className="flex-direction-column">
                        <button className="action-btn" onClick={this.resetNumber}>
                            <h3> Reset </h3>
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};

export default CounterApp;