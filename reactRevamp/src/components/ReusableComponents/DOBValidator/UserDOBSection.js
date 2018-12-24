import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDOBSection extends Component {
constructor(props) {
    super();
    this.state = {
        dobValue: props.userDateOfBirth,
        dateFormat: props.dateFormat,
        label: props.label
    }
}
    render() {
        return (
            <React.Fragment>
                <input type="text" placeholder={this.state.dateFormat}>

                </input>
            </React.Fragment>
        );
    }
}

UserDOBSection.propTypes = {
    userDateOfBirth: PropTypes.string,
    dateFormat: PropTypes.string,
    label: PropTypes.string
}

UserDOBSection.defaultProps = {
    userDateOfBirth: "12/11/1989",
    dateFormat: "MM/DD/YYYY",
    label: "Date Of Birth"
}


export default UserDOBSection;