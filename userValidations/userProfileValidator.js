const moment = require("moment");

// Email validation
const validateUserEmail = (email) => {
    let errorMsg = '';
    let errorInfo = {};
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || email === undefined || email === null || email.length === 0) {
        errorMsg = 'Email address is mandatory';
    } else if (!email.match(emailRegex)) {
        errorMsg = 'Regex failure / Not a valid email';
    }
    errorInfo.email = errorMsg;
    Object.keys(errorInfo).forEach((ele) => {
        if(errorInfo[ele] === '') {
            errorMsg = 'Valid email address';
        } else {
            errorMsg = 'Not a valid email address'; 
        }
    });
    console.log(errorMsg);
    console.log('------');
};



// validate first name (Mandatory)
// ensure it's not blank and only contains letters.
const validateFirstName = (firstName) => {
    let fnameMsg = '';
    let fNameErrObj = {};
    const fNameReg = /^[a-z]+$/i;
    if (firstName === null || firstName === undefined || firstName.length === 0 || firstName === '') {
        fnameMsg = 'First name is mandatory';
    } else if (!firstName.match(fNameReg)) {
        fnameMsg = 'Not a valid first name';
    };

    fNameErrObj .fname = fnameMsg;
    Object.keys(fNameErrObj).forEach((ele) => {
        if(fNameErrObj[ele] === '') {
            fnameMsg = 'Valid First name';
        } else {
            fnameMsg = 'Invalid first name';
        }
    });
    console.log(fnameMsg);
    console.log('***********');
}

// validate user phone number
const validatePhoneNum = (phone) => {
    let phoneMsg = '';
    let phoneErrObj = {};
    var phoneNoRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone === null || phone === undefined || phone.length === 0 || phone === '') {
        phoneMsg = 'Phone number is mandatory';
    }   else if (phone[0] === "0" || !phone.match(phoneNoRegex)) {
        phoneMsg = 'Not a valid phone number';
    };

    phoneErrObj.phone = phoneMsg;
    Object.keys(phoneErrObj).forEach((ele) => {
        if (phoneErrObj[ele] === '') {
            phoneMsg = 'Valid Phone number';
        } else {
            phoneMsg = 'Invalid phone number';
        }
    });
    console.log(phoneMsg);
    console.log('^^^^^^^^^^^^^');
}




// Calling validations
validateUserEmail(null);
validateUserEmail("gerat rabiti ruie@gmail.com");
validateUserEmail("isudfksd@gmail.com");

validateFirstName("greatrabbit");
validateFirstName("askhk 98 ehj");

validatePhoneNum("2398478923");
validatePhoneNum("0430336392");
validatePhoneNum("6798asja8768");   