import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from "moment";

class UserDOBSection extends Component {
constructor(props) {
    super();
    this.state = {
        dobValue: props.userDateOfBirth,
        dateFormat: props.dateFormat,
        label: props.label,
        errorMsg: null
    }
}

validateDateOfBirth(event) {
    let validationMsg = "";
    const dob = event.target.value;
    const dateFormat = this.state.dateFormat;
    var userAge = moment().diff(moment(dob, dateFormat), 'years')
    const lowerBoundDate = moment("01/01/1910").format(dateFormat);
    const currentDate = moment().format(dateFormat);
    const isValidDate = moment(dob, dateFormat, true).isValid();
    const isBetween = moment(dob).isBetween(lowerBoundDate, currentDate, 'date');
    if(!isValidDate){
        validationMsg = "Enter valid date of birth";
    } else if(!isBetween) {
        validationMsg = "Enter Date after JAN 01 1910 and before "+currentDate;
    } else if (userAge < 18) {
        validationMsg = "User to be atleast 18 years";
    } else {
        validationMsg = "Great , Entered valid DOB";
    }
    if(validationMsg !== " "){
        this.setState({
            errorMsg: validationMsg
        })
    }
    return validationMsg;
}

    render() {
        return (
            <div className="dobSection">
                <label> {this.state.label} </label>
                <input type="text" maxLength="10" onChange={this.validateDateOfBirth.bind(this)} 
                    name="validateDOB"  placeholder={this.state.dateFormat}>
                </input>
                <br />
                {
                    this.state.errorMsg && this.state.errorMsg !== " " &&
                    <h3>{this.state.errorMsg}</h3>
                }
            </div>
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
    dateFormat: "MM-DD-YYYY",
    label: "Date Of Birth"
}


export default UserDOBSection;