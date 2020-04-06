import React from "react";
import axios from "axios";

import AccordianElement from "./AccordianElement";
import AccordianEleData from "./AccordianEleData";
import "./css/accordianStyle.css";

class AccordianWrap extends React.Component {

    constructor() {
        super();
        this.state = {
            ids: [1,2,3,4,5,6,7,8,9,10],
            userObj: {},
            showAccdData: false,
            visibleUserID: undefined
        }
    }

    handleAccdChevron(userid) {
        (undefined !== this.state.visibleUserID &&
            userid === this.state.visibleUserID &&
            true === this.state.showAccdData) ?
        this.setState(() => {
            return {
                showAccdData: false
            };
        }) : 
        axios.get("https://jsonplaceholder.typicode.com/users/"+userid)
        .then(resp => {
            if (undefined !== resp && undefined !== resp.data) {
                const {id, name, username, email, phone, website} = resp.data;
                this.setState(() => {
                    return {
                        userObj: {id, name, username, email, phone, website},
                        showAccdData: true,
                        visibleUserID: id
                    };
                });
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        this.state.ids.map(elell => console.log(elell));
        return (
            <div className="accd__wrap">
                <h2>Accordian</h2>
                <div className="accd__wrap--inner">
                    {
                        this.state.ids.map(userid => 
                        <AccordianElement 
                        id={userid}
                        handleAccdChevron = {() => this.handleAccdChevron(userid)}
                        userObj = {this.state.userObj}
                        showAccdData = {this.state.showAccdData}
                        />)
                    }
                </div>
            </div>
        );
    }
}

export default AccordianWrap;