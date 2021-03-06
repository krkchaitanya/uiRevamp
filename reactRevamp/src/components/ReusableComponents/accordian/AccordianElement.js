import React from "react";
import {FaAngleDoubleDown} from "react-icons/fa";

import AccordianEleData from "./AccordianEleData";

class AccordianElement extends React.Component {

    constructor() {
        super();
        this.state= {
        } 
    }


    render() {
        return(
            <React.Fragment>
                <div className="accd__elemwrap" id={(this.props.showAccdData && this.props.id === this.props.userObj.id) ? "active-elem" : "inactive-elem"}>
                    <div className="accd__elem">
                        <div className="accd__elem--id">
                            <h3>User ID - {this.props.id}</h3>
                        </div>
                        <div className="accd__elem--angle">
                            <h3 onClick={this.props.handleAccdChevron}><FaAngleDoubleDown /></h3>
                        </div>
                    </div>
                    <div>
                        {
                            (this.props.showAccdData && this.props.id === this.props.userObj.id) ?
                            <AccordianEleData userObj = {this.props.userObj} /> :
                            "" 
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AccordianElement;