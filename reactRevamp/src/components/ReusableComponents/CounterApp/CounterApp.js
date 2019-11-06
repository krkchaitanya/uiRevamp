import React, {Component} from "react";
import CounterButton from "./CounterButton";

class CounterApp extends Component {
    constructor (props) {
        super(props);
        this.state= {
            count: 0
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem("storedCount");
        const initcount = parseInt(stringCount);
        if(!isNaN(initcount)) {
            this.setState(() => ({count:initcount}))
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem("storedCount", this.state.count);
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
                <h1>
                    <strong>Count: {this.state.count}</strong>
                </h1>
                <br />
                <div className="display-flex flex-direction-row justify-content-spaceevenly width-20">
                    <div className="flex-direction-column">
                        <CounterButton name=" +1 " btnAction = {this.handleNumIncrement}/>
                    </div>
                    <div className="flex-direction-column">
                        <CounterButton name=" -1 " btnAction = {this.handleNumDecrement}/>
                    </div>
                    <div className="flex-direction-column">
                        <CounterButton name=" Reset " btnAction = {this.resetNumber}/>
                    </div>
                </div>
            </div>
        );
    };
};

export default CounterApp;