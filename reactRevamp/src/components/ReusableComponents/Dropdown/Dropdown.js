import React , { Component } from "react";
import PropTypes from "prop-types";
import "./dropdown.css";

class Dropdown extends Component {
    constructor(props) {
        super();
        this.state = {
            dropdownItems: props.dropdownlist
        };
    }
    render() {
        const dropdownOptions = this.state.dropdownItems.map(item => <option key={item}>{item}</option>);
        return (
            <div>
                <h3>Dropdown section</h3>
                <select className="dropdown-select">
                    { dropdownOptions }
                </select>
            </div>
        );
    }
};

Dropdown.propTypes = {
    dropdownlist: PropTypes.arrayOf(PropTypes.string)
};

export default Dropdown;